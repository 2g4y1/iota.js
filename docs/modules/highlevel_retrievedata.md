[@iota/iota.js](../README.md) / highLevel/retrieveData

# Module: highLevel/retrieveData

## Table of contents

### Functions

- [retrieveData](highLevel_retrieveData.md#retrievedata)

## Functions

### retrieveData

▸ **retrieveData**(`client`, `messageId`): `Promise`<{} \| `undefined`\>

Retrieve a data message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`IClient`](../interfaces/models_IClient.IClient.md) \| `string` | The client or node endpoint to retrieve the data with. |
| `messageId` | `string` | The message id of the data to get. |

#### Returns

`Promise`<{} \| `undefined`\>

The message index and data.
