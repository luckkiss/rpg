import * as $protobuf from "protobufjs";
/** Properties of a proto_test. */
export interface Iproto_test {

    /** proto_test str */
    str?: (string|null);

    /** proto_test ui32 */
    ui32?: (number|null);

    /** proto_test rpStr */
    rpStr?: (string[]|null);

    /** proto_test rpUi32 */
    rpUi32?: (number[]|null);
}

/** Represents a proto_test. */
export class proto_test implements Iproto_test {

    /**
     * Constructs a new proto_test.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_test);

    /** proto_test str. */
    public str: string;

    /** proto_test ui32. */
    public ui32: number;

    /** proto_test rpStr. */
    public rpStr: string[];

    /** proto_test rpUi32. */
    public rpUi32: number[];

    /**
     * Creates a new proto_test instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_test instance
     */
    public static create(properties?: Iproto_test): proto_test;

    /**
     * Encodes the specified proto_test message. Does not implicitly {@link proto_test.verify|verify} messages.
     * @param message proto_test message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_test, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_test message, length delimited. Does not implicitly {@link proto_test.verify|verify} messages.
     * @param message proto_test message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_test, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_test message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_test
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_test;

    /**
     * Decodes a proto_test message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_test
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_test;

    /**
     * Verifies a proto_test message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_test message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_test
     */
    public static fromObject(object: { [k: string]: any }): proto_test;

    /**
     * Creates a plain object from a proto_test message. Also converts values to other types if specified.
     * @param message proto_test
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_test, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_test to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a proto_test2. */
export interface Iproto_test2 {

    /** proto_test2 str */
    str?: (string|null);

    /** proto_test2 ti */
    ti?: (Itest_import|null);
}

/** Represents a proto_test2. */
export class proto_test2 implements Iproto_test2 {

    /**
     * Constructs a new proto_test2.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_test2);

    /** proto_test2 str. */
    public str: string;

    /** proto_test2 ti. */
    public ti?: (Itest_import|null);

    /**
     * Creates a new proto_test2 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_test2 instance
     */
    public static create(properties?: Iproto_test2): proto_test2;

    /**
     * Encodes the specified proto_test2 message. Does not implicitly {@link proto_test2.verify|verify} messages.
     * @param message proto_test2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_test2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_test2 message, length delimited. Does not implicitly {@link proto_test2.verify|verify} messages.
     * @param message proto_test2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_test2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_test2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_test2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_test2;

    /**
     * Decodes a proto_test2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_test2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_test2;

    /**
     * Verifies a proto_test2 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_test2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_test2
     */
    public static fromObject(object: { [k: string]: any }): proto_test2;

    /**
     * Creates a plain object from a proto_test2 message. Also converts values to other types if specified.
     * @param message proto_test2
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_test2, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_test2 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a proto_test3. */
export interface Iproto_test3 {

    /** proto_test3 str */
    str?: (string|null);

    /** proto_test3 ti */
    ti?: (Itest_import|null);
}

/** Represents a proto_test3. */
export class proto_test3 implements Iproto_test3 {

    /**
     * Constructs a new proto_test3.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_test3);

    /** proto_test3 str. */
    public str: string;

    /** proto_test3 ti. */
    public ti?: (Itest_import|null);

    /**
     * Creates a new proto_test3 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_test3 instance
     */
    public static create(properties?: Iproto_test3): proto_test3;

    /**
     * Encodes the specified proto_test3 message. Does not implicitly {@link proto_test3.verify|verify} messages.
     * @param message proto_test3 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_test3, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_test3 message, length delimited. Does not implicitly {@link proto_test3.verify|verify} messages.
     * @param message proto_test3 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_test3, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_test3 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_test3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_test3;

    /**
     * Decodes a proto_test3 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_test3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_test3;

    /**
     * Verifies a proto_test3 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_test3 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_test3
     */
    public static fromObject(object: { [k: string]: any }): proto_test3;

    /**
     * Creates a plain object from a proto_test3 message. Also converts values to other types if specified.
     * @param message proto_test3
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_test3, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_test3 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a proto_test4. */
export interface Iproto_test4 {

    /** proto_test4 t3 */
    t3?: (Iproto_test3|null);

    /** proto_test4 ti */
    ti?: (Itest_import|null);
}

/** Represents a proto_test4. */
export class proto_test4 implements Iproto_test4 {

    /**
     * Constructs a new proto_test4.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_test4);

    /** proto_test4 t3. */
    public t3?: (Iproto_test3|null);

    /** proto_test4 ti. */
    public ti?: (Itest_import|null);

    /**
     * Creates a new proto_test4 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_test4 instance
     */
    public static create(properties?: Iproto_test4): proto_test4;

    /**
     * Encodes the specified proto_test4 message. Does not implicitly {@link proto_test4.verify|verify} messages.
     * @param message proto_test4 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_test4, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_test4 message, length delimited. Does not implicitly {@link proto_test4.verify|verify} messages.
     * @param message proto_test4 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_test4, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_test4 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_test4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_test4;

    /**
     * Decodes a proto_test4 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_test4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_test4;

    /**
     * Verifies a proto_test4 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_test4 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_test4
     */
    public static fromObject(object: { [k: string]: any }): proto_test4;

    /**
     * Creates a plain object from a proto_test4 message. Also converts values to other types if specified.
     * @param message proto_test4
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_test4, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_test4 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a test_import. */
export interface Itest_import {

    /** test_import ui32 */
    ui32?: (number|null);
}

/** Represents a test_import. */
export class test_import implements Itest_import {

    /**
     * Constructs a new test_import.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itest_import);

    /** test_import ui32. */
    public ui32: number;

    /**
     * Creates a new test_import instance using the specified properties.
     * @param [properties] Properties to set
     * @returns test_import instance
     */
    public static create(properties?: Itest_import): test_import;

    /**
     * Encodes the specified test_import message. Does not implicitly {@link test_import.verify|verify} messages.
     * @param message test_import message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itest_import, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified test_import message, length delimited. Does not implicitly {@link test_import.verify|verify} messages.
     * @param message test_import message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itest_import, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a test_import message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns test_import
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): test_import;

    /**
     * Decodes a test_import message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns test_import
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): test_import;

    /**
     * Verifies a test_import message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a test_import message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns test_import
     */
    public static fromObject(object: { [k: string]: any }): test_import;

    /**
     * Creates a plain object from a test_import message. Also converts values to other types if specified.
     * @param message test_import
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: test_import, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this test_import to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
