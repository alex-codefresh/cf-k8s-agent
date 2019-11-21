'use strict';

const _ = require('lodash');

const releaseMetadataFactory = require('../../../../factory/release.factory');
const logger = require('../../../../logger');
const metadataHolder = require('../../../../filters/metadata.holder');

class ReleaseHandler {

    async handle(kind, items) {
        const codefreshApi = require('../../../../api/codefresh.api');

        logger.info(`Prepare to send ${items.length} ${kind}s`);

        await codefreshApi.clearInfo({
            kind: 'Release'
        });

        const result = [];

        for (const item of items) {
            item.kind = 'Release';
            const release = await releaseMetadataFactory.create(item, metadataHolder.get())
                .catch(e => logger.error(e));
            if (_.get(release, 'object.release')) {
                const rs = await codefreshApi.sendPackageWithoutLock([{
                    object: release.object,
                    type: 'ADDED',
                    counter: 1,
                    kind: 'Release'
                }]);
                result.push(rs);
            }
        }

        return result;
    }

}
module.exports = new ReleaseHandler();