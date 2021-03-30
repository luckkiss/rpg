/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto_test = (function() {

    /**
     * Properties of a proto_test.
     * @exports Iproto_test
     * @interface Iproto_test
     * @property {string|null} [str] proto_test str
     * @property {number|null} [ui32] proto_test ui32
     * @property {Array.<string>|null} [rpStr] proto_test rpStr
     * @property {Array.<number>|null} [rpUi32] proto_test rpUi32
     */

    /**
     * Constructs a new proto_test.
     * @exports proto_test
     * @classdesc Represents a proto_test.
     * @implements Iproto_test
     * @constructor
     * @param {Iproto_test=} [properties] Properties to set
     */
    function proto_test(properties) {
        this.rpStr = [];
        this.rpUi32 = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_test str.
     * @member {string} str
     * @memberof proto_test
     * @instance
     */
    proto_test.prototype.str = "";

    /**
     * proto_test ui32.
     * @member {number} ui32
     * @memberof proto_test
     * @instance
     */
    proto_test.prototype.ui32 = 0;

    /**
     * proto_test rpStr.
     * @member {Array.<string>} rpStr
     * @memberof proto_test
     * @instance
     */
    proto_test.prototype.rpStr = $util.emptyArray;

    /**
     * proto_test rpUi32.
     * @member {Array.<number>} rpUi32
     * @memberof proto_test
     * @instance
     */
    proto_test.prototype.rpUi32 = $util.emptyArray;

    /**
     * Creates a new proto_test instance using the specified properties.
     * @function create
     * @memberof proto_test
     * @static
     * @param {Iproto_test=} [properties] Properties to set
     * @returns {proto_test} proto_test instance
     */
    proto_test.create = function create(properties) {
        return new proto_test(properties);
    };

    /**
     * Encodes the specified proto_test message. Does not implicitly {@link proto_test.verify|verify} messages.
     * @function encode
     * @memberof proto_test
     * @static
     * @param {Iproto_test} message proto_test message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_test.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.str != null && Object.hasOwnProperty.call(message, "str"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
        if (message.ui32 != null && Object.hasOwnProperty.call(message, "ui32"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ui32);
        if (message.rpStr != null && message.rpStr.length)
            for (var i = 0; i < message.rpStr.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rpStr[i]);
        if (message.rpUi32 != null && message.rpUi32.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (var i = 0; i < message.rpUi32.length; ++i)
                writer.uint32(message.rpUi32[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified proto_test message, length delimited. Does not implicitly {@link proto_test.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_test
     * @static
     * @param {Iproto_test} message proto_test message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_test.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_test message from the specified reader or buffer.
     * @function decode
     * @memberof proto_test
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_test} proto_test
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_test.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_test();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.str = reader.string();
                break;
            case 2:
                message.ui32 = reader.uint32();
                break;
            case 3:
                if (!(message.rpStr && message.rpStr.length))
                    message.rpStr = [];
                message.rpStr.push(reader.string());
                break;
            case 4:
                if (!(message.rpUi32 && message.rpUi32.length))
                    message.rpUi32 = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.rpUi32.push(reader.uint32());
                } else
                    message.rpUi32.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a proto_test message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_test
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_test} proto_test
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_test.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_test message.
     * @function verify
     * @memberof proto_test
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_test.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.str != null && message.hasOwnProperty("str"))
            if (!$util.isString(message.str))
                return "str: string expected";
        if (message.ui32 != null && message.hasOwnProperty("ui32"))
            if (!$util.isInteger(message.ui32))
                return "ui32: integer expected";
        if (message.rpStr != null && message.hasOwnProperty("rpStr")) {
            if (!Array.isArray(message.rpStr))
                return "rpStr: array expected";
            for (var i = 0; i < message.rpStr.length; ++i)
                if (!$util.isString(message.rpStr[i]))
                    return "rpStr: string[] expected";
        }
        if (message.rpUi32 != null && message.hasOwnProperty("rpUi32")) {
            if (!Array.isArray(message.rpUi32))
                return "rpUi32: array expected";
            for (var i = 0; i < message.rpUi32.length; ++i)
                if (!$util.isInteger(message.rpUi32[i]))
                    return "rpUi32: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a proto_test message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_test
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_test} proto_test
     */
    proto_test.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_test)
            return object;
        var message = new $root.proto_test();
        if (object.str != null)
            message.str = String(object.str);
        if (object.ui32 != null)
            message.ui32 = object.ui32 >>> 0;
        if (object.rpStr) {
            if (!Array.isArray(object.rpStr))
                throw TypeError(".proto_test.rpStr: array expected");
            message.rpStr = [];
            for (var i = 0; i < object.rpStr.length; ++i)
                message.rpStr[i] = String(object.rpStr[i]);
        }
        if (object.rpUi32) {
            if (!Array.isArray(object.rpUi32))
                throw TypeError(".proto_test.rpUi32: array expected");
            message.rpUi32 = [];
            for (var i = 0; i < object.rpUi32.length; ++i)
                message.rpUi32[i] = object.rpUi32[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_test message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_test
     * @static
     * @param {proto_test} message proto_test
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_test.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.rpStr = [];
            object.rpUi32 = [];
        }
        if (options.defaults) {
            object.str = "";
            object.ui32 = 0;
        }
        if (message.str != null && message.hasOwnProperty("str"))
            object.str = message.str;
        if (message.ui32 != null && message.hasOwnProperty("ui32"))
            object.ui32 = message.ui32;
        if (message.rpStr && message.rpStr.length) {
            object.rpStr = [];
            for (var j = 0; j < message.rpStr.length; ++j)
                object.rpStr[j] = message.rpStr[j];
        }
        if (message.rpUi32 && message.rpUi32.length) {
            object.rpUi32 = [];
            for (var j = 0; j < message.rpUi32.length; ++j)
                object.rpUi32[j] = message.rpUi32[j];
        }
        return object;
    };

    /**
     * Converts this proto_test to JSON.
     * @function toJSON
     * @memberof proto_test
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_test.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_test;
})();

$root.proto_test2 = (function() {

    /**
     * Properties of a proto_test2.
     * @exports Iproto_test2
     * @interface Iproto_test2
     * @property {string|null} [str] proto_test2 str
     * @property {Itest_import|null} [ti] proto_test2 ti
     */

    /**
     * Constructs a new proto_test2.
     * @exports proto_test2
     * @classdesc Represents a proto_test2.
     * @implements Iproto_test2
     * @constructor
     * @param {Iproto_test2=} [properties] Properties to set
     */
    function proto_test2(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_test2 str.
     * @member {string} str
     * @memberof proto_test2
     * @instance
     */
    proto_test2.prototype.str = "";

    /**
     * proto_test2 ti.
     * @member {Itest_import|null|undefined} ti
     * @memberof proto_test2
     * @instance
     */
    proto_test2.prototype.ti = null;

    /**
     * Creates a new proto_test2 instance using the specified properties.
     * @function create
     * @memberof proto_test2
     * @static
     * @param {Iproto_test2=} [properties] Properties to set
     * @returns {proto_test2} proto_test2 instance
     */
    proto_test2.create = function create(properties) {
        return new proto_test2(properties);
    };

    /**
     * Encodes the specified proto_test2 message. Does not implicitly {@link proto_test2.verify|verify} messages.
     * @function encode
     * @memberof proto_test2
     * @static
     * @param {Iproto_test2} message proto_test2 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_test2.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.str != null && Object.hasOwnProperty.call(message, "str"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
        if (message.ti != null && Object.hasOwnProperty.call(message, "ti"))
            $root.test_import.encode(message.ti, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_test2 message, length delimited. Does not implicitly {@link proto_test2.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_test2
     * @static
     * @param {Iproto_test2} message proto_test2 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_test2.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_test2 message from the specified reader or buffer.
     * @function decode
     * @memberof proto_test2
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_test2} proto_test2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_test2.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_test2();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.str = reader.string();
                break;
            case 2:
                message.ti = $root.test_import.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a proto_test2 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_test2
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_test2} proto_test2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_test2.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_test2 message.
     * @function verify
     * @memberof proto_test2
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_test2.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.str != null && message.hasOwnProperty("str"))
            if (!$util.isString(message.str))
                return "str: string expected";
        if (message.ti != null && message.hasOwnProperty("ti")) {
            var error = $root.test_import.verify(message.ti);
            if (error)
                return "ti." + error;
        }
        return null;
    };

    /**
     * Creates a proto_test2 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_test2
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_test2} proto_test2
     */
    proto_test2.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_test2)
            return object;
        var message = new $root.proto_test2();
        if (object.str != null)
            message.str = String(object.str);
        if (object.ti != null) {
            if (typeof object.ti !== "object")
                throw TypeError(".proto_test2.ti: object expected");
            message.ti = $root.test_import.fromObject(object.ti);
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_test2 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_test2
     * @static
     * @param {proto_test2} message proto_test2
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_test2.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.str = "";
            object.ti = null;
        }
        if (message.str != null && message.hasOwnProperty("str"))
            object.str = message.str;
        if (message.ti != null && message.hasOwnProperty("ti"))
            object.ti = $root.test_import.toObject(message.ti, options);
        return object;
    };

    /**
     * Converts this proto_test2 to JSON.
     * @function toJSON
     * @memberof proto_test2
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_test2.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_test2;
})();

$root.proto_test3 = (function() {

    /**
     * Properties of a proto_test3.
     * @exports Iproto_test3
     * @interface Iproto_test3
     * @property {string|null} [str] proto_test3 str
     * @property {Itest_import|null} [ti] proto_test3 ti
     */

    /**
     * Constructs a new proto_test3.
     * @exports proto_test3
     * @classdesc Represents a proto_test3.
     * @implements Iproto_test3
     * @constructor
     * @param {Iproto_test3=} [properties] Properties to set
     */
    function proto_test3(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_test3 str.
     * @member {string} str
     * @memberof proto_test3
     * @instance
     */
    proto_test3.prototype.str = "";

    /**
     * proto_test3 ti.
     * @member {Itest_import|null|undefined} ti
     * @memberof proto_test3
     * @instance
     */
    proto_test3.prototype.ti = null;

    /**
     * Creates a new proto_test3 instance using the specified properties.
     * @function create
     * @memberof proto_test3
     * @static
     * @param {Iproto_test3=} [properties] Properties to set
     * @returns {proto_test3} proto_test3 instance
     */
    proto_test3.create = function create(properties) {
        return new proto_test3(properties);
    };

    /**
     * Encodes the specified proto_test3 message. Does not implicitly {@link proto_test3.verify|verify} messages.
     * @function encode
     * @memberof proto_test3
     * @static
     * @param {Iproto_test3} message proto_test3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_test3.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.str != null && Object.hasOwnProperty.call(message, "str"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
        if (message.ti != null && Object.hasOwnProperty.call(message, "ti"))
            $root.test_import.encode(message.ti, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_test3 message, length delimited. Does not implicitly {@link proto_test3.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_test3
     * @static
     * @param {Iproto_test3} message proto_test3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_test3.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_test3 message from the specified reader or buffer.
     * @function decode
     * @memberof proto_test3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_test3} proto_test3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_test3.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_test3();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.str = reader.string();
                break;
            case 2:
                message.ti = $root.test_import.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a proto_test3 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_test3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_test3} proto_test3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_test3.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_test3 message.
     * @function verify
     * @memberof proto_test3
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_test3.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.str != null && message.hasOwnProperty("str"))
            if (!$util.isString(message.str))
                return "str: string expected";
        if (message.ti != null && message.hasOwnProperty("ti")) {
            var error = $root.test_import.verify(message.ti);
            if (error)
                return "ti." + error;
        }
        return null;
    };

    /**
     * Creates a proto_test3 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_test3
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_test3} proto_test3
     */
    proto_test3.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_test3)
            return object;
        var message = new $root.proto_test3();
        if (object.str != null)
            message.str = String(object.str);
        if (object.ti != null) {
            if (typeof object.ti !== "object")
                throw TypeError(".proto_test3.ti: object expected");
            message.ti = $root.test_import.fromObject(object.ti);
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_test3 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_test3
     * @static
     * @param {proto_test3} message proto_test3
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_test3.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.str = "";
            object.ti = null;
        }
        if (message.str != null && message.hasOwnProperty("str"))
            object.str = message.str;
        if (message.ti != null && message.hasOwnProperty("ti"))
            object.ti = $root.test_import.toObject(message.ti, options);
        return object;
    };

    /**
     * Converts this proto_test3 to JSON.
     * @function toJSON
     * @memberof proto_test3
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_test3.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_test3;
})();

$root.proto_test4 = (function() {

    /**
     * Properties of a proto_test4.
     * @exports Iproto_test4
     * @interface Iproto_test4
     * @property {Iproto_test3|null} [t3] proto_test4 t3
     * @property {Itest_import|null} [ti] proto_test4 ti
     */

    /**
     * Constructs a new proto_test4.
     * @exports proto_test4
     * @classdesc Represents a proto_test4.
     * @implements Iproto_test4
     * @constructor
     * @param {Iproto_test4=} [properties] Properties to set
     */
    function proto_test4(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_test4 t3.
     * @member {Iproto_test3|null|undefined} t3
     * @memberof proto_test4
     * @instance
     */
    proto_test4.prototype.t3 = null;

    /**
     * proto_test4 ti.
     * @member {Itest_import|null|undefined} ti
     * @memberof proto_test4
     * @instance
     */
    proto_test4.prototype.ti = null;

    /**
     * Creates a new proto_test4 instance using the specified properties.
     * @function create
     * @memberof proto_test4
     * @static
     * @param {Iproto_test4=} [properties] Properties to set
     * @returns {proto_test4} proto_test4 instance
     */
    proto_test4.create = function create(properties) {
        return new proto_test4(properties);
    };

    /**
     * Encodes the specified proto_test4 message. Does not implicitly {@link proto_test4.verify|verify} messages.
     * @function encode
     * @memberof proto_test4
     * @static
     * @param {Iproto_test4} message proto_test4 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_test4.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.t3 != null && Object.hasOwnProperty.call(message, "t3"))
            $root.proto_test3.encode(message.t3, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.ti != null && Object.hasOwnProperty.call(message, "ti"))
            $root.test_import.encode(message.ti, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_test4 message, length delimited. Does not implicitly {@link proto_test4.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_test4
     * @static
     * @param {Iproto_test4} message proto_test4 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_test4.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_test4 message from the specified reader or buffer.
     * @function decode
     * @memberof proto_test4
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_test4} proto_test4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_test4.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_test4();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.t3 = $root.proto_test3.decode(reader, reader.uint32());
                break;
            case 2:
                message.ti = $root.test_import.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a proto_test4 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_test4
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_test4} proto_test4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_test4.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_test4 message.
     * @function verify
     * @memberof proto_test4
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_test4.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.t3 != null && message.hasOwnProperty("t3")) {
            var error = $root.proto_test3.verify(message.t3);
            if (error)
                return "t3." + error;
        }
        if (message.ti != null && message.hasOwnProperty("ti")) {
            var error = $root.test_import.verify(message.ti);
            if (error)
                return "ti." + error;
        }
        return null;
    };

    /**
     * Creates a proto_test4 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_test4
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_test4} proto_test4
     */
    proto_test4.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_test4)
            return object;
        var message = new $root.proto_test4();
        if (object.t3 != null) {
            if (typeof object.t3 !== "object")
                throw TypeError(".proto_test4.t3: object expected");
            message.t3 = $root.proto_test3.fromObject(object.t3);
        }
        if (object.ti != null) {
            if (typeof object.ti !== "object")
                throw TypeError(".proto_test4.ti: object expected");
            message.ti = $root.test_import.fromObject(object.ti);
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_test4 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_test4
     * @static
     * @param {proto_test4} message proto_test4
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_test4.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.t3 = null;
            object.ti = null;
        }
        if (message.t3 != null && message.hasOwnProperty("t3"))
            object.t3 = $root.proto_test3.toObject(message.t3, options);
        if (message.ti != null && message.hasOwnProperty("ti"))
            object.ti = $root.test_import.toObject(message.ti, options);
        return object;
    };

    /**
     * Converts this proto_test4 to JSON.
     * @function toJSON
     * @memberof proto_test4
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_test4.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_test4;
})();

$root.test_import = (function() {

    /**
     * Properties of a test_import.
     * @exports Itest_import
     * @interface Itest_import
     * @property {number|null} [ui32] test_import ui32
     */

    /**
     * Constructs a new test_import.
     * @exports test_import
     * @classdesc Represents a test_import.
     * @implements Itest_import
     * @constructor
     * @param {Itest_import=} [properties] Properties to set
     */
    function test_import(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * test_import ui32.
     * @member {number} ui32
     * @memberof test_import
     * @instance
     */
    test_import.prototype.ui32 = 0;

    /**
     * Creates a new test_import instance using the specified properties.
     * @function create
     * @memberof test_import
     * @static
     * @param {Itest_import=} [properties] Properties to set
     * @returns {test_import} test_import instance
     */
    test_import.create = function create(properties) {
        return new test_import(properties);
    };

    /**
     * Encodes the specified test_import message. Does not implicitly {@link test_import.verify|verify} messages.
     * @function encode
     * @memberof test_import
     * @static
     * @param {Itest_import} message test_import message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    test_import.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ui32 != null && Object.hasOwnProperty.call(message, "ui32"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ui32);
        return writer;
    };

    /**
     * Encodes the specified test_import message, length delimited. Does not implicitly {@link test_import.verify|verify} messages.
     * @function encodeDelimited
     * @memberof test_import
     * @static
     * @param {Itest_import} message test_import message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    test_import.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a test_import message from the specified reader or buffer.
     * @function decode
     * @memberof test_import
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {test_import} test_import
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    test_import.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test_import();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ui32 = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a test_import message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof test_import
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {test_import} test_import
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    test_import.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a test_import message.
     * @function verify
     * @memberof test_import
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    test_import.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ui32 != null && message.hasOwnProperty("ui32"))
            if (!$util.isInteger(message.ui32))
                return "ui32: integer expected";
        return null;
    };

    /**
     * Creates a test_import message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof test_import
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {test_import} test_import
     */
    test_import.fromObject = function fromObject(object) {
        if (object instanceof $root.test_import)
            return object;
        var message = new $root.test_import();
        if (object.ui32 != null)
            message.ui32 = object.ui32 >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a test_import message. Also converts values to other types if specified.
     * @function toObject
     * @memberof test_import
     * @static
     * @param {test_import} message test_import
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    test_import.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ui32 = 0;
        if (message.ui32 != null && message.hasOwnProperty("ui32"))
            object.ui32 = message.ui32;
        return object;
    };

    /**
     * Converts this test_import to JSON.
     * @function toJSON
     * @memberof test_import
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    test_import.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return test_import;
})();

module.exports = $root;
