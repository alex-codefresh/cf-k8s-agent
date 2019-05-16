/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var hapi_release_test_run_pb = require('../../hapi/release/test_run_pb.js');
goog.exportSymbol('proto.hapi.release.TestSuite', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hapi.release.TestSuite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hapi.release.TestSuite.repeatedFields_, null);
};
goog.inherits(proto.hapi.release.TestSuite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hapi.release.TestSuite.displayName = 'proto.hapi.release.TestSuite';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hapi.release.TestSuite.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hapi.release.TestSuite.prototype.toObject = function(opt_includeInstance) {
  return proto.hapi.release.TestSuite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hapi.release.TestSuite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hapi.release.TestSuite.toObject = function(includeInstance, msg) {
  var f, obj = {
    startedAt: (f = msg.getStartedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    completedAt: (f = msg.getCompletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    hapi_release_test_run_pb.TestRun.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hapi.release.TestSuite}
 */
proto.hapi.release.TestSuite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hapi.release.TestSuite;
  return proto.hapi.release.TestSuite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hapi.release.TestSuite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hapi.release.TestSuite}
 */
proto.hapi.release.TestSuite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedAt(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCompletedAt(value);
      break;
    case 3:
      var value = new hapi_release_test_run_pb.TestRun;
      reader.readMessage(value,hapi_release_test_run_pb.TestRun.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hapi.release.TestSuite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hapi.release.TestSuite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hapi.release.TestSuite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hapi.release.TestSuite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartedAt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCompletedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      hapi_release_test_run_pb.TestRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp started_at = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.hapi.release.TestSuite.prototype.getStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.hapi.release.TestSuite.prototype.setStartedAt = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.hapi.release.TestSuite.prototype.clearStartedAt = function() {
  this.setStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hapi.release.TestSuite.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp completed_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.hapi.release.TestSuite.prototype.getCompletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.hapi.release.TestSuite.prototype.setCompletedAt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hapi.release.TestSuite.prototype.clearCompletedAt = function() {
  this.setCompletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hapi.release.TestSuite.prototype.hasCompletedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated TestRun results = 3;
 * @return {!Array.<!proto.hapi.release.TestRun>}
 */
proto.hapi.release.TestSuite.prototype.getResultsList = function() {
  return /** @type{!Array.<!proto.hapi.release.TestRun>} */ (
    jspb.Message.getRepeatedWrapperField(this, hapi_release_test_run_pb.TestRun, 3));
};


/** @param {!Array.<!proto.hapi.release.TestRun>} value */
proto.hapi.release.TestSuite.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.hapi.release.TestRun=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hapi.release.TestRun}
 */
proto.hapi.release.TestSuite.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.hapi.release.TestRun, opt_index);
};


proto.hapi.release.TestSuite.prototype.clearResultsList = function() {
  this.setResultsList([]);
};


goog.object.extend(exports, proto.hapi.release);
