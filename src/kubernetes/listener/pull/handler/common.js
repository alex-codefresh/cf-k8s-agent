const _ = require('lodash');
const Promise = require('bluebird');
const logger = require('../../../../logger');

const resourceFilter =  require('../../../../filters/resourcefields.filter');
const codefreshApi = require('../../../../api/codefresh.api');

const resourceCache = require('../resource.cache');

const kubernetes = require('../../../index');

class CommonHandler {

    async handle(kind, items) {

        logger.info(`Receive items ${items.length} ${kind}s`);

        const itemsForProcess = _.compact(await Promise.map(items, async (item) => {
            const uid = `${_.get(item, 'metadata.name')}-${_.get(item, 'metadata.resourceVersion')}`;
            if (!resourceCache.includes(uid, kind)) {

                if (kind === 'Service') {
                    const { globalStatus, spec } = await kubernetes.prepareService(item);
                    item.globalStatus = globalStatus;
                    item.spec = spec;
                }

                resourceCache.put(uid, kind);
                return item;
            }
            return null;
        }));

        resourceCache.flush(kind);

        logger.info(`Items for process ${itemsForProcess.length} ${kind}s`);


        const normalizedItems = itemsForProcess.map((item) => {
            const object = resourceFilter.filter({
                metadata: item.metadata,
                spec: item.spec,
                status: item.status,
                globalStatus: item.globalStatus,
                kind
            });
            return {
                object,
                type: 'ADDED',
                counter: 1
            };
        });

        logger.info(`Prepare to send ${normalizedItems.length} ${kind}s`);

        if (_.isEmpty(normalizedItems)) {
            logger.info('Not process data at all, items array is empty');
            return Promise.resolve();
        }

        await codefreshApi.clearInfo({
            kind
        });

        const chunks = _.chunk(normalizedItems, 200);
        return Promise.map(chunks.map((chunk) => {
            return codefreshApi.sendPackageWithoutLock(chunk);
        }), (job) => { return job; }, { concurrency: 5 });
    }

}
module.exports = new CommonHandler();
