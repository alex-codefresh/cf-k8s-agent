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
var hapi_release_status_pb = require('../../hapi/release/status_pb.js');
goog.exportSymbol('proto.hapi.release.Info', null, global);

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
proto.hapi.release.Info = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hapi.release.Info, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hapi.release.Info.displayName = 'proto.hapi.release.Info';
}


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
proto.hapi.release.Info.prototype.toObject = function(opt_includeInstance) {
  return proto.hapi.release.Info.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hapi.release.Info} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hapi.release.Info.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && hapi_release_status_pb.Status.toObject(includeInstance, f),
    firstDeployed: (f = msg.getFirstDeployed()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastDeployed: (f = msg.getLastDeployed()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deleted: (f = msg.getDeleted()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.hapi.release.Info}
 */
proto.hapi.release.Info.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hapi.release.Info;
  return proto.hapi.release.Info.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hapi.release.Info} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hapi.release.Info}
 */
proto.hapi.release.Info.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new hapi_release_status_pb.Status;
      reader.readMessage(value,hapi_release_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFirstDeployed(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastDeployed(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeleted(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.hapi.release.Info.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hapi.release.Info.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hapi.release.Info} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hapi.release.Info.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      hapi_release_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getFirstDeployed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastDeployed();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeleted();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.hapi.release.Status}
 */
proto.hapi.release.Info.prototype.getStatus = function() {
  return /** @type{?proto.hapi.release.Status} */ (
    jspb.Message.getWrapperField(this, hapi_release_status_pb.Status, 1));
};


/** @param {?proto.hapi.release.Status|undefined} value */
proto.hapi.release.Info.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.hapi.release.Info.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hapi.release.Info.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp first_deployed = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.hapi.release.Info.prototype.getFirstDeployed = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.hapi.release.Info.prototype.setFirstDeployed = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hapi.release.Info.prototype.clearFirstDeployed = function() {
  this.setFirstDeployed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hapi.release.Info.prototype.hasFirstDeployed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp last_deployed = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.hapi.release.Info.prototype.getLastDeployed = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.hapi.release.Info.prototype.setLastDeployed = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hapi.release.Info.prototype.clearLastDeployed = function() {
  this.setLastDeployed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hapi.release.Info.prototype.hasLastDeployed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp deleted = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.hapi.release.Info.prototype.getDeleted = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.hapi.release.Info.prototype.setDeleted = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hapi.release.Info.prototype.clearDeleted = function() {
  this.setDeleted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hapi.release.Info.prototype.hasDeleted = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string Description = 5;
 * @return {string}
 */
proto.hapi.release.Info.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hapi.release.Info.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.hapi.release);
