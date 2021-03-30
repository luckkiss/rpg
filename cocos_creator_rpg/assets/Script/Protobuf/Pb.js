/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.battle_p_unit_info = (function() {

    /**
     * Properties of a battle_p_unit_info.
     * @exports Ibattle_p_unit_info
     * @interface Ibattle_p_unit_info
     * @property {number|null} [id] battle_p_unit_info id
     * @property {string|null} [name] battle_p_unit_info name
     * @property {number|null} [career] battle_p_unit_info career
     * @property {number|null} [x] battle_p_unit_info x
     * @property {number|null} [y] battle_p_unit_info y
     * @property {number|null} [face] battle_p_unit_info face
     */

    /**
     * Constructs a new battle_p_unit_info.
     * @exports battle_p_unit_info
     * @classdesc Represents a battle_p_unit_info.
     * @implements Ibattle_p_unit_info
     * @constructor
     * @param {Ibattle_p_unit_info=} [properties] Properties to set
     */
    function battle_p_unit_info(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * battle_p_unit_info id.
     * @member {number} id
     * @memberof battle_p_unit_info
     * @instance
     */
    battle_p_unit_info.prototype.id = 0;

    /**
     * battle_p_unit_info name.
     * @member {string} name
     * @memberof battle_p_unit_info
     * @instance
     */
    battle_p_unit_info.prototype.name = "";

    /**
     * battle_p_unit_info career.
     * @member {number} career
     * @memberof battle_p_unit_info
     * @instance
     */
    battle_p_unit_info.prototype.career = 0;

    /**
     * battle_p_unit_info x.
     * @member {number} x
     * @memberof battle_p_unit_info
     * @instance
     */
    battle_p_unit_info.prototype.x = 0;

    /**
     * battle_p_unit_info y.
     * @member {number} y
     * @memberof battle_p_unit_info
     * @instance
     */
    battle_p_unit_info.prototype.y = 0;

    /**
     * battle_p_unit_info face.
     * @member {number} face
     * @memberof battle_p_unit_info
     * @instance
     */
    battle_p_unit_info.prototype.face = 0;

    /**
     * Creates a new battle_p_unit_info instance using the specified properties.
     * @function create
     * @memberof battle_p_unit_info
     * @static
     * @param {Ibattle_p_unit_info=} [properties] Properties to set
     * @returns {battle_p_unit_info} battle_p_unit_info instance
     */
    battle_p_unit_info.create = function create(properties) {
        return new battle_p_unit_info(properties);
    };

    /**
     * Encodes the specified battle_p_unit_info message. Does not implicitly {@link battle_p_unit_info.verify|verify} messages.
     * @function encode
     * @memberof battle_p_unit_info
     * @static
     * @param {Ibattle_p_unit_info} message battle_p_unit_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_p_unit_info.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.career != null && Object.hasOwnProperty.call(message, "career"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.career);
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.y);
        if (message.face != null && Object.hasOwnProperty.call(message, "face"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.face);
        return writer;
    };

    /**
     * Encodes the specified battle_p_unit_info message, length delimited. Does not implicitly {@link battle_p_unit_info.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_p_unit_info
     * @static
     * @param {Ibattle_p_unit_info} message battle_p_unit_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_p_unit_info.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_p_unit_info message from the specified reader or buffer.
     * @function decode
     * @memberof battle_p_unit_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_p_unit_info} battle_p_unit_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_p_unit_info.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_p_unit_info();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.career = reader.uint32();
                break;
            case 4:
                message.x = reader.int32();
                break;
            case 5:
                message.y = reader.int32();
                break;
            case 6:
                message.face = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_p_unit_info message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_p_unit_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_p_unit_info} battle_p_unit_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_p_unit_info.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_p_unit_info message.
     * @function verify
     * @memberof battle_p_unit_info
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_p_unit_info.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.career != null && message.hasOwnProperty("career"))
            if (!$util.isInteger(message.career))
                return "career: integer expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (!$util.isInteger(message.x))
                return "x: integer expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (!$util.isInteger(message.y))
                return "y: integer expected";
        if (message.face != null && message.hasOwnProperty("face"))
            if (!$util.isInteger(message.face))
                return "face: integer expected";
        return null;
    };

    /**
     * Creates a battle_p_unit_info message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_p_unit_info
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_p_unit_info} battle_p_unit_info
     */
    battle_p_unit_info.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_p_unit_info)
            return object;
        var message = new $root.battle_p_unit_info();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.career != null)
            message.career = object.career >>> 0;
        if (object.x != null)
            message.x = object.x | 0;
        if (object.y != null)
            message.y = object.y | 0;
        if (object.face != null)
            message.face = object.face | 0;
        return message;
    };

    /**
     * Creates a plain object from a battle_p_unit_info message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_p_unit_info
     * @static
     * @param {battle_p_unit_info} message battle_p_unit_info
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_p_unit_info.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.career = 0;
            object.x = 0;
            object.y = 0;
            object.face = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.career != null && message.hasOwnProperty("career"))
            object.career = message.career;
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = message.y;
        if (message.face != null && message.hasOwnProperty("face"))
            object.face = message.face;
        return object;
    };

    /**
     * Converts this battle_p_unit_info to JSON.
     * @function toJSON
     * @memberof battle_p_unit_info
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_p_unit_info.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_p_unit_info;
})();

$root.battle_c_all_unit = (function() {

    /**
     * Properties of a battle_c_all_unit.
     * @exports Ibattle_c_all_unit
     * @interface Ibattle_c_all_unit
     */

    /**
     * Constructs a new battle_c_all_unit.
     * @exports battle_c_all_unit
     * @classdesc Represents a battle_c_all_unit.
     * @implements Ibattle_c_all_unit
     * @constructor
     * @param {Ibattle_c_all_unit=} [properties] Properties to set
     */
    function battle_c_all_unit(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new battle_c_all_unit instance using the specified properties.
     * @function create
     * @memberof battle_c_all_unit
     * @static
     * @param {Ibattle_c_all_unit=} [properties] Properties to set
     * @returns {battle_c_all_unit} battle_c_all_unit instance
     */
    battle_c_all_unit.create = function create(properties) {
        return new battle_c_all_unit(properties);
    };

    /**
     * Encodes the specified battle_c_all_unit message. Does not implicitly {@link battle_c_all_unit.verify|verify} messages.
     * @function encode
     * @memberof battle_c_all_unit
     * @static
     * @param {Ibattle_c_all_unit} message battle_c_all_unit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_c_all_unit.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified battle_c_all_unit message, length delimited. Does not implicitly {@link battle_c_all_unit.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_c_all_unit
     * @static
     * @param {Ibattle_c_all_unit} message battle_c_all_unit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_c_all_unit.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_c_all_unit message from the specified reader or buffer.
     * @function decode
     * @memberof battle_c_all_unit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_c_all_unit} battle_c_all_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_c_all_unit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_c_all_unit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_c_all_unit message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_c_all_unit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_c_all_unit} battle_c_all_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_c_all_unit.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_c_all_unit message.
     * @function verify
     * @memberof battle_c_all_unit
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_c_all_unit.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a battle_c_all_unit message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_c_all_unit
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_c_all_unit} battle_c_all_unit
     */
    battle_c_all_unit.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_c_all_unit)
            return object;
        return new $root.battle_c_all_unit();
    };

    /**
     * Creates a plain object from a battle_c_all_unit message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_c_all_unit
     * @static
     * @param {battle_c_all_unit} message battle_c_all_unit
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_c_all_unit.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this battle_c_all_unit to JSON.
     * @function toJSON
     * @memberof battle_c_all_unit
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_c_all_unit.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_c_all_unit;
})();

$root.battle_s_all_unit = (function() {

    /**
     * Properties of a battle_s_all_unit.
     * @exports Ibattle_s_all_unit
     * @interface Ibattle_s_all_unit
     * @property {Array.<Ibattle_p_unit_info>|null} [unitList] battle_s_all_unit unitList
     */

    /**
     * Constructs a new battle_s_all_unit.
     * @exports battle_s_all_unit
     * @classdesc Represents a battle_s_all_unit.
     * @implements Ibattle_s_all_unit
     * @constructor
     * @param {Ibattle_s_all_unit=} [properties] Properties to set
     */
    function battle_s_all_unit(properties) {
        this.unitList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * battle_s_all_unit unitList.
     * @member {Array.<Ibattle_p_unit_info>} unitList
     * @memberof battle_s_all_unit
     * @instance
     */
    battle_s_all_unit.prototype.unitList = $util.emptyArray;

    /**
     * Creates a new battle_s_all_unit instance using the specified properties.
     * @function create
     * @memberof battle_s_all_unit
     * @static
     * @param {Ibattle_s_all_unit=} [properties] Properties to set
     * @returns {battle_s_all_unit} battle_s_all_unit instance
     */
    battle_s_all_unit.create = function create(properties) {
        return new battle_s_all_unit(properties);
    };

    /**
     * Encodes the specified battle_s_all_unit message. Does not implicitly {@link battle_s_all_unit.verify|verify} messages.
     * @function encode
     * @memberof battle_s_all_unit
     * @static
     * @param {Ibattle_s_all_unit} message battle_s_all_unit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_all_unit.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.unitList != null && message.unitList.length)
            for (var i = 0; i < message.unitList.length; ++i)
                $root.battle_p_unit_info.encode(message.unitList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified battle_s_all_unit message, length delimited. Does not implicitly {@link battle_s_all_unit.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_s_all_unit
     * @static
     * @param {Ibattle_s_all_unit} message battle_s_all_unit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_all_unit.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_s_all_unit message from the specified reader or buffer.
     * @function decode
     * @memberof battle_s_all_unit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_s_all_unit} battle_s_all_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_all_unit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_s_all_unit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.unitList && message.unitList.length))
                    message.unitList = [];
                message.unitList.push($root.battle_p_unit_info.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_s_all_unit message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_s_all_unit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_s_all_unit} battle_s_all_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_all_unit.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_s_all_unit message.
     * @function verify
     * @memberof battle_s_all_unit
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_s_all_unit.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.unitList != null && message.hasOwnProperty("unitList")) {
            if (!Array.isArray(message.unitList))
                return "unitList: array expected";
            for (var i = 0; i < message.unitList.length; ++i) {
                var error = $root.battle_p_unit_info.verify(message.unitList[i]);
                if (error)
                    return "unitList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a battle_s_all_unit message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_s_all_unit
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_s_all_unit} battle_s_all_unit
     */
    battle_s_all_unit.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_s_all_unit)
            return object;
        var message = new $root.battle_s_all_unit();
        if (object.unitList) {
            if (!Array.isArray(object.unitList))
                throw TypeError(".battle_s_all_unit.unitList: array expected");
            message.unitList = [];
            for (var i = 0; i < object.unitList.length; ++i) {
                if (typeof object.unitList[i] !== "object")
                    throw TypeError(".battle_s_all_unit.unitList: object expected");
                message.unitList[i] = $root.battle_p_unit_info.fromObject(object.unitList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a battle_s_all_unit message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_s_all_unit
     * @static
     * @param {battle_s_all_unit} message battle_s_all_unit
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_s_all_unit.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.unitList = [];
        if (message.unitList && message.unitList.length) {
            object.unitList = [];
            for (var j = 0; j < message.unitList.length; ++j)
                object.unitList[j] = $root.battle_p_unit_info.toObject(message.unitList[j], options);
        }
        return object;
    };

    /**
     * Converts this battle_s_all_unit to JSON.
     * @function toJSON
     * @memberof battle_s_all_unit
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_s_all_unit.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_s_all_unit;
})();

$root.battle_s_update_unit = (function() {

    /**
     * Properties of a battle_s_update_unit.
     * @exports Ibattle_s_update_unit
     * @interface Ibattle_s_update_unit
     * @property {Ibattle_p_unit_info|null} [unit] battle_s_update_unit unit
     */

    /**
     * Constructs a new battle_s_update_unit.
     * @exports battle_s_update_unit
     * @classdesc Represents a battle_s_update_unit.
     * @implements Ibattle_s_update_unit
     * @constructor
     * @param {Ibattle_s_update_unit=} [properties] Properties to set
     */
    function battle_s_update_unit(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * battle_s_update_unit unit.
     * @member {Ibattle_p_unit_info|null|undefined} unit
     * @memberof battle_s_update_unit
     * @instance
     */
    battle_s_update_unit.prototype.unit = null;

    /**
     * Creates a new battle_s_update_unit instance using the specified properties.
     * @function create
     * @memberof battle_s_update_unit
     * @static
     * @param {Ibattle_s_update_unit=} [properties] Properties to set
     * @returns {battle_s_update_unit} battle_s_update_unit instance
     */
    battle_s_update_unit.create = function create(properties) {
        return new battle_s_update_unit(properties);
    };

    /**
     * Encodes the specified battle_s_update_unit message. Does not implicitly {@link battle_s_update_unit.verify|verify} messages.
     * @function encode
     * @memberof battle_s_update_unit
     * @static
     * @param {Ibattle_s_update_unit} message battle_s_update_unit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_update_unit.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.unit != null && Object.hasOwnProperty.call(message, "unit"))
            $root.battle_p_unit_info.encode(message.unit, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified battle_s_update_unit message, length delimited. Does not implicitly {@link battle_s_update_unit.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_s_update_unit
     * @static
     * @param {Ibattle_s_update_unit} message battle_s_update_unit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_update_unit.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_s_update_unit message from the specified reader or buffer.
     * @function decode
     * @memberof battle_s_update_unit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_s_update_unit} battle_s_update_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_update_unit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_s_update_unit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.unit = $root.battle_p_unit_info.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_s_update_unit message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_s_update_unit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_s_update_unit} battle_s_update_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_update_unit.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_s_update_unit message.
     * @function verify
     * @memberof battle_s_update_unit
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_s_update_unit.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.unit != null && message.hasOwnProperty("unit")) {
            var error = $root.battle_p_unit_info.verify(message.unit);
            if (error)
                return "unit." + error;
        }
        return null;
    };

    /**
     * Creates a battle_s_update_unit message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_s_update_unit
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_s_update_unit} battle_s_update_unit
     */
    battle_s_update_unit.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_s_update_unit)
            return object;
        var message = new $root.battle_s_update_unit();
        if (object.unit != null) {
            if (typeof object.unit !== "object")
                throw TypeError(".battle_s_update_unit.unit: object expected");
            message.unit = $root.battle_p_unit_info.fromObject(object.unit);
        }
        return message;
    };

    /**
     * Creates a plain object from a battle_s_update_unit message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_s_update_unit
     * @static
     * @param {battle_s_update_unit} message battle_s_update_unit
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_s_update_unit.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.unit = null;
        if (message.unit != null && message.hasOwnProperty("unit"))
            object.unit = $root.battle_p_unit_info.toObject(message.unit, options);
        return object;
    };

    /**
     * Converts this battle_s_update_unit to JSON.
     * @function toJSON
     * @memberof battle_s_update_unit
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_s_update_unit.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_s_update_unit;
})();

$root.battle_s_del_unit = (function() {

    /**
     * Properties of a battle_s_del_unit.
     * @exports Ibattle_s_del_unit
     * @interface Ibattle_s_del_unit
     * @property {number|null} [id] battle_s_del_unit id
     */

    /**
     * Constructs a new battle_s_del_unit.
     * @exports battle_s_del_unit
     * @classdesc Represents a battle_s_del_unit.
     * @implements Ibattle_s_del_unit
     * @constructor
     * @param {Ibattle_s_del_unit=} [properties] Properties to set
     */
    function battle_s_del_unit(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * battle_s_del_unit id.
     * @member {number} id
     * @memberof battle_s_del_unit
     * @instance
     */
    battle_s_del_unit.prototype.id = 0;

    /**
     * Creates a new battle_s_del_unit instance using the specified properties.
     * @function create
     * @memberof battle_s_del_unit
     * @static
     * @param {Ibattle_s_del_unit=} [properties] Properties to set
     * @returns {battle_s_del_unit} battle_s_del_unit instance
     */
    battle_s_del_unit.create = function create(properties) {
        return new battle_s_del_unit(properties);
    };

    /**
     * Encodes the specified battle_s_del_unit message. Does not implicitly {@link battle_s_del_unit.verify|verify} messages.
     * @function encode
     * @memberof battle_s_del_unit
     * @static
     * @param {Ibattle_s_del_unit} message battle_s_del_unit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_del_unit.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        return writer;
    };

    /**
     * Encodes the specified battle_s_del_unit message, length delimited. Does not implicitly {@link battle_s_del_unit.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_s_del_unit
     * @static
     * @param {Ibattle_s_del_unit} message battle_s_del_unit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_del_unit.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_s_del_unit message from the specified reader or buffer.
     * @function decode
     * @memberof battle_s_del_unit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_s_del_unit} battle_s_del_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_del_unit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_s_del_unit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_s_del_unit message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_s_del_unit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_s_del_unit} battle_s_del_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_del_unit.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_s_del_unit message.
     * @function verify
     * @memberof battle_s_del_unit
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_s_del_unit.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a battle_s_del_unit message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_s_del_unit
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_s_del_unit} battle_s_del_unit
     */
    battle_s_del_unit.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_s_del_unit)
            return object;
        var message = new $root.battle_s_del_unit();
        if (object.id != null)
            message.id = object.id >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a battle_s_del_unit message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_s_del_unit
     * @static
     * @param {battle_s_del_unit} message battle_s_del_unit
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_s_del_unit.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this battle_s_del_unit to JSON.
     * @function toJSON
     * @memberof battle_s_del_unit
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_s_del_unit.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_s_del_unit;
})();

$root.battle_c_skill = (function() {

    /**
     * Properties of a battle_c_skill.
     * @exports Ibattle_c_skill
     * @interface Ibattle_c_skill
     * @property {number|null} [skillId] battle_c_skill skillId
     * @property {Array.<number>|null} [hitList] battle_c_skill hitList
     */

    /**
     * Constructs a new battle_c_skill.
     * @exports battle_c_skill
     * @classdesc Represents a battle_c_skill.
     * @implements Ibattle_c_skill
     * @constructor
     * @param {Ibattle_c_skill=} [properties] Properties to set
     */
    function battle_c_skill(properties) {
        this.hitList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * battle_c_skill skillId.
     * @member {number} skillId
     * @memberof battle_c_skill
     * @instance
     */
    battle_c_skill.prototype.skillId = 0;

    /**
     * battle_c_skill hitList.
     * @member {Array.<number>} hitList
     * @memberof battle_c_skill
     * @instance
     */
    battle_c_skill.prototype.hitList = $util.emptyArray;

    /**
     * Creates a new battle_c_skill instance using the specified properties.
     * @function create
     * @memberof battle_c_skill
     * @static
     * @param {Ibattle_c_skill=} [properties] Properties to set
     * @returns {battle_c_skill} battle_c_skill instance
     */
    battle_c_skill.create = function create(properties) {
        return new battle_c_skill(properties);
    };

    /**
     * Encodes the specified battle_c_skill message. Does not implicitly {@link battle_c_skill.verify|verify} messages.
     * @function encode
     * @memberof battle_c_skill
     * @static
     * @param {Ibattle_c_skill} message battle_c_skill message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_c_skill.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.skillId != null && Object.hasOwnProperty.call(message, "skillId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.skillId);
        if (message.hitList != null && message.hitList.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.hitList.length; ++i)
                writer.uint32(message.hitList[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified battle_c_skill message, length delimited. Does not implicitly {@link battle_c_skill.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_c_skill
     * @static
     * @param {Ibattle_c_skill} message battle_c_skill message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_c_skill.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_c_skill message from the specified reader or buffer.
     * @function decode
     * @memberof battle_c_skill
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_c_skill} battle_c_skill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_c_skill.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_c_skill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.skillId = reader.uint32();
                break;
            case 2:
                if (!(message.hitList && message.hitList.length))
                    message.hitList = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.hitList.push(reader.uint32());
                } else
                    message.hitList.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_c_skill message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_c_skill
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_c_skill} battle_c_skill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_c_skill.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_c_skill message.
     * @function verify
     * @memberof battle_c_skill
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_c_skill.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            if (!$util.isInteger(message.skillId))
                return "skillId: integer expected";
        if (message.hitList != null && message.hasOwnProperty("hitList")) {
            if (!Array.isArray(message.hitList))
                return "hitList: array expected";
            for (var i = 0; i < message.hitList.length; ++i)
                if (!$util.isInteger(message.hitList[i]))
                    return "hitList: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a battle_c_skill message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_c_skill
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_c_skill} battle_c_skill
     */
    battle_c_skill.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_c_skill)
            return object;
        var message = new $root.battle_c_skill();
        if (object.skillId != null)
            message.skillId = object.skillId >>> 0;
        if (object.hitList) {
            if (!Array.isArray(object.hitList))
                throw TypeError(".battle_c_skill.hitList: array expected");
            message.hitList = [];
            for (var i = 0; i < object.hitList.length; ++i)
                message.hitList[i] = object.hitList[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a battle_c_skill message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_c_skill
     * @static
     * @param {battle_c_skill} message battle_c_skill
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_c_skill.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.hitList = [];
        if (options.defaults)
            object.skillId = 0;
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            object.skillId = message.skillId;
        if (message.hitList && message.hitList.length) {
            object.hitList = [];
            for (var j = 0; j < message.hitList.length; ++j)
                object.hitList[j] = message.hitList[j];
        }
        return object;
    };

    /**
     * Converts this battle_c_skill to JSON.
     * @function toJSON
     * @memberof battle_c_skill
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_c_skill.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_c_skill;
})();

$root.battle_s_skill = (function() {

    /**
     * Properties of a battle_s_skill.
     * @exports Ibattle_s_skill
     * @interface Ibattle_s_skill
     * @property {number|null} [skillId] battle_s_skill skillId
     * @property {number|null} [id] battle_s_skill id
     */

    /**
     * Constructs a new battle_s_skill.
     * @exports battle_s_skill
     * @classdesc Represents a battle_s_skill.
     * @implements Ibattle_s_skill
     * @constructor
     * @param {Ibattle_s_skill=} [properties] Properties to set
     */
    function battle_s_skill(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * battle_s_skill skillId.
     * @member {number} skillId
     * @memberof battle_s_skill
     * @instance
     */
    battle_s_skill.prototype.skillId = 0;

    /**
     * battle_s_skill id.
     * @member {number} id
     * @memberof battle_s_skill
     * @instance
     */
    battle_s_skill.prototype.id = 0;

    /**
     * Creates a new battle_s_skill instance using the specified properties.
     * @function create
     * @memberof battle_s_skill
     * @static
     * @param {Ibattle_s_skill=} [properties] Properties to set
     * @returns {battle_s_skill} battle_s_skill instance
     */
    battle_s_skill.create = function create(properties) {
        return new battle_s_skill(properties);
    };

    /**
     * Encodes the specified battle_s_skill message. Does not implicitly {@link battle_s_skill.verify|verify} messages.
     * @function encode
     * @memberof battle_s_skill
     * @static
     * @param {Ibattle_s_skill} message battle_s_skill message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_skill.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.skillId != null && Object.hasOwnProperty.call(message, "skillId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.skillId);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
        return writer;
    };

    /**
     * Encodes the specified battle_s_skill message, length delimited. Does not implicitly {@link battle_s_skill.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_s_skill
     * @static
     * @param {Ibattle_s_skill} message battle_s_skill message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_skill.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_s_skill message from the specified reader or buffer.
     * @function decode
     * @memberof battle_s_skill
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_s_skill} battle_s_skill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_skill.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_s_skill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.skillId = reader.uint32();
                break;
            case 2:
                message.id = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_s_skill message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_s_skill
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_s_skill} battle_s_skill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_skill.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_s_skill message.
     * @function verify
     * @memberof battle_s_skill
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_s_skill.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            if (!$util.isInteger(message.skillId))
                return "skillId: integer expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a battle_s_skill message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_s_skill
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_s_skill} battle_s_skill
     */
    battle_s_skill.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_s_skill)
            return object;
        var message = new $root.battle_s_skill();
        if (object.skillId != null)
            message.skillId = object.skillId >>> 0;
        if (object.id != null)
            message.id = object.id >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a battle_s_skill message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_s_skill
     * @static
     * @param {battle_s_skill} message battle_s_skill
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_s_skill.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.skillId = 0;
            object.id = 0;
        }
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            object.skillId = message.skillId;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this battle_s_skill to JSON.
     * @function toJSON
     * @memberof battle_s_skill
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_s_skill.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_s_skill;
})();

$root.battle_s_hit = (function() {

    /**
     * Properties of a battle_s_hit.
     * @exports Ibattle_s_hit
     * @interface Ibattle_s_hit
     * @property {number|null} [hurt] battle_s_hit hurt
     * @property {number|null} [id] battle_s_hit id
     */

    /**
     * Constructs a new battle_s_hit.
     * @exports battle_s_hit
     * @classdesc Represents a battle_s_hit.
     * @implements Ibattle_s_hit
     * @constructor
     * @param {Ibattle_s_hit=} [properties] Properties to set
     */
    function battle_s_hit(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * battle_s_hit hurt.
     * @member {number} hurt
     * @memberof battle_s_hit
     * @instance
     */
    battle_s_hit.prototype.hurt = 0;

    /**
     * battle_s_hit id.
     * @member {number} id
     * @memberof battle_s_hit
     * @instance
     */
    battle_s_hit.prototype.id = 0;

    /**
     * Creates a new battle_s_hit instance using the specified properties.
     * @function create
     * @memberof battle_s_hit
     * @static
     * @param {Ibattle_s_hit=} [properties] Properties to set
     * @returns {battle_s_hit} battle_s_hit instance
     */
    battle_s_hit.create = function create(properties) {
        return new battle_s_hit(properties);
    };

    /**
     * Encodes the specified battle_s_hit message. Does not implicitly {@link battle_s_hit.verify|verify} messages.
     * @function encode
     * @memberof battle_s_hit
     * @static
     * @param {Ibattle_s_hit} message battle_s_hit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_hit.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hurt != null && Object.hasOwnProperty.call(message, "hurt"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.hurt);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
        return writer;
    };

    /**
     * Encodes the specified battle_s_hit message, length delimited. Does not implicitly {@link battle_s_hit.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_s_hit
     * @static
     * @param {Ibattle_s_hit} message battle_s_hit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_hit.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_s_hit message from the specified reader or buffer.
     * @function decode
     * @memberof battle_s_hit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_s_hit} battle_s_hit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_hit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_s_hit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hurt = reader.uint32();
                break;
            case 2:
                message.id = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_s_hit message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_s_hit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_s_hit} battle_s_hit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_hit.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_s_hit message.
     * @function verify
     * @memberof battle_s_hit
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_s_hit.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hurt != null && message.hasOwnProperty("hurt"))
            if (!$util.isInteger(message.hurt))
                return "hurt: integer expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a battle_s_hit message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_s_hit
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_s_hit} battle_s_hit
     */
    battle_s_hit.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_s_hit)
            return object;
        var message = new $root.battle_s_hit();
        if (object.hurt != null)
            message.hurt = object.hurt >>> 0;
        if (object.id != null)
            message.id = object.id >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a battle_s_hit message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_s_hit
     * @static
     * @param {battle_s_hit} message battle_s_hit
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_s_hit.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.hurt = 0;
            object.id = 0;
        }
        if (message.hurt != null && message.hasOwnProperty("hurt"))
            object.hurt = message.hurt;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this battle_s_hit to JSON.
     * @function toJSON
     * @memberof battle_s_hit
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_s_hit.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_s_hit;
})();

$root.battle_c_move_start = (function() {

    /**
     * Properties of a battle_c_move_start.
     * @exports Ibattle_c_move_start
     * @interface Ibattle_c_move_start
     * @property {number|null} [face] battle_c_move_start face
     */

    /**
     * Constructs a new battle_c_move_start.
     * @exports battle_c_move_start
     * @classdesc Represents a battle_c_move_start.
     * @implements Ibattle_c_move_start
     * @constructor
     * @param {Ibattle_c_move_start=} [properties] Properties to set
     */
    function battle_c_move_start(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * battle_c_move_start face.
     * @member {number} face
     * @memberof battle_c_move_start
     * @instance
     */
    battle_c_move_start.prototype.face = 0;

    /**
     * Creates a new battle_c_move_start instance using the specified properties.
     * @function create
     * @memberof battle_c_move_start
     * @static
     * @param {Ibattle_c_move_start=} [properties] Properties to set
     * @returns {battle_c_move_start} battle_c_move_start instance
     */
    battle_c_move_start.create = function create(properties) {
        return new battle_c_move_start(properties);
    };

    /**
     * Encodes the specified battle_c_move_start message. Does not implicitly {@link battle_c_move_start.verify|verify} messages.
     * @function encode
     * @memberof battle_c_move_start
     * @static
     * @param {Ibattle_c_move_start} message battle_c_move_start message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_c_move_start.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.face != null && Object.hasOwnProperty.call(message, "face"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.face);
        return writer;
    };

    /**
     * Encodes the specified battle_c_move_start message, length delimited. Does not implicitly {@link battle_c_move_start.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_c_move_start
     * @static
     * @param {Ibattle_c_move_start} message battle_c_move_start message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_c_move_start.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_c_move_start message from the specified reader or buffer.
     * @function decode
     * @memberof battle_c_move_start
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_c_move_start} battle_c_move_start
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_c_move_start.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_c_move_start();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.face = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_c_move_start message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_c_move_start
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_c_move_start} battle_c_move_start
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_c_move_start.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_c_move_start message.
     * @function verify
     * @memberof battle_c_move_start
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_c_move_start.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.face != null && message.hasOwnProperty("face"))
            if (!$util.isInteger(message.face))
                return "face: integer expected";
        return null;
    };

    /**
     * Creates a battle_c_move_start message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_c_move_start
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_c_move_start} battle_c_move_start
     */
    battle_c_move_start.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_c_move_start)
            return object;
        var message = new $root.battle_c_move_start();
        if (object.face != null)
            message.face = object.face | 0;
        return message;
    };

    /**
     * Creates a plain object from a battle_c_move_start message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_c_move_start
     * @static
     * @param {battle_c_move_start} message battle_c_move_start
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_c_move_start.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.face = 0;
        if (message.face != null && message.hasOwnProperty("face"))
            object.face = message.face;
        return object;
    };

    /**
     * Converts this battle_c_move_start to JSON.
     * @function toJSON
     * @memberof battle_c_move_start
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_c_move_start.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_c_move_start;
})();

$root.battle_s_move_start = (function() {

    /**
     * Properties of a battle_s_move_start.
     * @exports Ibattle_s_move_start
     * @interface Ibattle_s_move_start
     * @property {number|null} [id] battle_s_move_start id
     * @property {number|null} [face] battle_s_move_start face
     * @property {number|null} [x] battle_s_move_start x
     * @property {number|null} [y] battle_s_move_start y
     */

    /**
     * Constructs a new battle_s_move_start.
     * @exports battle_s_move_start
     * @classdesc Represents a battle_s_move_start.
     * @implements Ibattle_s_move_start
     * @constructor
     * @param {Ibattle_s_move_start=} [properties] Properties to set
     */
    function battle_s_move_start(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * battle_s_move_start id.
     * @member {number} id
     * @memberof battle_s_move_start
     * @instance
     */
    battle_s_move_start.prototype.id = 0;

    /**
     * battle_s_move_start face.
     * @member {number} face
     * @memberof battle_s_move_start
     * @instance
     */
    battle_s_move_start.prototype.face = 0;

    /**
     * battle_s_move_start x.
     * @member {number} x
     * @memberof battle_s_move_start
     * @instance
     */
    battle_s_move_start.prototype.x = 0;

    /**
     * battle_s_move_start y.
     * @member {number} y
     * @memberof battle_s_move_start
     * @instance
     */
    battle_s_move_start.prototype.y = 0;

    /**
     * Creates a new battle_s_move_start instance using the specified properties.
     * @function create
     * @memberof battle_s_move_start
     * @static
     * @param {Ibattle_s_move_start=} [properties] Properties to set
     * @returns {battle_s_move_start} battle_s_move_start instance
     */
    battle_s_move_start.create = function create(properties) {
        return new battle_s_move_start(properties);
    };

    /**
     * Encodes the specified battle_s_move_start message. Does not implicitly {@link battle_s_move_start.verify|verify} messages.
     * @function encode
     * @memberof battle_s_move_start
     * @static
     * @param {Ibattle_s_move_start} message battle_s_move_start message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_move_start.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.face != null && Object.hasOwnProperty.call(message, "face"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.face);
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.y);
        return writer;
    };

    /**
     * Encodes the specified battle_s_move_start message, length delimited. Does not implicitly {@link battle_s_move_start.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_s_move_start
     * @static
     * @param {Ibattle_s_move_start} message battle_s_move_start message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_move_start.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_s_move_start message from the specified reader or buffer.
     * @function decode
     * @memberof battle_s_move_start
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_s_move_start} battle_s_move_start
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_move_start.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_s_move_start();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.face = reader.int32();
                break;
            case 3:
                message.x = reader.int32();
                break;
            case 4:
                message.y = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_s_move_start message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_s_move_start
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_s_move_start} battle_s_move_start
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_move_start.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_s_move_start message.
     * @function verify
     * @memberof battle_s_move_start
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_s_move_start.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.face != null && message.hasOwnProperty("face"))
            if (!$util.isInteger(message.face))
                return "face: integer expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (!$util.isInteger(message.x))
                return "x: integer expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (!$util.isInteger(message.y))
                return "y: integer expected";
        return null;
    };

    /**
     * Creates a battle_s_move_start message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_s_move_start
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_s_move_start} battle_s_move_start
     */
    battle_s_move_start.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_s_move_start)
            return object;
        var message = new $root.battle_s_move_start();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.face != null)
            message.face = object.face | 0;
        if (object.x != null)
            message.x = object.x | 0;
        if (object.y != null)
            message.y = object.y | 0;
        return message;
    };

    /**
     * Creates a plain object from a battle_s_move_start message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_s_move_start
     * @static
     * @param {battle_s_move_start} message battle_s_move_start
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_s_move_start.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.face = 0;
            object.x = 0;
            object.y = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.face != null && message.hasOwnProperty("face"))
            object.face = message.face;
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = message.y;
        return object;
    };

    /**
     * Converts this battle_s_move_start to JSON.
     * @function toJSON
     * @memberof battle_s_move_start
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_s_move_start.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_s_move_start;
})();

$root.battle_c_move_end = (function() {

    /**
     * Properties of a battle_c_move_end.
     * @exports Ibattle_c_move_end
     * @interface Ibattle_c_move_end
     */

    /**
     * Constructs a new battle_c_move_end.
     * @exports battle_c_move_end
     * @classdesc Represents a battle_c_move_end.
     * @implements Ibattle_c_move_end
     * @constructor
     * @param {Ibattle_c_move_end=} [properties] Properties to set
     */
    function battle_c_move_end(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new battle_c_move_end instance using the specified properties.
     * @function create
     * @memberof battle_c_move_end
     * @static
     * @param {Ibattle_c_move_end=} [properties] Properties to set
     * @returns {battle_c_move_end} battle_c_move_end instance
     */
    battle_c_move_end.create = function create(properties) {
        return new battle_c_move_end(properties);
    };

    /**
     * Encodes the specified battle_c_move_end message. Does not implicitly {@link battle_c_move_end.verify|verify} messages.
     * @function encode
     * @memberof battle_c_move_end
     * @static
     * @param {Ibattle_c_move_end} message battle_c_move_end message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_c_move_end.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified battle_c_move_end message, length delimited. Does not implicitly {@link battle_c_move_end.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_c_move_end
     * @static
     * @param {Ibattle_c_move_end} message battle_c_move_end message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_c_move_end.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_c_move_end message from the specified reader or buffer.
     * @function decode
     * @memberof battle_c_move_end
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_c_move_end} battle_c_move_end
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_c_move_end.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_c_move_end();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_c_move_end message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_c_move_end
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_c_move_end} battle_c_move_end
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_c_move_end.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_c_move_end message.
     * @function verify
     * @memberof battle_c_move_end
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_c_move_end.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a battle_c_move_end message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_c_move_end
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_c_move_end} battle_c_move_end
     */
    battle_c_move_end.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_c_move_end)
            return object;
        return new $root.battle_c_move_end();
    };

    /**
     * Creates a plain object from a battle_c_move_end message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_c_move_end
     * @static
     * @param {battle_c_move_end} message battle_c_move_end
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_c_move_end.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this battle_c_move_end to JSON.
     * @function toJSON
     * @memberof battle_c_move_end
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_c_move_end.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_c_move_end;
})();

$root.battle_s_move_end = (function() {

    /**
     * Properties of a battle_s_move_end.
     * @exports Ibattle_s_move_end
     * @interface Ibattle_s_move_end
     * @property {number|null} [id] battle_s_move_end id
     * @property {number|null} [face] battle_s_move_end face
     * @property {number|null} [x] battle_s_move_end x
     * @property {number|null} [y] battle_s_move_end y
     */

    /**
     * Constructs a new battle_s_move_end.
     * @exports battle_s_move_end
     * @classdesc Represents a battle_s_move_end.
     * @implements Ibattle_s_move_end
     * @constructor
     * @param {Ibattle_s_move_end=} [properties] Properties to set
     */
    function battle_s_move_end(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * battle_s_move_end id.
     * @member {number} id
     * @memberof battle_s_move_end
     * @instance
     */
    battle_s_move_end.prototype.id = 0;

    /**
     * battle_s_move_end face.
     * @member {number} face
     * @memberof battle_s_move_end
     * @instance
     */
    battle_s_move_end.prototype.face = 0;

    /**
     * battle_s_move_end x.
     * @member {number} x
     * @memberof battle_s_move_end
     * @instance
     */
    battle_s_move_end.prototype.x = 0;

    /**
     * battle_s_move_end y.
     * @member {number} y
     * @memberof battle_s_move_end
     * @instance
     */
    battle_s_move_end.prototype.y = 0;

    /**
     * Creates a new battle_s_move_end instance using the specified properties.
     * @function create
     * @memberof battle_s_move_end
     * @static
     * @param {Ibattle_s_move_end=} [properties] Properties to set
     * @returns {battle_s_move_end} battle_s_move_end instance
     */
    battle_s_move_end.create = function create(properties) {
        return new battle_s_move_end(properties);
    };

    /**
     * Encodes the specified battle_s_move_end message. Does not implicitly {@link battle_s_move_end.verify|verify} messages.
     * @function encode
     * @memberof battle_s_move_end
     * @static
     * @param {Ibattle_s_move_end} message battle_s_move_end message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_move_end.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.face != null && Object.hasOwnProperty.call(message, "face"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.face);
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.y);
        return writer;
    };

    /**
     * Encodes the specified battle_s_move_end message, length delimited. Does not implicitly {@link battle_s_move_end.verify|verify} messages.
     * @function encodeDelimited
     * @memberof battle_s_move_end
     * @static
     * @param {Ibattle_s_move_end} message battle_s_move_end message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    battle_s_move_end.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a battle_s_move_end message from the specified reader or buffer.
     * @function decode
     * @memberof battle_s_move_end
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {battle_s_move_end} battle_s_move_end
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_move_end.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.battle_s_move_end();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.face = reader.int32();
                break;
            case 3:
                message.x = reader.int32();
                break;
            case 4:
                message.y = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a battle_s_move_end message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof battle_s_move_end
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {battle_s_move_end} battle_s_move_end
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    battle_s_move_end.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a battle_s_move_end message.
     * @function verify
     * @memberof battle_s_move_end
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    battle_s_move_end.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.face != null && message.hasOwnProperty("face"))
            if (!$util.isInteger(message.face))
                return "face: integer expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (!$util.isInteger(message.x))
                return "x: integer expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (!$util.isInteger(message.y))
                return "y: integer expected";
        return null;
    };

    /**
     * Creates a battle_s_move_end message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof battle_s_move_end
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {battle_s_move_end} battle_s_move_end
     */
    battle_s_move_end.fromObject = function fromObject(object) {
        if (object instanceof $root.battle_s_move_end)
            return object;
        var message = new $root.battle_s_move_end();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.face != null)
            message.face = object.face | 0;
        if (object.x != null)
            message.x = object.x | 0;
        if (object.y != null)
            message.y = object.y | 0;
        return message;
    };

    /**
     * Creates a plain object from a battle_s_move_end message. Also converts values to other types if specified.
     * @function toObject
     * @memberof battle_s_move_end
     * @static
     * @param {battle_s_move_end} message battle_s_move_end
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    battle_s_move_end.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.face = 0;
            object.x = 0;
            object.y = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.face != null && message.hasOwnProperty("face"))
            object.face = message.face;
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = message.y;
        return object;
    };

    /**
     * Converts this battle_s_move_end to JSON.
     * @function toJSON
     * @memberof battle_s_move_end
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    battle_s_move_end.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return battle_s_move_end;
})();

$root.game_s_error = (function() {

    /**
     * Properties of a game_s_error.
     * @exports Igame_s_error
     * @interface Igame_s_error
     * @property {number|null} [proto] game_s_error proto
     * @property {number|null} [code] game_s_error code
     */

    /**
     * Constructs a new game_s_error.
     * @exports game_s_error
     * @classdesc Represents a game_s_error.
     * @implements Igame_s_error
     * @constructor
     * @param {Igame_s_error=} [properties] Properties to set
     */
    function game_s_error(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * game_s_error proto.
     * @member {number} proto
     * @memberof game_s_error
     * @instance
     */
    game_s_error.prototype.proto = 0;

    /**
     * game_s_error code.
     * @member {number} code
     * @memberof game_s_error
     * @instance
     */
    game_s_error.prototype.code = 0;

    /**
     * Creates a new game_s_error instance using the specified properties.
     * @function create
     * @memberof game_s_error
     * @static
     * @param {Igame_s_error=} [properties] Properties to set
     * @returns {game_s_error} game_s_error instance
     */
    game_s_error.create = function create(properties) {
        return new game_s_error(properties);
    };

    /**
     * Encodes the specified game_s_error message. Does not implicitly {@link game_s_error.verify|verify} messages.
     * @function encode
     * @memberof game_s_error
     * @static
     * @param {Igame_s_error} message game_s_error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    game_s_error.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.proto != null && Object.hasOwnProperty.call(message, "proto"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.proto);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.code);
        return writer;
    };

    /**
     * Encodes the specified game_s_error message, length delimited. Does not implicitly {@link game_s_error.verify|verify} messages.
     * @function encodeDelimited
     * @memberof game_s_error
     * @static
     * @param {Igame_s_error} message game_s_error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    game_s_error.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a game_s_error message from the specified reader or buffer.
     * @function decode
     * @memberof game_s_error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {game_s_error} game_s_error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    game_s_error.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_s_error();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.proto = reader.uint32();
                break;
            case 2:
                message.code = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a game_s_error message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof game_s_error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {game_s_error} game_s_error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    game_s_error.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a game_s_error message.
     * @function verify
     * @memberof game_s_error
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    game_s_error.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.proto != null && message.hasOwnProperty("proto"))
            if (!$util.isInteger(message.proto))
                return "proto: integer expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };

    /**
     * Creates a game_s_error message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof game_s_error
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {game_s_error} game_s_error
     */
    game_s_error.fromObject = function fromObject(object) {
        if (object instanceof $root.game_s_error)
            return object;
        var message = new $root.game_s_error();
        if (object.proto != null)
            message.proto = object.proto >>> 0;
        if (object.code != null)
            message.code = object.code >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a game_s_error message. Also converts values to other types if specified.
     * @function toObject
     * @memberof game_s_error
     * @static
     * @param {game_s_error} message game_s_error
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    game_s_error.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.proto = 0;
            object.code = 0;
        }
        if (message.proto != null && message.hasOwnProperty("proto"))
            object.proto = message.proto;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };

    /**
     * Converts this game_s_error to JSON.
     * @function toJSON
     * @memberof game_s_error
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    game_s_error.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return game_s_error;
})();

$root.gateway_c_login = (function() {

    /**
     * Properties of a gateway_c_login.
     * @exports Igateway_c_login
     * @interface Igateway_c_login
     * @property {string|null} [account] gateway_c_login account
     */

    /**
     * Constructs a new gateway_c_login.
     * @exports gateway_c_login
     * @classdesc Represents a gateway_c_login.
     * @implements Igateway_c_login
     * @constructor
     * @param {Igateway_c_login=} [properties] Properties to set
     */
    function gateway_c_login(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * gateway_c_login account.
     * @member {string} account
     * @memberof gateway_c_login
     * @instance
     */
    gateway_c_login.prototype.account = "";

    /**
     * Creates a new gateway_c_login instance using the specified properties.
     * @function create
     * @memberof gateway_c_login
     * @static
     * @param {Igateway_c_login=} [properties] Properties to set
     * @returns {gateway_c_login} gateway_c_login instance
     */
    gateway_c_login.create = function create(properties) {
        return new gateway_c_login(properties);
    };

    /**
     * Encodes the specified gateway_c_login message. Does not implicitly {@link gateway_c_login.verify|verify} messages.
     * @function encode
     * @memberof gateway_c_login
     * @static
     * @param {Igateway_c_login} message gateway_c_login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_login.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && Object.hasOwnProperty.call(message, "account"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
        return writer;
    };

    /**
     * Encodes the specified gateway_c_login message, length delimited. Does not implicitly {@link gateway_c_login.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_c_login
     * @static
     * @param {Igateway_c_login} message gateway_c_login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_login.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_c_login message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_c_login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_c_login} gateway_c_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_login.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_c_login();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.account = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_c_login message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_c_login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_c_login} gateway_c_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_login.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_c_login message.
     * @function verify
     * @memberof gateway_c_login
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_c_login.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account"))
            if (!$util.isString(message.account))
                return "account: string expected";
        return null;
    };

    /**
     * Creates a gateway_c_login message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_c_login
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_c_login} gateway_c_login
     */
    gateway_c_login.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_c_login)
            return object;
        var message = new $root.gateway_c_login();
        if (object.account != null)
            message.account = String(object.account);
        return message;
    };

    /**
     * Creates a plain object from a gateway_c_login message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_c_login
     * @static
     * @param {gateway_c_login} message gateway_c_login
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_c_login.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.account = "";
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = message.account;
        return object;
    };

    /**
     * Converts this gateway_c_login to JSON.
     * @function toJSON
     * @memberof gateway_c_login
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_c_login.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_c_login;
})();

$root.gateway_p_role_info = (function() {

    /**
     * Properties of a gateway_p_role_info.
     * @exports Igateway_p_role_info
     * @interface Igateway_p_role_info
     * @property {number|null} [id] gateway_p_role_info id
     * @property {string|null} [name] gateway_p_role_info name
     * @property {number|null} [career] gateway_p_role_info career
     */

    /**
     * Constructs a new gateway_p_role_info.
     * @exports gateway_p_role_info
     * @classdesc Represents a gateway_p_role_info.
     * @implements Igateway_p_role_info
     * @constructor
     * @param {Igateway_p_role_info=} [properties] Properties to set
     */
    function gateway_p_role_info(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * gateway_p_role_info id.
     * @member {number} id
     * @memberof gateway_p_role_info
     * @instance
     */
    gateway_p_role_info.prototype.id = 0;

    /**
     * gateway_p_role_info name.
     * @member {string} name
     * @memberof gateway_p_role_info
     * @instance
     */
    gateway_p_role_info.prototype.name = "";

    /**
     * gateway_p_role_info career.
     * @member {number} career
     * @memberof gateway_p_role_info
     * @instance
     */
    gateway_p_role_info.prototype.career = 0;

    /**
     * Creates a new gateway_p_role_info instance using the specified properties.
     * @function create
     * @memberof gateway_p_role_info
     * @static
     * @param {Igateway_p_role_info=} [properties] Properties to set
     * @returns {gateway_p_role_info} gateway_p_role_info instance
     */
    gateway_p_role_info.create = function create(properties) {
        return new gateway_p_role_info(properties);
    };

    /**
     * Encodes the specified gateway_p_role_info message. Does not implicitly {@link gateway_p_role_info.verify|verify} messages.
     * @function encode
     * @memberof gateway_p_role_info
     * @static
     * @param {Igateway_p_role_info} message gateway_p_role_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_p_role_info.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.career != null && Object.hasOwnProperty.call(message, "career"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.career);
        return writer;
    };

    /**
     * Encodes the specified gateway_p_role_info message, length delimited. Does not implicitly {@link gateway_p_role_info.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_p_role_info
     * @static
     * @param {Igateway_p_role_info} message gateway_p_role_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_p_role_info.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_p_role_info message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_p_role_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_p_role_info} gateway_p_role_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_p_role_info.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_p_role_info();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.career = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_p_role_info message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_p_role_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_p_role_info} gateway_p_role_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_p_role_info.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_p_role_info message.
     * @function verify
     * @memberof gateway_p_role_info
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_p_role_info.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.career != null && message.hasOwnProperty("career"))
            if (!$util.isInteger(message.career))
                return "career: integer expected";
        return null;
    };

    /**
     * Creates a gateway_p_role_info message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_p_role_info
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_p_role_info} gateway_p_role_info
     */
    gateway_p_role_info.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_p_role_info)
            return object;
        var message = new $root.gateway_p_role_info();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.career != null)
            message.career = object.career >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a gateway_p_role_info message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_p_role_info
     * @static
     * @param {gateway_p_role_info} message gateway_p_role_info
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_p_role_info.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.career = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.career != null && message.hasOwnProperty("career"))
            object.career = message.career;
        return object;
    };

    /**
     * Converts this gateway_p_role_info to JSON.
     * @function toJSON
     * @memberof gateway_p_role_info
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_p_role_info.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_p_role_info;
})();

$root.gateway_s_login = (function() {

    /**
     * Properties of a gateway_s_login.
     * @exports Igateway_s_login
     * @interface Igateway_s_login
     * @property {string|null} [account] gateway_s_login account
     * @property {Array.<Igateway_p_role_info>|null} [roleList] gateway_s_login roleList
     */

    /**
     * Constructs a new gateway_s_login.
     * @exports gateway_s_login
     * @classdesc Represents a gateway_s_login.
     * @implements Igateway_s_login
     * @constructor
     * @param {Igateway_s_login=} [properties] Properties to set
     */
    function gateway_s_login(properties) {
        this.roleList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * gateway_s_login account.
     * @member {string} account
     * @memberof gateway_s_login
     * @instance
     */
    gateway_s_login.prototype.account = "";

    /**
     * gateway_s_login roleList.
     * @member {Array.<Igateway_p_role_info>} roleList
     * @memberof gateway_s_login
     * @instance
     */
    gateway_s_login.prototype.roleList = $util.emptyArray;

    /**
     * Creates a new gateway_s_login instance using the specified properties.
     * @function create
     * @memberof gateway_s_login
     * @static
     * @param {Igateway_s_login=} [properties] Properties to set
     * @returns {gateway_s_login} gateway_s_login instance
     */
    gateway_s_login.create = function create(properties) {
        return new gateway_s_login(properties);
    };

    /**
     * Encodes the specified gateway_s_login message. Does not implicitly {@link gateway_s_login.verify|verify} messages.
     * @function encode
     * @memberof gateway_s_login
     * @static
     * @param {Igateway_s_login} message gateway_s_login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_login.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && Object.hasOwnProperty.call(message, "account"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
        if (message.roleList != null && message.roleList.length)
            for (var i = 0; i < message.roleList.length; ++i)
                $root.gateway_p_role_info.encode(message.roleList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified gateway_s_login message, length delimited. Does not implicitly {@link gateway_s_login.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_s_login
     * @static
     * @param {Igateway_s_login} message gateway_s_login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_login.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_s_login message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_s_login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_s_login} gateway_s_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_login.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_s_login();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.account = reader.string();
                break;
            case 2:
                if (!(message.roleList && message.roleList.length))
                    message.roleList = [];
                message.roleList.push($root.gateway_p_role_info.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_s_login message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_s_login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_s_login} gateway_s_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_login.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_s_login message.
     * @function verify
     * @memberof gateway_s_login
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_s_login.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account"))
            if (!$util.isString(message.account))
                return "account: string expected";
        if (message.roleList != null && message.hasOwnProperty("roleList")) {
            if (!Array.isArray(message.roleList))
                return "roleList: array expected";
            for (var i = 0; i < message.roleList.length; ++i) {
                var error = $root.gateway_p_role_info.verify(message.roleList[i]);
                if (error)
                    return "roleList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a gateway_s_login message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_s_login
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_s_login} gateway_s_login
     */
    gateway_s_login.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_s_login)
            return object;
        var message = new $root.gateway_s_login();
        if (object.account != null)
            message.account = String(object.account);
        if (object.roleList) {
            if (!Array.isArray(object.roleList))
                throw TypeError(".gateway_s_login.roleList: array expected");
            message.roleList = [];
            for (var i = 0; i < object.roleList.length; ++i) {
                if (typeof object.roleList[i] !== "object")
                    throw TypeError(".gateway_s_login.roleList: object expected");
                message.roleList[i] = $root.gateway_p_role_info.fromObject(object.roleList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a gateway_s_login message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_s_login
     * @static
     * @param {gateway_s_login} message gateway_s_login
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_s_login.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.roleList = [];
        if (options.defaults)
            object.account = "";
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = message.account;
        if (message.roleList && message.roleList.length) {
            object.roleList = [];
            for (var j = 0; j < message.roleList.length; ++j)
                object.roleList[j] = $root.gateway_p_role_info.toObject(message.roleList[j], options);
        }
        return object;
    };

    /**
     * Converts this gateway_s_login to JSON.
     * @function toJSON
     * @memberof gateway_s_login
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_s_login.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_s_login;
})();

$root.gateway_c_select_role = (function() {

    /**
     * Properties of a gateway_c_select_role.
     * @exports Igateway_c_select_role
     * @interface Igateway_c_select_role
     * @property {number|null} [id] gateway_c_select_role id
     */

    /**
     * Constructs a new gateway_c_select_role.
     * @exports gateway_c_select_role
     * @classdesc Represents a gateway_c_select_role.
     * @implements Igateway_c_select_role
     * @constructor
     * @param {Igateway_c_select_role=} [properties] Properties to set
     */
    function gateway_c_select_role(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * gateway_c_select_role id.
     * @member {number} id
     * @memberof gateway_c_select_role
     * @instance
     */
    gateway_c_select_role.prototype.id = 0;

    /**
     * Creates a new gateway_c_select_role instance using the specified properties.
     * @function create
     * @memberof gateway_c_select_role
     * @static
     * @param {Igateway_c_select_role=} [properties] Properties to set
     * @returns {gateway_c_select_role} gateway_c_select_role instance
     */
    gateway_c_select_role.create = function create(properties) {
        return new gateway_c_select_role(properties);
    };

    /**
     * Encodes the specified gateway_c_select_role message. Does not implicitly {@link gateway_c_select_role.verify|verify} messages.
     * @function encode
     * @memberof gateway_c_select_role
     * @static
     * @param {Igateway_c_select_role} message gateway_c_select_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_select_role.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        return writer;
    };

    /**
     * Encodes the specified gateway_c_select_role message, length delimited. Does not implicitly {@link gateway_c_select_role.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_c_select_role
     * @static
     * @param {Igateway_c_select_role} message gateway_c_select_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_select_role.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_c_select_role message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_c_select_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_c_select_role} gateway_c_select_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_select_role.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_c_select_role();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_c_select_role message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_c_select_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_c_select_role} gateway_c_select_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_select_role.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_c_select_role message.
     * @function verify
     * @memberof gateway_c_select_role
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_c_select_role.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a gateway_c_select_role message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_c_select_role
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_c_select_role} gateway_c_select_role
     */
    gateway_c_select_role.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_c_select_role)
            return object;
        var message = new $root.gateway_c_select_role();
        if (object.id != null)
            message.id = object.id >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a gateway_c_select_role message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_c_select_role
     * @static
     * @param {gateway_c_select_role} message gateway_c_select_role
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_c_select_role.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this gateway_c_select_role to JSON.
     * @function toJSON
     * @memberof gateway_c_select_role
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_c_select_role.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_c_select_role;
})();

$root.gateway_s_select_role = (function() {

    /**
     * Properties of a gateway_s_select_role.
     * @exports Igateway_s_select_role
     * @interface Igateway_s_select_role
     * @property {number|null} [id] gateway_s_select_role id
     */

    /**
     * Constructs a new gateway_s_select_role.
     * @exports gateway_s_select_role
     * @classdesc Represents a gateway_s_select_role.
     * @implements Igateway_s_select_role
     * @constructor
     * @param {Igateway_s_select_role=} [properties] Properties to set
     */
    function gateway_s_select_role(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * gateway_s_select_role id.
     * @member {number} id
     * @memberof gateway_s_select_role
     * @instance
     */
    gateway_s_select_role.prototype.id = 0;

    /**
     * Creates a new gateway_s_select_role instance using the specified properties.
     * @function create
     * @memberof gateway_s_select_role
     * @static
     * @param {Igateway_s_select_role=} [properties] Properties to set
     * @returns {gateway_s_select_role} gateway_s_select_role instance
     */
    gateway_s_select_role.create = function create(properties) {
        return new gateway_s_select_role(properties);
    };

    /**
     * Encodes the specified gateway_s_select_role message. Does not implicitly {@link gateway_s_select_role.verify|verify} messages.
     * @function encode
     * @memberof gateway_s_select_role
     * @static
     * @param {Igateway_s_select_role} message gateway_s_select_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_select_role.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        return writer;
    };

    /**
     * Encodes the specified gateway_s_select_role message, length delimited. Does not implicitly {@link gateway_s_select_role.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_s_select_role
     * @static
     * @param {Igateway_s_select_role} message gateway_s_select_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_select_role.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_s_select_role message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_s_select_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_s_select_role} gateway_s_select_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_select_role.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_s_select_role();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_s_select_role message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_s_select_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_s_select_role} gateway_s_select_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_select_role.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_s_select_role message.
     * @function verify
     * @memberof gateway_s_select_role
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_s_select_role.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a gateway_s_select_role message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_s_select_role
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_s_select_role} gateway_s_select_role
     */
    gateway_s_select_role.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_s_select_role)
            return object;
        var message = new $root.gateway_s_select_role();
        if (object.id != null)
            message.id = object.id >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a gateway_s_select_role message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_s_select_role
     * @static
     * @param {gateway_s_select_role} message gateway_s_select_role
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_s_select_role.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this gateway_s_select_role to JSON.
     * @function toJSON
     * @memberof gateway_s_select_role
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_s_select_role.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_s_select_role;
})();

$root.gateway_c_create_role = (function() {

    /**
     * Properties of a gateway_c_create_role.
     * @exports Igateway_c_create_role
     * @interface Igateway_c_create_role
     * @property {string|null} [name] gateway_c_create_role name
     * @property {number|null} [career] gateway_c_create_role career
     */

    /**
     * Constructs a new gateway_c_create_role.
     * @exports gateway_c_create_role
     * @classdesc Represents a gateway_c_create_role.
     * @implements Igateway_c_create_role
     * @constructor
     * @param {Igateway_c_create_role=} [properties] Properties to set
     */
    function gateway_c_create_role(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * gateway_c_create_role name.
     * @member {string} name
     * @memberof gateway_c_create_role
     * @instance
     */
    gateway_c_create_role.prototype.name = "";

    /**
     * gateway_c_create_role career.
     * @member {number} career
     * @memberof gateway_c_create_role
     * @instance
     */
    gateway_c_create_role.prototype.career = 0;

    /**
     * Creates a new gateway_c_create_role instance using the specified properties.
     * @function create
     * @memberof gateway_c_create_role
     * @static
     * @param {Igateway_c_create_role=} [properties] Properties to set
     * @returns {gateway_c_create_role} gateway_c_create_role instance
     */
    gateway_c_create_role.create = function create(properties) {
        return new gateway_c_create_role(properties);
    };

    /**
     * Encodes the specified gateway_c_create_role message. Does not implicitly {@link gateway_c_create_role.verify|verify} messages.
     * @function encode
     * @memberof gateway_c_create_role
     * @static
     * @param {Igateway_c_create_role} message gateway_c_create_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_create_role.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.career != null && Object.hasOwnProperty.call(message, "career"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.career);
        return writer;
    };

    /**
     * Encodes the specified gateway_c_create_role message, length delimited. Does not implicitly {@link gateway_c_create_role.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_c_create_role
     * @static
     * @param {Igateway_c_create_role} message gateway_c_create_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_create_role.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_c_create_role message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_c_create_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_c_create_role} gateway_c_create_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_create_role.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_c_create_role();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.career = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_c_create_role message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_c_create_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_c_create_role} gateway_c_create_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_create_role.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_c_create_role message.
     * @function verify
     * @memberof gateway_c_create_role
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_c_create_role.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.career != null && message.hasOwnProperty("career"))
            if (!$util.isInteger(message.career))
                return "career: integer expected";
        return null;
    };

    /**
     * Creates a gateway_c_create_role message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_c_create_role
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_c_create_role} gateway_c_create_role
     */
    gateway_c_create_role.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_c_create_role)
            return object;
        var message = new $root.gateway_c_create_role();
        if (object.name != null)
            message.name = String(object.name);
        if (object.career != null)
            message.career = object.career >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a gateway_c_create_role message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_c_create_role
     * @static
     * @param {gateway_c_create_role} message gateway_c_create_role
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_c_create_role.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.career = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.career != null && message.hasOwnProperty("career"))
            object.career = message.career;
        return object;
    };

    /**
     * Converts this gateway_c_create_role to JSON.
     * @function toJSON
     * @memberof gateway_c_create_role
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_c_create_role.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_c_create_role;
})();

$root.gateway_s_create_role = (function() {

    /**
     * Properties of a gateway_s_create_role.
     * @exports Igateway_s_create_role
     * @interface Igateway_s_create_role
     * @property {Array.<Igateway_p_role_info>|null} [roleList] gateway_s_create_role roleList
     */

    /**
     * Constructs a new gateway_s_create_role.
     * @exports gateway_s_create_role
     * @classdesc Represents a gateway_s_create_role.
     * @implements Igateway_s_create_role
     * @constructor
     * @param {Igateway_s_create_role=} [properties] Properties to set
     */
    function gateway_s_create_role(properties) {
        this.roleList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * gateway_s_create_role roleList.
     * @member {Array.<Igateway_p_role_info>} roleList
     * @memberof gateway_s_create_role
     * @instance
     */
    gateway_s_create_role.prototype.roleList = $util.emptyArray;

    /**
     * Creates a new gateway_s_create_role instance using the specified properties.
     * @function create
     * @memberof gateway_s_create_role
     * @static
     * @param {Igateway_s_create_role=} [properties] Properties to set
     * @returns {gateway_s_create_role} gateway_s_create_role instance
     */
    gateway_s_create_role.create = function create(properties) {
        return new gateway_s_create_role(properties);
    };

    /**
     * Encodes the specified gateway_s_create_role message. Does not implicitly {@link gateway_s_create_role.verify|verify} messages.
     * @function encode
     * @memberof gateway_s_create_role
     * @static
     * @param {Igateway_s_create_role} message gateway_s_create_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_create_role.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roleList != null && message.roleList.length)
            for (var i = 0; i < message.roleList.length; ++i)
                $root.gateway_p_role_info.encode(message.roleList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified gateway_s_create_role message, length delimited. Does not implicitly {@link gateway_s_create_role.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_s_create_role
     * @static
     * @param {Igateway_s_create_role} message gateway_s_create_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_create_role.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_s_create_role message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_s_create_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_s_create_role} gateway_s_create_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_create_role.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_s_create_role();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.roleList && message.roleList.length))
                    message.roleList = [];
                message.roleList.push($root.gateway_p_role_info.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_s_create_role message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_s_create_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_s_create_role} gateway_s_create_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_create_role.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_s_create_role message.
     * @function verify
     * @memberof gateway_s_create_role
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_s_create_role.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roleList != null && message.hasOwnProperty("roleList")) {
            if (!Array.isArray(message.roleList))
                return "roleList: array expected";
            for (var i = 0; i < message.roleList.length; ++i) {
                var error = $root.gateway_p_role_info.verify(message.roleList[i]);
                if (error)
                    return "roleList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a gateway_s_create_role message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_s_create_role
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_s_create_role} gateway_s_create_role
     */
    gateway_s_create_role.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_s_create_role)
            return object;
        var message = new $root.gateway_s_create_role();
        if (object.roleList) {
            if (!Array.isArray(object.roleList))
                throw TypeError(".gateway_s_create_role.roleList: array expected");
            message.roleList = [];
            for (var i = 0; i < object.roleList.length; ++i) {
                if (typeof object.roleList[i] !== "object")
                    throw TypeError(".gateway_s_create_role.roleList: object expected");
                message.roleList[i] = $root.gateway_p_role_info.fromObject(object.roleList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a gateway_s_create_role message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_s_create_role
     * @static
     * @param {gateway_s_create_role} message gateway_s_create_role
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_s_create_role.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.roleList = [];
        if (message.roleList && message.roleList.length) {
            object.roleList = [];
            for (var j = 0; j < message.roleList.length; ++j)
                object.roleList[j] = $root.gateway_p_role_info.toObject(message.roleList[j], options);
        }
        return object;
    };

    /**
     * Converts this gateway_s_create_role to JSON.
     * @function toJSON
     * @memberof gateway_s_create_role
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_s_create_role.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_s_create_role;
})();

$root.gateway_c_heart = (function() {

    /**
     * Properties of a gateway_c_heart.
     * @exports Igateway_c_heart
     * @interface Igateway_c_heart
     */

    /**
     * Constructs a new gateway_c_heart.
     * @exports gateway_c_heart
     * @classdesc Represents a gateway_c_heart.
     * @implements Igateway_c_heart
     * @constructor
     * @param {Igateway_c_heart=} [properties] Properties to set
     */
    function gateway_c_heart(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new gateway_c_heart instance using the specified properties.
     * @function create
     * @memberof gateway_c_heart
     * @static
     * @param {Igateway_c_heart=} [properties] Properties to set
     * @returns {gateway_c_heart} gateway_c_heart instance
     */
    gateway_c_heart.create = function create(properties) {
        return new gateway_c_heart(properties);
    };

    /**
     * Encodes the specified gateway_c_heart message. Does not implicitly {@link gateway_c_heart.verify|verify} messages.
     * @function encode
     * @memberof gateway_c_heart
     * @static
     * @param {Igateway_c_heart} message gateway_c_heart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_heart.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified gateway_c_heart message, length delimited. Does not implicitly {@link gateway_c_heart.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_c_heart
     * @static
     * @param {Igateway_c_heart} message gateway_c_heart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_heart.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_c_heart message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_c_heart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_c_heart} gateway_c_heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_heart.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_c_heart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_c_heart message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_c_heart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_c_heart} gateway_c_heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_heart.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_c_heart message.
     * @function verify
     * @memberof gateway_c_heart
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_c_heart.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a gateway_c_heart message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_c_heart
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_c_heart} gateway_c_heart
     */
    gateway_c_heart.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_c_heart)
            return object;
        return new $root.gateway_c_heart();
    };

    /**
     * Creates a plain object from a gateway_c_heart message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_c_heart
     * @static
     * @param {gateway_c_heart} message gateway_c_heart
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_c_heart.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this gateway_c_heart to JSON.
     * @function toJSON
     * @memberof gateway_c_heart
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_c_heart.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_c_heart;
})();

$root.gateway_s_heart = (function() {

    /**
     * Properties of a gateway_s_heart.
     * @exports Igateway_s_heart
     * @interface Igateway_s_heart
     */

    /**
     * Constructs a new gateway_s_heart.
     * @exports gateway_s_heart
     * @classdesc Represents a gateway_s_heart.
     * @implements Igateway_s_heart
     * @constructor
     * @param {Igateway_s_heart=} [properties] Properties to set
     */
    function gateway_s_heart(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new gateway_s_heart instance using the specified properties.
     * @function create
     * @memberof gateway_s_heart
     * @static
     * @param {Igateway_s_heart=} [properties] Properties to set
     * @returns {gateway_s_heart} gateway_s_heart instance
     */
    gateway_s_heart.create = function create(properties) {
        return new gateway_s_heart(properties);
    };

    /**
     * Encodes the specified gateway_s_heart message. Does not implicitly {@link gateway_s_heart.verify|verify} messages.
     * @function encode
     * @memberof gateway_s_heart
     * @static
     * @param {Igateway_s_heart} message gateway_s_heart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_heart.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified gateway_s_heart message, length delimited. Does not implicitly {@link gateway_s_heart.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_s_heart
     * @static
     * @param {Igateway_s_heart} message gateway_s_heart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_heart.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_s_heart message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_s_heart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_s_heart} gateway_s_heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_heart.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_s_heart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_s_heart message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_s_heart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_s_heart} gateway_s_heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_heart.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_s_heart message.
     * @function verify
     * @memberof gateway_s_heart
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_s_heart.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a gateway_s_heart message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_s_heart
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_s_heart} gateway_s_heart
     */
    gateway_s_heart.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_s_heart)
            return object;
        return new $root.gateway_s_heart();
    };

    /**
     * Creates a plain object from a gateway_s_heart message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_s_heart
     * @static
     * @param {gateway_s_heart} message gateway_s_heart
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_s_heart.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this gateway_s_heart to JSON.
     * @function toJSON
     * @memberof gateway_s_heart
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_s_heart.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_s_heart;
})();

$root.gateway_c_warp = (function() {

    /**
     * Properties of a gateway_c_warp.
     * @exports Igateway_c_warp
     * @interface Igateway_c_warp
     * @property {number|null} [proto] gateway_c_warp proto
     * @property {Uint8Array|null} [data] gateway_c_warp data
     */

    /**
     * Constructs a new gateway_c_warp.
     * @exports gateway_c_warp
     * @classdesc Represents a gateway_c_warp.
     * @implements Igateway_c_warp
     * @constructor
     * @param {Igateway_c_warp=} [properties] Properties to set
     */
    function gateway_c_warp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * gateway_c_warp proto.
     * @member {number} proto
     * @memberof gateway_c_warp
     * @instance
     */
    gateway_c_warp.prototype.proto = 0;

    /**
     * gateway_c_warp data.
     * @member {Uint8Array} data
     * @memberof gateway_c_warp
     * @instance
     */
    gateway_c_warp.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new gateway_c_warp instance using the specified properties.
     * @function create
     * @memberof gateway_c_warp
     * @static
     * @param {Igateway_c_warp=} [properties] Properties to set
     * @returns {gateway_c_warp} gateway_c_warp instance
     */
    gateway_c_warp.create = function create(properties) {
        return new gateway_c_warp(properties);
    };

    /**
     * Encodes the specified gateway_c_warp message. Does not implicitly {@link gateway_c_warp.verify|verify} messages.
     * @function encode
     * @memberof gateway_c_warp
     * @static
     * @param {Igateway_c_warp} message gateway_c_warp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_warp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.proto != null && Object.hasOwnProperty.call(message, "proto"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.proto);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified gateway_c_warp message, length delimited. Does not implicitly {@link gateway_c_warp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_c_warp
     * @static
     * @param {Igateway_c_warp} message gateway_c_warp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_warp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_c_warp message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_c_warp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_c_warp} gateway_c_warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_warp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_c_warp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.proto = reader.uint32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_c_warp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_c_warp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_c_warp} gateway_c_warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_warp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_c_warp message.
     * @function verify
     * @memberof gateway_c_warp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_c_warp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.proto != null && message.hasOwnProperty("proto"))
            if (!$util.isInteger(message.proto))
                return "proto: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a gateway_c_warp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_c_warp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_c_warp} gateway_c_warp
     */
    gateway_c_warp.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_c_warp)
            return object;
        var message = new $root.gateway_c_warp();
        if (object.proto != null)
            message.proto = object.proto >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a gateway_c_warp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_c_warp
     * @static
     * @param {gateway_c_warp} message gateway_c_warp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_c_warp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.proto = 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.proto != null && message.hasOwnProperty("proto"))
            object.proto = message.proto;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this gateway_c_warp to JSON.
     * @function toJSON
     * @memberof gateway_c_warp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_c_warp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_c_warp;
})();

$root.gateway_s_warp = (function() {

    /**
     * Properties of a gateway_s_warp.
     * @exports Igateway_s_warp
     * @interface Igateway_s_warp
     * @property {number|null} [proto] gateway_s_warp proto
     * @property {Uint8Array|null} [data] gateway_s_warp data
     */

    /**
     * Constructs a new gateway_s_warp.
     * @exports gateway_s_warp
     * @classdesc Represents a gateway_s_warp.
     * @implements Igateway_s_warp
     * @constructor
     * @param {Igateway_s_warp=} [properties] Properties to set
     */
    function gateway_s_warp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * gateway_s_warp proto.
     * @member {number} proto
     * @memberof gateway_s_warp
     * @instance
     */
    gateway_s_warp.prototype.proto = 0;

    /**
     * gateway_s_warp data.
     * @member {Uint8Array} data
     * @memberof gateway_s_warp
     * @instance
     */
    gateway_s_warp.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new gateway_s_warp instance using the specified properties.
     * @function create
     * @memberof gateway_s_warp
     * @static
     * @param {Igateway_s_warp=} [properties] Properties to set
     * @returns {gateway_s_warp} gateway_s_warp instance
     */
    gateway_s_warp.create = function create(properties) {
        return new gateway_s_warp(properties);
    };

    /**
     * Encodes the specified gateway_s_warp message. Does not implicitly {@link gateway_s_warp.verify|verify} messages.
     * @function encode
     * @memberof gateway_s_warp
     * @static
     * @param {Igateway_s_warp} message gateway_s_warp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_warp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.proto != null && Object.hasOwnProperty.call(message, "proto"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.proto);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified gateway_s_warp message, length delimited. Does not implicitly {@link gateway_s_warp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_s_warp
     * @static
     * @param {Igateway_s_warp} message gateway_s_warp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_warp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_s_warp message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_s_warp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_s_warp} gateway_s_warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_warp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_s_warp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.proto = reader.uint32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_s_warp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_s_warp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_s_warp} gateway_s_warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_warp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_s_warp message.
     * @function verify
     * @memberof gateway_s_warp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_s_warp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.proto != null && message.hasOwnProperty("proto"))
            if (!$util.isInteger(message.proto))
                return "proto: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a gateway_s_warp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_s_warp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_s_warp} gateway_s_warp
     */
    gateway_s_warp.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_s_warp)
            return object;
        var message = new $root.gateway_s_warp();
        if (object.proto != null)
            message.proto = object.proto >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a gateway_s_warp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_s_warp
     * @static
     * @param {gateway_s_warp} message gateway_s_warp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_s_warp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.proto = 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.proto != null && message.hasOwnProperty("proto"))
            object.proto = message.proto;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this gateway_s_warp to JSON.
     * @function toJSON
     * @memberof gateway_s_warp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_s_warp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_s_warp;
})();

$root.gateway_c_exit_role = (function() {

    /**
     * Properties of a gateway_c_exit_role.
     * @exports Igateway_c_exit_role
     * @interface Igateway_c_exit_role
     */

    /**
     * Constructs a new gateway_c_exit_role.
     * @exports gateway_c_exit_role
     * @classdesc Represents a gateway_c_exit_role.
     * @implements Igateway_c_exit_role
     * @constructor
     * @param {Igateway_c_exit_role=} [properties] Properties to set
     */
    function gateway_c_exit_role(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new gateway_c_exit_role instance using the specified properties.
     * @function create
     * @memberof gateway_c_exit_role
     * @static
     * @param {Igateway_c_exit_role=} [properties] Properties to set
     * @returns {gateway_c_exit_role} gateway_c_exit_role instance
     */
    gateway_c_exit_role.create = function create(properties) {
        return new gateway_c_exit_role(properties);
    };

    /**
     * Encodes the specified gateway_c_exit_role message. Does not implicitly {@link gateway_c_exit_role.verify|verify} messages.
     * @function encode
     * @memberof gateway_c_exit_role
     * @static
     * @param {Igateway_c_exit_role} message gateway_c_exit_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_exit_role.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified gateway_c_exit_role message, length delimited. Does not implicitly {@link gateway_c_exit_role.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_c_exit_role
     * @static
     * @param {Igateway_c_exit_role} message gateway_c_exit_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_exit_role.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_c_exit_role message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_c_exit_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_c_exit_role} gateway_c_exit_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_exit_role.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_c_exit_role();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_c_exit_role message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_c_exit_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_c_exit_role} gateway_c_exit_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_exit_role.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_c_exit_role message.
     * @function verify
     * @memberof gateway_c_exit_role
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_c_exit_role.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a gateway_c_exit_role message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_c_exit_role
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_c_exit_role} gateway_c_exit_role
     */
    gateway_c_exit_role.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_c_exit_role)
            return object;
        return new $root.gateway_c_exit_role();
    };

    /**
     * Creates a plain object from a gateway_c_exit_role message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_c_exit_role
     * @static
     * @param {gateway_c_exit_role} message gateway_c_exit_role
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_c_exit_role.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this gateway_c_exit_role to JSON.
     * @function toJSON
     * @memberof gateway_c_exit_role
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_c_exit_role.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_c_exit_role;
})();

$root.gateway_s_exit_role = (function() {

    /**
     * Properties of a gateway_s_exit_role.
     * @exports Igateway_s_exit_role
     * @interface Igateway_s_exit_role
     */

    /**
     * Constructs a new gateway_s_exit_role.
     * @exports gateway_s_exit_role
     * @classdesc Represents a gateway_s_exit_role.
     * @implements Igateway_s_exit_role
     * @constructor
     * @param {Igateway_s_exit_role=} [properties] Properties to set
     */
    function gateway_s_exit_role(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new gateway_s_exit_role instance using the specified properties.
     * @function create
     * @memberof gateway_s_exit_role
     * @static
     * @param {Igateway_s_exit_role=} [properties] Properties to set
     * @returns {gateway_s_exit_role} gateway_s_exit_role instance
     */
    gateway_s_exit_role.create = function create(properties) {
        return new gateway_s_exit_role(properties);
    };

    /**
     * Encodes the specified gateway_s_exit_role message. Does not implicitly {@link gateway_s_exit_role.verify|verify} messages.
     * @function encode
     * @memberof gateway_s_exit_role
     * @static
     * @param {Igateway_s_exit_role} message gateway_s_exit_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_exit_role.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified gateway_s_exit_role message, length delimited. Does not implicitly {@link gateway_s_exit_role.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_s_exit_role
     * @static
     * @param {Igateway_s_exit_role} message gateway_s_exit_role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_exit_role.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_s_exit_role message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_s_exit_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_s_exit_role} gateway_s_exit_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_exit_role.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_s_exit_role();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_s_exit_role message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_s_exit_role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_s_exit_role} gateway_s_exit_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_exit_role.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_s_exit_role message.
     * @function verify
     * @memberof gateway_s_exit_role
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_s_exit_role.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a gateway_s_exit_role message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_s_exit_role
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_s_exit_role} gateway_s_exit_role
     */
    gateway_s_exit_role.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_s_exit_role)
            return object;
        return new $root.gateway_s_exit_role();
    };

    /**
     * Creates a plain object from a gateway_s_exit_role message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_s_exit_role
     * @static
     * @param {gateway_s_exit_role} message gateway_s_exit_role
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_s_exit_role.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this gateway_s_exit_role to JSON.
     * @function toJSON
     * @memberof gateway_s_exit_role
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_s_exit_role.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_s_exit_role;
})();

$root.gateway_c_exit_account = (function() {

    /**
     * Properties of a gateway_c_exit_account.
     * @exports Igateway_c_exit_account
     * @interface Igateway_c_exit_account
     */

    /**
     * Constructs a new gateway_c_exit_account.
     * @exports gateway_c_exit_account
     * @classdesc Represents a gateway_c_exit_account.
     * @implements Igateway_c_exit_account
     * @constructor
     * @param {Igateway_c_exit_account=} [properties] Properties to set
     */
    function gateway_c_exit_account(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new gateway_c_exit_account instance using the specified properties.
     * @function create
     * @memberof gateway_c_exit_account
     * @static
     * @param {Igateway_c_exit_account=} [properties] Properties to set
     * @returns {gateway_c_exit_account} gateway_c_exit_account instance
     */
    gateway_c_exit_account.create = function create(properties) {
        return new gateway_c_exit_account(properties);
    };

    /**
     * Encodes the specified gateway_c_exit_account message. Does not implicitly {@link gateway_c_exit_account.verify|verify} messages.
     * @function encode
     * @memberof gateway_c_exit_account
     * @static
     * @param {Igateway_c_exit_account} message gateway_c_exit_account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_exit_account.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified gateway_c_exit_account message, length delimited. Does not implicitly {@link gateway_c_exit_account.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_c_exit_account
     * @static
     * @param {Igateway_c_exit_account} message gateway_c_exit_account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_c_exit_account.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_c_exit_account message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_c_exit_account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_c_exit_account} gateway_c_exit_account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_exit_account.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_c_exit_account();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_c_exit_account message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_c_exit_account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_c_exit_account} gateway_c_exit_account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_c_exit_account.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_c_exit_account message.
     * @function verify
     * @memberof gateway_c_exit_account
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_c_exit_account.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a gateway_c_exit_account message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_c_exit_account
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_c_exit_account} gateway_c_exit_account
     */
    gateway_c_exit_account.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_c_exit_account)
            return object;
        return new $root.gateway_c_exit_account();
    };

    /**
     * Creates a plain object from a gateway_c_exit_account message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_c_exit_account
     * @static
     * @param {gateway_c_exit_account} message gateway_c_exit_account
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_c_exit_account.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this gateway_c_exit_account to JSON.
     * @function toJSON
     * @memberof gateway_c_exit_account
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_c_exit_account.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_c_exit_account;
})();

$root.gateway_s_exit_account = (function() {

    /**
     * Properties of a gateway_s_exit_account.
     * @exports Igateway_s_exit_account
     * @interface Igateway_s_exit_account
     */

    /**
     * Constructs a new gateway_s_exit_account.
     * @exports gateway_s_exit_account
     * @classdesc Represents a gateway_s_exit_account.
     * @implements Igateway_s_exit_account
     * @constructor
     * @param {Igateway_s_exit_account=} [properties] Properties to set
     */
    function gateway_s_exit_account(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new gateway_s_exit_account instance using the specified properties.
     * @function create
     * @memberof gateway_s_exit_account
     * @static
     * @param {Igateway_s_exit_account=} [properties] Properties to set
     * @returns {gateway_s_exit_account} gateway_s_exit_account instance
     */
    gateway_s_exit_account.create = function create(properties) {
        return new gateway_s_exit_account(properties);
    };

    /**
     * Encodes the specified gateway_s_exit_account message. Does not implicitly {@link gateway_s_exit_account.verify|verify} messages.
     * @function encode
     * @memberof gateway_s_exit_account
     * @static
     * @param {Igateway_s_exit_account} message gateway_s_exit_account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_exit_account.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified gateway_s_exit_account message, length delimited. Does not implicitly {@link gateway_s_exit_account.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gateway_s_exit_account
     * @static
     * @param {Igateway_s_exit_account} message gateway_s_exit_account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    gateway_s_exit_account.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a gateway_s_exit_account message from the specified reader or buffer.
     * @function decode
     * @memberof gateway_s_exit_account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gateway_s_exit_account} gateway_s_exit_account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_exit_account.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gateway_s_exit_account();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a gateway_s_exit_account message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gateway_s_exit_account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gateway_s_exit_account} gateway_s_exit_account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    gateway_s_exit_account.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a gateway_s_exit_account message.
     * @function verify
     * @memberof gateway_s_exit_account
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    gateway_s_exit_account.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a gateway_s_exit_account message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gateway_s_exit_account
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gateway_s_exit_account} gateway_s_exit_account
     */
    gateway_s_exit_account.fromObject = function fromObject(object) {
        if (object instanceof $root.gateway_s_exit_account)
            return object;
        return new $root.gateway_s_exit_account();
    };

    /**
     * Creates a plain object from a gateway_s_exit_account message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gateway_s_exit_account
     * @static
     * @param {gateway_s_exit_account} message gateway_s_exit_account
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    gateway_s_exit_account.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this gateway_s_exit_account to JSON.
     * @function toJSON
     * @memberof gateway_s_exit_account
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    gateway_s_exit_account.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return gateway_s_exit_account;
})();

$root.player_c_info = (function() {

    /**
     * Properties of a player_c_info.
     * @exports Iplayer_c_info
     * @interface Iplayer_c_info
     */

    /**
     * Constructs a new player_c_info.
     * @exports player_c_info
     * @classdesc Represents a player_c_info.
     * @implements Iplayer_c_info
     * @constructor
     * @param {Iplayer_c_info=} [properties] Properties to set
     */
    function player_c_info(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new player_c_info instance using the specified properties.
     * @function create
     * @memberof player_c_info
     * @static
     * @param {Iplayer_c_info=} [properties] Properties to set
     * @returns {player_c_info} player_c_info instance
     */
    player_c_info.create = function create(properties) {
        return new player_c_info(properties);
    };

    /**
     * Encodes the specified player_c_info message. Does not implicitly {@link player_c_info.verify|verify} messages.
     * @function encode
     * @memberof player_c_info
     * @static
     * @param {Iplayer_c_info} message player_c_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    player_c_info.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified player_c_info message, length delimited. Does not implicitly {@link player_c_info.verify|verify} messages.
     * @function encodeDelimited
     * @memberof player_c_info
     * @static
     * @param {Iplayer_c_info} message player_c_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    player_c_info.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a player_c_info message from the specified reader or buffer.
     * @function decode
     * @memberof player_c_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {player_c_info} player_c_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    player_c_info.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.player_c_info();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a player_c_info message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof player_c_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {player_c_info} player_c_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    player_c_info.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a player_c_info message.
     * @function verify
     * @memberof player_c_info
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    player_c_info.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a player_c_info message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof player_c_info
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {player_c_info} player_c_info
     */
    player_c_info.fromObject = function fromObject(object) {
        if (object instanceof $root.player_c_info)
            return object;
        return new $root.player_c_info();
    };

    /**
     * Creates a plain object from a player_c_info message. Also converts values to other types if specified.
     * @function toObject
     * @memberof player_c_info
     * @static
     * @param {player_c_info} message player_c_info
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    player_c_info.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this player_c_info to JSON.
     * @function toJSON
     * @memberof player_c_info
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    player_c_info.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return player_c_info;
})();

$root.player_s_info = (function() {

    /**
     * Properties of a player_s_info.
     * @exports Iplayer_s_info
     * @interface Iplayer_s_info
     * @property {number|null} [id] player_s_info id
     * @property {string|null} [name] player_s_info name
     */

    /**
     * Constructs a new player_s_info.
     * @exports player_s_info
     * @classdesc Represents a player_s_info.
     * @implements Iplayer_s_info
     * @constructor
     * @param {Iplayer_s_info=} [properties] Properties to set
     */
    function player_s_info(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * player_s_info id.
     * @member {number} id
     * @memberof player_s_info
     * @instance
     */
    player_s_info.prototype.id = 0;

    /**
     * player_s_info name.
     * @member {string} name
     * @memberof player_s_info
     * @instance
     */
    player_s_info.prototype.name = "";

    /**
     * Creates a new player_s_info instance using the specified properties.
     * @function create
     * @memberof player_s_info
     * @static
     * @param {Iplayer_s_info=} [properties] Properties to set
     * @returns {player_s_info} player_s_info instance
     */
    player_s_info.create = function create(properties) {
        return new player_s_info(properties);
    };

    /**
     * Encodes the specified player_s_info message. Does not implicitly {@link player_s_info.verify|verify} messages.
     * @function encode
     * @memberof player_s_info
     * @static
     * @param {Iplayer_s_info} message player_s_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    player_s_info.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified player_s_info message, length delimited. Does not implicitly {@link player_s_info.verify|verify} messages.
     * @function encodeDelimited
     * @memberof player_s_info
     * @static
     * @param {Iplayer_s_info} message player_s_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    player_s_info.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a player_s_info message from the specified reader or buffer.
     * @function decode
     * @memberof player_s_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {player_s_info} player_s_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    player_s_info.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.player_s_info();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a player_s_info message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof player_s_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {player_s_info} player_s_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    player_s_info.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a player_s_info message.
     * @function verify
     * @memberof player_s_info
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    player_s_info.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a player_s_info message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof player_s_info
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {player_s_info} player_s_info
     */
    player_s_info.fromObject = function fromObject(object) {
        if (object instanceof $root.player_s_info)
            return object;
        var message = new $root.player_s_info();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a player_s_info message. Also converts values to other types if specified.
     * @function toObject
     * @memberof player_s_info
     * @static
     * @param {player_s_info} message player_s_info
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    player_s_info.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this player_s_info to JSON.
     * @function toJSON
     * @memberof player_s_info
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    player_s_info.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return player_s_info;
})();

module.exports = $root;
