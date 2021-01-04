// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import { IMessage } from "../models/IMessage";
import { ReadStream } from "../utils/readStream";
import { WriteStream } from "../utils/writeStream";
import { BYTE_SIZE, MESSAGE_ID_LENGTH, UINT64_SIZE } from "./common";
import { deserializePayload, MIN_PAYLOAD_LENGTH, serializePayload } from "./payload";

const MIN_MESSAGE_LENGTH: number = UINT64_SIZE +
    BYTE_SIZE +
    (2 * MESSAGE_ID_LENGTH) +
    MIN_PAYLOAD_LENGTH +
    UINT64_SIZE;

/**
 * The maximum length of a message.
 */
export const MAX_MESSAGE_LENGTH: number = 32768;

/**
 * Deserialize the message from binary.
 * @param readStream The message to deserialize.
 * @returns The deserialized message.
 */
export function deserializeMessage(readStream: ReadStream): IMessage {
    if (!readStream.hasRemaining(MIN_MESSAGE_LENGTH)) {
        throw new Error(`Message data is ${readStream.length()
            } in length which is less than the minimimum size required of ${MIN_MESSAGE_LENGTH}`);
    }

    const networkId = readStream.readUInt64("message.networkId");

    const numParents = readStream.readByte("message.numParents");
    const parents: string[] = [];

    for (let i = 0; i < numParents; i++) {
        const parentMessageId = readStream.readFixedHex("message.parentMessageId", MESSAGE_ID_LENGTH);
        parents.push(parentMessageId);
    }

    const payload = deserializePayload(readStream);

    const nonce = readStream.readUInt64("message.nonce");

    const unused = readStream.unused();
    if (unused !== 0) {
        throw new Error(`Message data length ${readStream.length()} has unused data ${unused}`);
    }

    return {
        networkId: networkId.toString(10),
        parents,
        payload,
        nonce: nonce.toString(10)
    };
}

/**
 * Serialize the message essence to binary.
 * @param writeStream The stream to write the data to.
 * @param object The object to serialize.
 */
export function serializeMessage(writeStream: WriteStream, object: IMessage): void {
    writeStream.writeUInt64("message.networkId", BigInt(object.networkId ?? 0));

    const numParents = object.parents?.length ?? 0;
    writeStream.writeByte("message.numParents", numParents);

    if (object.parents) {
        for (let i = 0; i < numParents; i++) {
            writeStream.writeFixedHex(`message.parentMessageId${i + 1}`,
                MESSAGE_ID_LENGTH, object.parents[i]);
        }
    }

    serializePayload(writeStream, object.payload);

    writeStream.writeUInt64("message.nonce", BigInt(object.nonce ?? 0));
}
