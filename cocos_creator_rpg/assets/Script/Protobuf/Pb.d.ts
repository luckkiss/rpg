import * as $protobuf from "protobufjs";
/** Properties of a battle_p_unit_info. */
export interface Ibattle_p_unit_info {

    /** battle_p_unit_info id */
    id?: (number|null);

    /** battle_p_unit_info name */
    name?: (string|null);

    /** battle_p_unit_info career */
    career?: (number|null);

    /** battle_p_unit_info x */
    x?: (number|null);

    /** battle_p_unit_info y */
    y?: (number|null);

    /** battle_p_unit_info face */
    face?: (number|null);
}

/** Represents a battle_p_unit_info. */
export class battle_p_unit_info implements Ibattle_p_unit_info {

    /**
     * Constructs a new battle_p_unit_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_p_unit_info);

    /** battle_p_unit_info id. */
    public id: number;

    /** battle_p_unit_info name. */
    public name: string;

    /** battle_p_unit_info career. */
    public career: number;

    /** battle_p_unit_info x. */
    public x: number;

    /** battle_p_unit_info y. */
    public y: number;

    /** battle_p_unit_info face. */
    public face: number;

    /**
     * Creates a new battle_p_unit_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_p_unit_info instance
     */
    public static create(properties?: Ibattle_p_unit_info): battle_p_unit_info;

    /**
     * Encodes the specified battle_p_unit_info message. Does not implicitly {@link battle_p_unit_info.verify|verify} messages.
     * @param message battle_p_unit_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_p_unit_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_p_unit_info message, length delimited. Does not implicitly {@link battle_p_unit_info.verify|verify} messages.
     * @param message battle_p_unit_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_p_unit_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_p_unit_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_p_unit_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_p_unit_info;

    /**
     * Decodes a battle_p_unit_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_p_unit_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_p_unit_info;

    /**
     * Verifies a battle_p_unit_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_p_unit_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_p_unit_info
     */
    public static fromObject(object: { [k: string]: any }): battle_p_unit_info;

    /**
     * Creates a plain object from a battle_p_unit_info message. Also converts values to other types if specified.
     * @param message battle_p_unit_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_p_unit_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_p_unit_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_c_all_unit. */
export interface Ibattle_c_all_unit {
}

/** Represents a battle_c_all_unit. */
export class battle_c_all_unit implements Ibattle_c_all_unit {

    /**
     * Constructs a new battle_c_all_unit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_c_all_unit);

    /**
     * Creates a new battle_c_all_unit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_c_all_unit instance
     */
    public static create(properties?: Ibattle_c_all_unit): battle_c_all_unit;

    /**
     * Encodes the specified battle_c_all_unit message. Does not implicitly {@link battle_c_all_unit.verify|verify} messages.
     * @param message battle_c_all_unit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_c_all_unit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_c_all_unit message, length delimited. Does not implicitly {@link battle_c_all_unit.verify|verify} messages.
     * @param message battle_c_all_unit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_c_all_unit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_c_all_unit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_c_all_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_c_all_unit;

    /**
     * Decodes a battle_c_all_unit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_c_all_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_c_all_unit;

    /**
     * Verifies a battle_c_all_unit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_c_all_unit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_c_all_unit
     */
    public static fromObject(object: { [k: string]: any }): battle_c_all_unit;

    /**
     * Creates a plain object from a battle_c_all_unit message. Also converts values to other types if specified.
     * @param message battle_c_all_unit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_c_all_unit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_c_all_unit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_s_all_unit. */
export interface Ibattle_s_all_unit {

    /** battle_s_all_unit unitList */
    unitList?: (Ibattle_p_unit_info[]|null);
}

/** Represents a battle_s_all_unit. */
export class battle_s_all_unit implements Ibattle_s_all_unit {

    /**
     * Constructs a new battle_s_all_unit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_s_all_unit);

    /** battle_s_all_unit unitList. */
    public unitList: Ibattle_p_unit_info[];

    /**
     * Creates a new battle_s_all_unit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_s_all_unit instance
     */
    public static create(properties?: Ibattle_s_all_unit): battle_s_all_unit;

    /**
     * Encodes the specified battle_s_all_unit message. Does not implicitly {@link battle_s_all_unit.verify|verify} messages.
     * @param message battle_s_all_unit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_s_all_unit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_s_all_unit message, length delimited. Does not implicitly {@link battle_s_all_unit.verify|verify} messages.
     * @param message battle_s_all_unit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_s_all_unit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_s_all_unit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_s_all_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_s_all_unit;

    /**
     * Decodes a battle_s_all_unit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_s_all_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_s_all_unit;

    /**
     * Verifies a battle_s_all_unit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_s_all_unit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_s_all_unit
     */
    public static fromObject(object: { [k: string]: any }): battle_s_all_unit;

    /**
     * Creates a plain object from a battle_s_all_unit message. Also converts values to other types if specified.
     * @param message battle_s_all_unit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_s_all_unit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_s_all_unit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_s_update_unit. */
export interface Ibattle_s_update_unit {

    /** battle_s_update_unit unit */
    unit?: (Ibattle_p_unit_info|null);
}

/** Represents a battle_s_update_unit. */
export class battle_s_update_unit implements Ibattle_s_update_unit {

    /**
     * Constructs a new battle_s_update_unit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_s_update_unit);

    /** battle_s_update_unit unit. */
    public unit?: (Ibattle_p_unit_info|null);

    /**
     * Creates a new battle_s_update_unit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_s_update_unit instance
     */
    public static create(properties?: Ibattle_s_update_unit): battle_s_update_unit;

    /**
     * Encodes the specified battle_s_update_unit message. Does not implicitly {@link battle_s_update_unit.verify|verify} messages.
     * @param message battle_s_update_unit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_s_update_unit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_s_update_unit message, length delimited. Does not implicitly {@link battle_s_update_unit.verify|verify} messages.
     * @param message battle_s_update_unit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_s_update_unit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_s_update_unit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_s_update_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_s_update_unit;

    /**
     * Decodes a battle_s_update_unit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_s_update_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_s_update_unit;

    /**
     * Verifies a battle_s_update_unit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_s_update_unit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_s_update_unit
     */
    public static fromObject(object: { [k: string]: any }): battle_s_update_unit;

    /**
     * Creates a plain object from a battle_s_update_unit message. Also converts values to other types if specified.
     * @param message battle_s_update_unit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_s_update_unit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_s_update_unit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_s_del_unit. */
export interface Ibattle_s_del_unit {

    /** battle_s_del_unit id */
    id?: (number|null);
}

/** Represents a battle_s_del_unit. */
export class battle_s_del_unit implements Ibattle_s_del_unit {

    /**
     * Constructs a new battle_s_del_unit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_s_del_unit);

    /** battle_s_del_unit id. */
    public id: number;

    /**
     * Creates a new battle_s_del_unit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_s_del_unit instance
     */
    public static create(properties?: Ibattle_s_del_unit): battle_s_del_unit;

    /**
     * Encodes the specified battle_s_del_unit message. Does not implicitly {@link battle_s_del_unit.verify|verify} messages.
     * @param message battle_s_del_unit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_s_del_unit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_s_del_unit message, length delimited. Does not implicitly {@link battle_s_del_unit.verify|verify} messages.
     * @param message battle_s_del_unit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_s_del_unit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_s_del_unit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_s_del_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_s_del_unit;

    /**
     * Decodes a battle_s_del_unit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_s_del_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_s_del_unit;

    /**
     * Verifies a battle_s_del_unit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_s_del_unit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_s_del_unit
     */
    public static fromObject(object: { [k: string]: any }): battle_s_del_unit;

    /**
     * Creates a plain object from a battle_s_del_unit message. Also converts values to other types if specified.
     * @param message battle_s_del_unit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_s_del_unit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_s_del_unit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_c_skill. */
export interface Ibattle_c_skill {

    /** battle_c_skill skillId */
    skillId?: (number|null);

    /** battle_c_skill hitList */
    hitList?: (number[]|null);
}

/** Represents a battle_c_skill. */
export class battle_c_skill implements Ibattle_c_skill {

    /**
     * Constructs a new battle_c_skill.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_c_skill);

    /** battle_c_skill skillId. */
    public skillId: number;

    /** battle_c_skill hitList. */
    public hitList: number[];

    /**
     * Creates a new battle_c_skill instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_c_skill instance
     */
    public static create(properties?: Ibattle_c_skill): battle_c_skill;

    /**
     * Encodes the specified battle_c_skill message. Does not implicitly {@link battle_c_skill.verify|verify} messages.
     * @param message battle_c_skill message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_c_skill, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_c_skill message, length delimited. Does not implicitly {@link battle_c_skill.verify|verify} messages.
     * @param message battle_c_skill message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_c_skill, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_c_skill message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_c_skill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_c_skill;

    /**
     * Decodes a battle_c_skill message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_c_skill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_c_skill;

    /**
     * Verifies a battle_c_skill message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_c_skill message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_c_skill
     */
    public static fromObject(object: { [k: string]: any }): battle_c_skill;

    /**
     * Creates a plain object from a battle_c_skill message. Also converts values to other types if specified.
     * @param message battle_c_skill
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_c_skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_c_skill to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_s_skill. */
export interface Ibattle_s_skill {

    /** battle_s_skill skillId */
    skillId?: (number|null);

    /** battle_s_skill id */
    id?: (number|null);
}

/** Represents a battle_s_skill. */
export class battle_s_skill implements Ibattle_s_skill {

    /**
     * Constructs a new battle_s_skill.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_s_skill);

    /** battle_s_skill skillId. */
    public skillId: number;

    /** battle_s_skill id. */
    public id: number;

    /**
     * Creates a new battle_s_skill instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_s_skill instance
     */
    public static create(properties?: Ibattle_s_skill): battle_s_skill;

    /**
     * Encodes the specified battle_s_skill message. Does not implicitly {@link battle_s_skill.verify|verify} messages.
     * @param message battle_s_skill message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_s_skill, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_s_skill message, length delimited. Does not implicitly {@link battle_s_skill.verify|verify} messages.
     * @param message battle_s_skill message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_s_skill, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_s_skill message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_s_skill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_s_skill;

    /**
     * Decodes a battle_s_skill message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_s_skill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_s_skill;

    /**
     * Verifies a battle_s_skill message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_s_skill message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_s_skill
     */
    public static fromObject(object: { [k: string]: any }): battle_s_skill;

    /**
     * Creates a plain object from a battle_s_skill message. Also converts values to other types if specified.
     * @param message battle_s_skill
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_s_skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_s_skill to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_s_hit. */
export interface Ibattle_s_hit {

    /** battle_s_hit hurt */
    hurt?: (number|null);

    /** battle_s_hit id */
    id?: (number|null);
}

/** Represents a battle_s_hit. */
export class battle_s_hit implements Ibattle_s_hit {

    /**
     * Constructs a new battle_s_hit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_s_hit);

    /** battle_s_hit hurt. */
    public hurt: number;

    /** battle_s_hit id. */
    public id: number;

    /**
     * Creates a new battle_s_hit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_s_hit instance
     */
    public static create(properties?: Ibattle_s_hit): battle_s_hit;

    /**
     * Encodes the specified battle_s_hit message. Does not implicitly {@link battle_s_hit.verify|verify} messages.
     * @param message battle_s_hit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_s_hit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_s_hit message, length delimited. Does not implicitly {@link battle_s_hit.verify|verify} messages.
     * @param message battle_s_hit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_s_hit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_s_hit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_s_hit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_s_hit;

    /**
     * Decodes a battle_s_hit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_s_hit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_s_hit;

    /**
     * Verifies a battle_s_hit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_s_hit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_s_hit
     */
    public static fromObject(object: { [k: string]: any }): battle_s_hit;

    /**
     * Creates a plain object from a battle_s_hit message. Also converts values to other types if specified.
     * @param message battle_s_hit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_s_hit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_s_hit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_c_move_start. */
export interface Ibattle_c_move_start {

    /** battle_c_move_start face */
    face?: (number|null);
}

/** Represents a battle_c_move_start. */
export class battle_c_move_start implements Ibattle_c_move_start {

    /**
     * Constructs a new battle_c_move_start.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_c_move_start);

    /** battle_c_move_start face. */
    public face: number;

    /**
     * Creates a new battle_c_move_start instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_c_move_start instance
     */
    public static create(properties?: Ibattle_c_move_start): battle_c_move_start;

    /**
     * Encodes the specified battle_c_move_start message. Does not implicitly {@link battle_c_move_start.verify|verify} messages.
     * @param message battle_c_move_start message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_c_move_start, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_c_move_start message, length delimited. Does not implicitly {@link battle_c_move_start.verify|verify} messages.
     * @param message battle_c_move_start message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_c_move_start, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_c_move_start message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_c_move_start
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_c_move_start;

    /**
     * Decodes a battle_c_move_start message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_c_move_start
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_c_move_start;

    /**
     * Verifies a battle_c_move_start message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_c_move_start message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_c_move_start
     */
    public static fromObject(object: { [k: string]: any }): battle_c_move_start;

    /**
     * Creates a plain object from a battle_c_move_start message. Also converts values to other types if specified.
     * @param message battle_c_move_start
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_c_move_start, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_c_move_start to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_s_move_start. */
export interface Ibattle_s_move_start {

    /** battle_s_move_start id */
    id?: (number|null);

    /** battle_s_move_start face */
    face?: (number|null);

    /** battle_s_move_start x */
    x?: (number|null);

    /** battle_s_move_start y */
    y?: (number|null);
}

/** Represents a battle_s_move_start. */
export class battle_s_move_start implements Ibattle_s_move_start {

    /**
     * Constructs a new battle_s_move_start.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_s_move_start);

    /** battle_s_move_start id. */
    public id: number;

    /** battle_s_move_start face. */
    public face: number;

    /** battle_s_move_start x. */
    public x: number;

    /** battle_s_move_start y. */
    public y: number;

    /**
     * Creates a new battle_s_move_start instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_s_move_start instance
     */
    public static create(properties?: Ibattle_s_move_start): battle_s_move_start;

    /**
     * Encodes the specified battle_s_move_start message. Does not implicitly {@link battle_s_move_start.verify|verify} messages.
     * @param message battle_s_move_start message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_s_move_start, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_s_move_start message, length delimited. Does not implicitly {@link battle_s_move_start.verify|verify} messages.
     * @param message battle_s_move_start message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_s_move_start, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_s_move_start message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_s_move_start
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_s_move_start;

    /**
     * Decodes a battle_s_move_start message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_s_move_start
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_s_move_start;

    /**
     * Verifies a battle_s_move_start message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_s_move_start message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_s_move_start
     */
    public static fromObject(object: { [k: string]: any }): battle_s_move_start;

    /**
     * Creates a plain object from a battle_s_move_start message. Also converts values to other types if specified.
     * @param message battle_s_move_start
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_s_move_start, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_s_move_start to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_c_move_end. */
export interface Ibattle_c_move_end {
}

/** Represents a battle_c_move_end. */
export class battle_c_move_end implements Ibattle_c_move_end {

    /**
     * Constructs a new battle_c_move_end.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_c_move_end);

    /**
     * Creates a new battle_c_move_end instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_c_move_end instance
     */
    public static create(properties?: Ibattle_c_move_end): battle_c_move_end;

    /**
     * Encodes the specified battle_c_move_end message. Does not implicitly {@link battle_c_move_end.verify|verify} messages.
     * @param message battle_c_move_end message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_c_move_end, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_c_move_end message, length delimited. Does not implicitly {@link battle_c_move_end.verify|verify} messages.
     * @param message battle_c_move_end message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_c_move_end, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_c_move_end message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_c_move_end
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_c_move_end;

    /**
     * Decodes a battle_c_move_end message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_c_move_end
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_c_move_end;

    /**
     * Verifies a battle_c_move_end message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_c_move_end message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_c_move_end
     */
    public static fromObject(object: { [k: string]: any }): battle_c_move_end;

    /**
     * Creates a plain object from a battle_c_move_end message. Also converts values to other types if specified.
     * @param message battle_c_move_end
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_c_move_end, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_c_move_end to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a battle_s_move_end. */
export interface Ibattle_s_move_end {

    /** battle_s_move_end id */
    id?: (number|null);

    /** battle_s_move_end face */
    face?: (number|null);

    /** battle_s_move_end x */
    x?: (number|null);

    /** battle_s_move_end y */
    y?: (number|null);
}

/** Represents a battle_s_move_end. */
export class battle_s_move_end implements Ibattle_s_move_end {

    /**
     * Constructs a new battle_s_move_end.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibattle_s_move_end);

    /** battle_s_move_end id. */
    public id: number;

    /** battle_s_move_end face. */
    public face: number;

    /** battle_s_move_end x. */
    public x: number;

    /** battle_s_move_end y. */
    public y: number;

    /**
     * Creates a new battle_s_move_end instance using the specified properties.
     * @param [properties] Properties to set
     * @returns battle_s_move_end instance
     */
    public static create(properties?: Ibattle_s_move_end): battle_s_move_end;

    /**
     * Encodes the specified battle_s_move_end message. Does not implicitly {@link battle_s_move_end.verify|verify} messages.
     * @param message battle_s_move_end message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibattle_s_move_end, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified battle_s_move_end message, length delimited. Does not implicitly {@link battle_s_move_end.verify|verify} messages.
     * @param message battle_s_move_end message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibattle_s_move_end, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a battle_s_move_end message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns battle_s_move_end
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle_s_move_end;

    /**
     * Decodes a battle_s_move_end message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns battle_s_move_end
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle_s_move_end;

    /**
     * Verifies a battle_s_move_end message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a battle_s_move_end message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns battle_s_move_end
     */
    public static fromObject(object: { [k: string]: any }): battle_s_move_end;

    /**
     * Creates a plain object from a battle_s_move_end message. Also converts values to other types if specified.
     * @param message battle_s_move_end
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: battle_s_move_end, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this battle_s_move_end to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a game_s_error. */
export interface Igame_s_error {

    /** game_s_error proto */
    proto?: (number|null);

    /** game_s_error code */
    code?: (number|null);
}

/** Represents a game_s_error. */
export class game_s_error implements Igame_s_error {

    /**
     * Constructs a new game_s_error.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igame_s_error);

    /** game_s_error proto. */
    public proto: number;

    /** game_s_error code. */
    public code: number;

    /**
     * Creates a new game_s_error instance using the specified properties.
     * @param [properties] Properties to set
     * @returns game_s_error instance
     */
    public static create(properties?: Igame_s_error): game_s_error;

    /**
     * Encodes the specified game_s_error message. Does not implicitly {@link game_s_error.verify|verify} messages.
     * @param message game_s_error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igame_s_error, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified game_s_error message, length delimited. Does not implicitly {@link game_s_error.verify|verify} messages.
     * @param message game_s_error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igame_s_error, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a game_s_error message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns game_s_error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_s_error;

    /**
     * Decodes a game_s_error message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns game_s_error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_s_error;

    /**
     * Verifies a game_s_error message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a game_s_error message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns game_s_error
     */
    public static fromObject(object: { [k: string]: any }): game_s_error;

    /**
     * Creates a plain object from a game_s_error message. Also converts values to other types if specified.
     * @param message game_s_error
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: game_s_error, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this game_s_error to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_c_login. */
export interface Igateway_c_login {

    /** gateway_c_login account */
    account?: (string|null);
}

/** Represents a gateway_c_login. */
export class gateway_c_login implements Igateway_c_login {

    /**
     * Constructs a new gateway_c_login.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_c_login);

    /** gateway_c_login account. */
    public account: string;

    /**
     * Creates a new gateway_c_login instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_c_login instance
     */
    public static create(properties?: Igateway_c_login): gateway_c_login;

    /**
     * Encodes the specified gateway_c_login message. Does not implicitly {@link gateway_c_login.verify|verify} messages.
     * @param message gateway_c_login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_c_login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_c_login message, length delimited. Does not implicitly {@link gateway_c_login.verify|verify} messages.
     * @param message gateway_c_login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_c_login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_c_login message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_c_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_c_login;

    /**
     * Decodes a gateway_c_login message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_c_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_c_login;

    /**
     * Verifies a gateway_c_login message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_c_login message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_c_login
     */
    public static fromObject(object: { [k: string]: any }): gateway_c_login;

    /**
     * Creates a plain object from a gateway_c_login message. Also converts values to other types if specified.
     * @param message gateway_c_login
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_c_login, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_c_login to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_p_role_info. */
export interface Igateway_p_role_info {

    /** gateway_p_role_info id */
    id?: (number|null);

    /** gateway_p_role_info name */
    name?: (string|null);

    /** gateway_p_role_info career */
    career?: (number|null);
}

/** Represents a gateway_p_role_info. */
export class gateway_p_role_info implements Igateway_p_role_info {

    /**
     * Constructs a new gateway_p_role_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_p_role_info);

    /** gateway_p_role_info id. */
    public id: number;

    /** gateway_p_role_info name. */
    public name: string;

    /** gateway_p_role_info career. */
    public career: number;

    /**
     * Creates a new gateway_p_role_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_p_role_info instance
     */
    public static create(properties?: Igateway_p_role_info): gateway_p_role_info;

    /**
     * Encodes the specified gateway_p_role_info message. Does not implicitly {@link gateway_p_role_info.verify|verify} messages.
     * @param message gateway_p_role_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_p_role_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_p_role_info message, length delimited. Does not implicitly {@link gateway_p_role_info.verify|verify} messages.
     * @param message gateway_p_role_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_p_role_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_p_role_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_p_role_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_p_role_info;

    /**
     * Decodes a gateway_p_role_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_p_role_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_p_role_info;

    /**
     * Verifies a gateway_p_role_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_p_role_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_p_role_info
     */
    public static fromObject(object: { [k: string]: any }): gateway_p_role_info;

    /**
     * Creates a plain object from a gateway_p_role_info message. Also converts values to other types if specified.
     * @param message gateway_p_role_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_p_role_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_p_role_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_s_login. */
export interface Igateway_s_login {

    /** gateway_s_login account */
    account?: (string|null);

    /** gateway_s_login roleList */
    roleList?: (Igateway_p_role_info[]|null);
}

/** Represents a gateway_s_login. */
export class gateway_s_login implements Igateway_s_login {

    /**
     * Constructs a new gateway_s_login.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_s_login);

    /** gateway_s_login account. */
    public account: string;

    /** gateway_s_login roleList. */
    public roleList: Igateway_p_role_info[];

    /**
     * Creates a new gateway_s_login instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_s_login instance
     */
    public static create(properties?: Igateway_s_login): gateway_s_login;

    /**
     * Encodes the specified gateway_s_login message. Does not implicitly {@link gateway_s_login.verify|verify} messages.
     * @param message gateway_s_login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_s_login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_s_login message, length delimited. Does not implicitly {@link gateway_s_login.verify|verify} messages.
     * @param message gateway_s_login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_s_login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_s_login message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_s_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_s_login;

    /**
     * Decodes a gateway_s_login message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_s_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_s_login;

    /**
     * Verifies a gateway_s_login message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_s_login message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_s_login
     */
    public static fromObject(object: { [k: string]: any }): gateway_s_login;

    /**
     * Creates a plain object from a gateway_s_login message. Also converts values to other types if specified.
     * @param message gateway_s_login
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_s_login, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_s_login to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_c_select_role. */
export interface Igateway_c_select_role {

    /** gateway_c_select_role id */
    id?: (number|null);
}

/** Represents a gateway_c_select_role. */
export class gateway_c_select_role implements Igateway_c_select_role {

    /**
     * Constructs a new gateway_c_select_role.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_c_select_role);

    /** gateway_c_select_role id. */
    public id: number;

    /**
     * Creates a new gateway_c_select_role instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_c_select_role instance
     */
    public static create(properties?: Igateway_c_select_role): gateway_c_select_role;

    /**
     * Encodes the specified gateway_c_select_role message. Does not implicitly {@link gateway_c_select_role.verify|verify} messages.
     * @param message gateway_c_select_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_c_select_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_c_select_role message, length delimited. Does not implicitly {@link gateway_c_select_role.verify|verify} messages.
     * @param message gateway_c_select_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_c_select_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_c_select_role message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_c_select_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_c_select_role;

    /**
     * Decodes a gateway_c_select_role message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_c_select_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_c_select_role;

    /**
     * Verifies a gateway_c_select_role message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_c_select_role message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_c_select_role
     */
    public static fromObject(object: { [k: string]: any }): gateway_c_select_role;

    /**
     * Creates a plain object from a gateway_c_select_role message. Also converts values to other types if specified.
     * @param message gateway_c_select_role
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_c_select_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_c_select_role to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_s_select_role. */
export interface Igateway_s_select_role {

    /** gateway_s_select_role id */
    id?: (number|null);
}

/** Represents a gateway_s_select_role. */
export class gateway_s_select_role implements Igateway_s_select_role {

    /**
     * Constructs a new gateway_s_select_role.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_s_select_role);

    /** gateway_s_select_role id. */
    public id: number;

    /**
     * Creates a new gateway_s_select_role instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_s_select_role instance
     */
    public static create(properties?: Igateway_s_select_role): gateway_s_select_role;

    /**
     * Encodes the specified gateway_s_select_role message. Does not implicitly {@link gateway_s_select_role.verify|verify} messages.
     * @param message gateway_s_select_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_s_select_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_s_select_role message, length delimited. Does not implicitly {@link gateway_s_select_role.verify|verify} messages.
     * @param message gateway_s_select_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_s_select_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_s_select_role message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_s_select_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_s_select_role;

    /**
     * Decodes a gateway_s_select_role message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_s_select_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_s_select_role;

    /**
     * Verifies a gateway_s_select_role message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_s_select_role message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_s_select_role
     */
    public static fromObject(object: { [k: string]: any }): gateway_s_select_role;

    /**
     * Creates a plain object from a gateway_s_select_role message. Also converts values to other types if specified.
     * @param message gateway_s_select_role
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_s_select_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_s_select_role to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_c_create_role. */
export interface Igateway_c_create_role {

    /** gateway_c_create_role name */
    name?: (string|null);

    /** gateway_c_create_role career */
    career?: (number|null);
}

/** Represents a gateway_c_create_role. */
export class gateway_c_create_role implements Igateway_c_create_role {

    /**
     * Constructs a new gateway_c_create_role.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_c_create_role);

    /** gateway_c_create_role name. */
    public name: string;

    /** gateway_c_create_role career. */
    public career: number;

    /**
     * Creates a new gateway_c_create_role instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_c_create_role instance
     */
    public static create(properties?: Igateway_c_create_role): gateway_c_create_role;

    /**
     * Encodes the specified gateway_c_create_role message. Does not implicitly {@link gateway_c_create_role.verify|verify} messages.
     * @param message gateway_c_create_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_c_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_c_create_role message, length delimited. Does not implicitly {@link gateway_c_create_role.verify|verify} messages.
     * @param message gateway_c_create_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_c_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_c_create_role message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_c_create_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_c_create_role;

    /**
     * Decodes a gateway_c_create_role message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_c_create_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_c_create_role;

    /**
     * Verifies a gateway_c_create_role message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_c_create_role message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_c_create_role
     */
    public static fromObject(object: { [k: string]: any }): gateway_c_create_role;

    /**
     * Creates a plain object from a gateway_c_create_role message. Also converts values to other types if specified.
     * @param message gateway_c_create_role
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_c_create_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_c_create_role to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_s_create_role. */
export interface Igateway_s_create_role {

    /** gateway_s_create_role roleList */
    roleList?: (Igateway_p_role_info[]|null);
}

/** Represents a gateway_s_create_role. */
export class gateway_s_create_role implements Igateway_s_create_role {

    /**
     * Constructs a new gateway_s_create_role.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_s_create_role);

    /** gateway_s_create_role roleList. */
    public roleList: Igateway_p_role_info[];

    /**
     * Creates a new gateway_s_create_role instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_s_create_role instance
     */
    public static create(properties?: Igateway_s_create_role): gateway_s_create_role;

    /**
     * Encodes the specified gateway_s_create_role message. Does not implicitly {@link gateway_s_create_role.verify|verify} messages.
     * @param message gateway_s_create_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_s_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_s_create_role message, length delimited. Does not implicitly {@link gateway_s_create_role.verify|verify} messages.
     * @param message gateway_s_create_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_s_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_s_create_role message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_s_create_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_s_create_role;

    /**
     * Decodes a gateway_s_create_role message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_s_create_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_s_create_role;

    /**
     * Verifies a gateway_s_create_role message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_s_create_role message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_s_create_role
     */
    public static fromObject(object: { [k: string]: any }): gateway_s_create_role;

    /**
     * Creates a plain object from a gateway_s_create_role message. Also converts values to other types if specified.
     * @param message gateway_s_create_role
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_s_create_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_s_create_role to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_c_heart. */
export interface Igateway_c_heart {
}

/** Represents a gateway_c_heart. */
export class gateway_c_heart implements Igateway_c_heart {

    /**
     * Constructs a new gateway_c_heart.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_c_heart);

    /**
     * Creates a new gateway_c_heart instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_c_heart instance
     */
    public static create(properties?: Igateway_c_heart): gateway_c_heart;

    /**
     * Encodes the specified gateway_c_heart message. Does not implicitly {@link gateway_c_heart.verify|verify} messages.
     * @param message gateway_c_heart message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_c_heart, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_c_heart message, length delimited. Does not implicitly {@link gateway_c_heart.verify|verify} messages.
     * @param message gateway_c_heart message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_c_heart, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_c_heart message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_c_heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_c_heart;

    /**
     * Decodes a gateway_c_heart message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_c_heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_c_heart;

    /**
     * Verifies a gateway_c_heart message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_c_heart message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_c_heart
     */
    public static fromObject(object: { [k: string]: any }): gateway_c_heart;

    /**
     * Creates a plain object from a gateway_c_heart message. Also converts values to other types if specified.
     * @param message gateway_c_heart
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_c_heart, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_c_heart to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_s_heart. */
export interface Igateway_s_heart {
}

/** Represents a gateway_s_heart. */
export class gateway_s_heart implements Igateway_s_heart {

    /**
     * Constructs a new gateway_s_heart.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_s_heart);

    /**
     * Creates a new gateway_s_heart instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_s_heart instance
     */
    public static create(properties?: Igateway_s_heart): gateway_s_heart;

    /**
     * Encodes the specified gateway_s_heart message. Does not implicitly {@link gateway_s_heart.verify|verify} messages.
     * @param message gateway_s_heart message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_s_heart, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_s_heart message, length delimited. Does not implicitly {@link gateway_s_heart.verify|verify} messages.
     * @param message gateway_s_heart message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_s_heart, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_s_heart message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_s_heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_s_heart;

    /**
     * Decodes a gateway_s_heart message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_s_heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_s_heart;

    /**
     * Verifies a gateway_s_heart message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_s_heart message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_s_heart
     */
    public static fromObject(object: { [k: string]: any }): gateway_s_heart;

    /**
     * Creates a plain object from a gateway_s_heart message. Also converts values to other types if specified.
     * @param message gateway_s_heart
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_s_heart, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_s_heart to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_c_warp. */
export interface Igateway_c_warp {

    /** gateway_c_warp proto */
    proto?: (number|null);

    /** gateway_c_warp data */
    data?: (Uint8Array|null);
}

/** Represents a gateway_c_warp. */
export class gateway_c_warp implements Igateway_c_warp {

    /**
     * Constructs a new gateway_c_warp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_c_warp);

    /** gateway_c_warp proto. */
    public proto: number;

    /** gateway_c_warp data. */
    public data: Uint8Array;

    /**
     * Creates a new gateway_c_warp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_c_warp instance
     */
    public static create(properties?: Igateway_c_warp): gateway_c_warp;

    /**
     * Encodes the specified gateway_c_warp message. Does not implicitly {@link gateway_c_warp.verify|verify} messages.
     * @param message gateway_c_warp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_c_warp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_c_warp message, length delimited. Does not implicitly {@link gateway_c_warp.verify|verify} messages.
     * @param message gateway_c_warp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_c_warp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_c_warp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_c_warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_c_warp;

    /**
     * Decodes a gateway_c_warp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_c_warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_c_warp;

    /**
     * Verifies a gateway_c_warp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_c_warp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_c_warp
     */
    public static fromObject(object: { [k: string]: any }): gateway_c_warp;

    /**
     * Creates a plain object from a gateway_c_warp message. Also converts values to other types if specified.
     * @param message gateway_c_warp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_c_warp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_c_warp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_s_warp. */
export interface Igateway_s_warp {

    /** gateway_s_warp proto */
    proto?: (number|null);

    /** gateway_s_warp data */
    data?: (Uint8Array|null);
}

/** Represents a gateway_s_warp. */
export class gateway_s_warp implements Igateway_s_warp {

    /**
     * Constructs a new gateway_s_warp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_s_warp);

    /** gateway_s_warp proto. */
    public proto: number;

    /** gateway_s_warp data. */
    public data: Uint8Array;

    /**
     * Creates a new gateway_s_warp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_s_warp instance
     */
    public static create(properties?: Igateway_s_warp): gateway_s_warp;

    /**
     * Encodes the specified gateway_s_warp message. Does not implicitly {@link gateway_s_warp.verify|verify} messages.
     * @param message gateway_s_warp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_s_warp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_s_warp message, length delimited. Does not implicitly {@link gateway_s_warp.verify|verify} messages.
     * @param message gateway_s_warp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_s_warp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_s_warp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_s_warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_s_warp;

    /**
     * Decodes a gateway_s_warp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_s_warp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_s_warp;

    /**
     * Verifies a gateway_s_warp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_s_warp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_s_warp
     */
    public static fromObject(object: { [k: string]: any }): gateway_s_warp;

    /**
     * Creates a plain object from a gateway_s_warp message. Also converts values to other types if specified.
     * @param message gateway_s_warp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_s_warp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_s_warp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_c_exit_role. */
export interface Igateway_c_exit_role {
}

/** Represents a gateway_c_exit_role. */
export class gateway_c_exit_role implements Igateway_c_exit_role {

    /**
     * Constructs a new gateway_c_exit_role.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_c_exit_role);

    /**
     * Creates a new gateway_c_exit_role instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_c_exit_role instance
     */
    public static create(properties?: Igateway_c_exit_role): gateway_c_exit_role;

    /**
     * Encodes the specified gateway_c_exit_role message. Does not implicitly {@link gateway_c_exit_role.verify|verify} messages.
     * @param message gateway_c_exit_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_c_exit_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_c_exit_role message, length delimited. Does not implicitly {@link gateway_c_exit_role.verify|verify} messages.
     * @param message gateway_c_exit_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_c_exit_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_c_exit_role message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_c_exit_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_c_exit_role;

    /**
     * Decodes a gateway_c_exit_role message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_c_exit_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_c_exit_role;

    /**
     * Verifies a gateway_c_exit_role message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_c_exit_role message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_c_exit_role
     */
    public static fromObject(object: { [k: string]: any }): gateway_c_exit_role;

    /**
     * Creates a plain object from a gateway_c_exit_role message. Also converts values to other types if specified.
     * @param message gateway_c_exit_role
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_c_exit_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_c_exit_role to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_s_exit_role. */
export interface Igateway_s_exit_role {
}

/** Represents a gateway_s_exit_role. */
export class gateway_s_exit_role implements Igateway_s_exit_role {

    /**
     * Constructs a new gateway_s_exit_role.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_s_exit_role);

    /**
     * Creates a new gateway_s_exit_role instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_s_exit_role instance
     */
    public static create(properties?: Igateway_s_exit_role): gateway_s_exit_role;

    /**
     * Encodes the specified gateway_s_exit_role message. Does not implicitly {@link gateway_s_exit_role.verify|verify} messages.
     * @param message gateway_s_exit_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_s_exit_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_s_exit_role message, length delimited. Does not implicitly {@link gateway_s_exit_role.verify|verify} messages.
     * @param message gateway_s_exit_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_s_exit_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_s_exit_role message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_s_exit_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_s_exit_role;

    /**
     * Decodes a gateway_s_exit_role message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_s_exit_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_s_exit_role;

    /**
     * Verifies a gateway_s_exit_role message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_s_exit_role message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_s_exit_role
     */
    public static fromObject(object: { [k: string]: any }): gateway_s_exit_role;

    /**
     * Creates a plain object from a gateway_s_exit_role message. Also converts values to other types if specified.
     * @param message gateway_s_exit_role
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_s_exit_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_s_exit_role to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_c_exit_account. */
export interface Igateway_c_exit_account {
}

/** Represents a gateway_c_exit_account. */
export class gateway_c_exit_account implements Igateway_c_exit_account {

    /**
     * Constructs a new gateway_c_exit_account.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_c_exit_account);

    /**
     * Creates a new gateway_c_exit_account instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_c_exit_account instance
     */
    public static create(properties?: Igateway_c_exit_account): gateway_c_exit_account;

    /**
     * Encodes the specified gateway_c_exit_account message. Does not implicitly {@link gateway_c_exit_account.verify|verify} messages.
     * @param message gateway_c_exit_account message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_c_exit_account, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_c_exit_account message, length delimited. Does not implicitly {@link gateway_c_exit_account.verify|verify} messages.
     * @param message gateway_c_exit_account message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_c_exit_account, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_c_exit_account message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_c_exit_account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_c_exit_account;

    /**
     * Decodes a gateway_c_exit_account message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_c_exit_account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_c_exit_account;

    /**
     * Verifies a gateway_c_exit_account message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_c_exit_account message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_c_exit_account
     */
    public static fromObject(object: { [k: string]: any }): gateway_c_exit_account;

    /**
     * Creates a plain object from a gateway_c_exit_account message. Also converts values to other types if specified.
     * @param message gateway_c_exit_account
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_c_exit_account, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_c_exit_account to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a gateway_s_exit_account. */
export interface Igateway_s_exit_account {
}

/** Represents a gateway_s_exit_account. */
export class gateway_s_exit_account implements Igateway_s_exit_account {

    /**
     * Constructs a new gateway_s_exit_account.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igateway_s_exit_account);

    /**
     * Creates a new gateway_s_exit_account instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gateway_s_exit_account instance
     */
    public static create(properties?: Igateway_s_exit_account): gateway_s_exit_account;

    /**
     * Encodes the specified gateway_s_exit_account message. Does not implicitly {@link gateway_s_exit_account.verify|verify} messages.
     * @param message gateway_s_exit_account message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igateway_s_exit_account, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gateway_s_exit_account message, length delimited. Does not implicitly {@link gateway_s_exit_account.verify|verify} messages.
     * @param message gateway_s_exit_account message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igateway_s_exit_account, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gateway_s_exit_account message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gateway_s_exit_account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gateway_s_exit_account;

    /**
     * Decodes a gateway_s_exit_account message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gateway_s_exit_account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gateway_s_exit_account;

    /**
     * Verifies a gateway_s_exit_account message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gateway_s_exit_account message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gateway_s_exit_account
     */
    public static fromObject(object: { [k: string]: any }): gateway_s_exit_account;

    /**
     * Creates a plain object from a gateway_s_exit_account message. Also converts values to other types if specified.
     * @param message gateway_s_exit_account
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gateway_s_exit_account, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gateway_s_exit_account to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a player_c_info. */
export interface Iplayer_c_info {
}

/** Represents a player_c_info. */
export class player_c_info implements Iplayer_c_info {

    /**
     * Constructs a new player_c_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iplayer_c_info);

    /**
     * Creates a new player_c_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns player_c_info instance
     */
    public static create(properties?: Iplayer_c_info): player_c_info;

    /**
     * Encodes the specified player_c_info message. Does not implicitly {@link player_c_info.verify|verify} messages.
     * @param message player_c_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iplayer_c_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified player_c_info message, length delimited. Does not implicitly {@link player_c_info.verify|verify} messages.
     * @param message player_c_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iplayer_c_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a player_c_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns player_c_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): player_c_info;

    /**
     * Decodes a player_c_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns player_c_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): player_c_info;

    /**
     * Verifies a player_c_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a player_c_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns player_c_info
     */
    public static fromObject(object: { [k: string]: any }): player_c_info;

    /**
     * Creates a plain object from a player_c_info message. Also converts values to other types if specified.
     * @param message player_c_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: player_c_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this player_c_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a player_s_info. */
export interface Iplayer_s_info {

    /** player_s_info id */
    id?: (number|null);

    /** player_s_info name */
    name?: (string|null);
}

/** Represents a player_s_info. */
export class player_s_info implements Iplayer_s_info {

    /**
     * Constructs a new player_s_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iplayer_s_info);

    /** player_s_info id. */
    public id: number;

    /** player_s_info name. */
    public name: string;

    /**
     * Creates a new player_s_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns player_s_info instance
     */
    public static create(properties?: Iplayer_s_info): player_s_info;

    /**
     * Encodes the specified player_s_info message. Does not implicitly {@link player_s_info.verify|verify} messages.
     * @param message player_s_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iplayer_s_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified player_s_info message, length delimited. Does not implicitly {@link player_s_info.verify|verify} messages.
     * @param message player_s_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iplayer_s_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a player_s_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns player_s_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): player_s_info;

    /**
     * Decodes a player_s_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns player_s_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): player_s_info;

    /**
     * Verifies a player_s_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a player_s_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns player_s_info
     */
    public static fromObject(object: { [k: string]: any }): player_s_info;

    /**
     * Creates a plain object from a player_s_info message. Also converts values to other types if specified.
     * @param message player_s_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: player_s_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this player_s_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
