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

goog.exportSymbol('proto.hapi.chart.Maintainer', null, global);
goog.exportSymbol('proto.hapi.chart.Metadata', null, global);
goog.exportSymbol('proto.hapi.chart.Metadata.Engine', null, global);

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
proto.hapi.chart.Maintainer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hapi.chart.Maintainer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hapi.chart.Maintainer.displayName = 'proto.hapi.chart.Maintainer';
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
proto.hapi.chart.Maintainer.prototype.toObject = function(opt_includeInstance) {
  return proto.hapi.chart.Maintainer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hapi.chart.Maintainer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hapi.chart.Maintainer.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.hapi.chart.Maintainer}
 */
proto.hapi.chart.Maintainer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hapi.chart.Maintainer;
  return proto.hapi.chart.Maintainer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hapi.chart.Maintainer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hapi.chart.Maintainer}
 */
proto.hapi.chart.Maintainer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
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
proto.hapi.chart.Maintainer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hapi.chart.Maintainer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hapi.chart.Maintainer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hapi.chart.Maintainer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.hapi.chart.Maintainer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hapi.chart.Maintainer.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.hapi.chart.Maintainer.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hapi.chart.Maintainer.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.hapi.chart.Maintainer.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hapi.chart.Maintainer.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



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
proto.hapi.chart.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hapi.chart.Metadata.repeatedFields_, null);
};
goog.inherits(proto.hapi.chart.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hapi.chart.Metadata.displayName = 'proto.hapi.chart.Metadata';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hapi.chart.Metadata.repeatedFields_ = [3,6,7];



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
proto.hapi.chart.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.hapi.chart.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hapi.chart.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hapi.chart.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    home: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sourcesList: jspb.Message.getRepeatedField(msg, 3),
    version: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    keywordsList: jspb.Message.getRepeatedField(msg, 6),
    maintainersList: jspb.Message.toObjectList(msg.getMaintainersList(),
    proto.hapi.chart.Maintainer.toObject, includeInstance),
    engine: jspb.Message.getFieldWithDefault(msg, 8, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 9, ""),
    apiversion: jspb.Message.getFieldWithDefault(msg, 10, ""),
    condition: jspb.Message.getFieldWithDefault(msg, 11, ""),
    tags: jspb.Message.getFieldWithDefault(msg, 12, ""),
    appversion: jspb.Message.getFieldWithDefault(msg, 13, ""),
    deprecated: jspb.Message.getFieldWithDefault(msg, 14, false),
    tillerversion: jspb.Message.getFieldWithDefault(msg, 15, ""),
    annotationsMap: (f = msg.getAnnotationsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.hapi.chart.Metadata}
 */
proto.hapi.chart.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hapi.chart.Metadata;
  return proto.hapi.chart.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hapi.chart.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hapi.chart.Metadata}
 */
proto.hapi.chart.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHome(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSources(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeywords(value);
      break;
    case 7:
      var value = new proto.hapi.chart.Maintainer;
      reader.readMessage(value,proto.hapi.chart.Maintainer.deserializeBinaryFromReader);
      msg.addMaintainers(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEngine(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiversion(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCondition(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTags(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppversion(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setTillerversion(value);
      break;
    case 16:
      var value = msg.getAnnotationsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
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
proto.hapi.chart.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hapi.chart.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hapi.chart.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hapi.chart.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHome();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getKeywordsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getMaintainersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.hapi.chart.Maintainer.serializeBinaryToWriter
    );
  }
  f = message.getEngine();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getApiversion();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCondition();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTags();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAppversion();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getDeprecated();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getTillerversion();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getAnnotationsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(16, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * @enum {number}
 */
proto.hapi.chart.Metadata.Engine = {
  UNKNOWN: 0,
  GOTPL: 1
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string home = 2;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setHome = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string sources = 3;
 * @return {!Array.<string>}
 */
proto.hapi.chart.Metadata.prototype.getSourcesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array.<string>} value */
proto.hapi.chart.Metadata.prototype.setSourcesList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.hapi.chart.Metadata.prototype.addSources = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.hapi.chart.Metadata.prototype.clearSourcesList = function() {
  this.setSourcesList([]);
};


/**
 * optional string version = 4;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setVersion = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string keywords = 6;
 * @return {!Array.<string>}
 */
proto.hapi.chart.Metadata.prototype.getKeywordsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array.<string>} value */
proto.hapi.chart.Metadata.prototype.setKeywordsList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.hapi.chart.Metadata.prototype.addKeywords = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.hapi.chart.Metadata.prototype.clearKeywordsList = function() {
  this.setKeywordsList([]);
};


/**
 * repeated Maintainer maintainers = 7;
 * @return {!Array.<!proto.hapi.chart.Maintainer>}
 */
proto.hapi.chart.Metadata.prototype.getMaintainersList = function() {
  return /** @type{!Array.<!proto.hapi.chart.Maintainer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.hapi.chart.Maintainer, 7));
};


/** @param {!Array.<!proto.hapi.chart.Maintainer>} value */
proto.hapi.chart.Metadata.prototype.setMaintainersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.hapi.chart.Maintainer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hapi.chart.Maintainer}
 */
proto.hapi.chart.Metadata.prototype.addMaintainers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.hapi.chart.Maintainer, opt_index);
};


proto.hapi.chart.Metadata.prototype.clearMaintainersList = function() {
  this.setMaintainersList([]);
};


/**
 * optional string engine = 8;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getEngine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setEngine = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string icon = 9;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setIcon = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string apiVersion = 10;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getApiversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setApiversion = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string condition = 11;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getCondition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setCondition = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string tags = 12;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getTags = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setTags = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string appVersion = 13;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getAppversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setAppversion = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool deprecated = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.hapi.chart.Metadata.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.hapi.chart.Metadata.prototype.setDeprecated = function(value) {
  jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional string tillerVersion = 15;
 * @return {string}
 */
proto.hapi.chart.Metadata.prototype.getTillerversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.hapi.chart.Metadata.prototype.setTillerversion = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * map<string, string> annotations = 16;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.hapi.chart.Metadata.prototype.getAnnotationsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 16, opt_noLazyCreate,
      null));
};


proto.hapi.chart.Metadata.prototype.clearAnnotationsMap = function() {
  this.getAnnotationsMap().clear();
};


goog.object.extend(exports, proto.hapi.chart);
