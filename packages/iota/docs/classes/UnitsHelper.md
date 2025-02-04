# Class: UnitsHelper

Class to help with units formatting.

## Table of contents

### Properties

- [UNIT\_MAP](UnitsHelper.md#unit_map)

### Methods

- [formatBest](UnitsHelper.md#formatbest)
- [formatUnits](UnitsHelper.md#formatunits)
- [calculateBest](UnitsHelper.md#calculatebest)
- [convertUnits](UnitsHelper.md#convertunits)

### Constructors

- [constructor](UnitsHelper.md#constructor)

## Properties

### UNIT\_MAP

▪ `Static` `Readonly` **UNIT\_MAP**: `Object`

Map units.

## Methods

### formatBest

▸ `Static` **formatBest**(`value`, `decimalPlaces?`): `string`

Format the value in the best units.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | The value to format. |
| `decimalPlaces` | `number` | `2` | The number of decimal places to display. |

#### Returns

`string`

The formated value.

___

### formatUnits

▸ `Static` **formatUnits**(`value`, `unit`, `decimalPlaces?`): `string`

Format the value in the best units.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | The value to format. |
| `unit` | [`Units`](../api.md#units) | `undefined` | The unit to format with. |
| `decimalPlaces` | `number` | `2` | The number of decimal places to display. |

#### Returns

`string`

The formated value.

___

### calculateBest

▸ `Static` **calculateBest**(`value`): [`Units`](../api.md#units)

Format the value in the best units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value to format. |

#### Returns

[`Units`](../api.md#units)

The best units for the value.

___

### convertUnits

▸ `Static` **convertUnits**(`value`, `fromUnit`, `toUnit`): `number`

Convert the value to different units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value to convert. |
| `fromUnit` | [`Units`](../api.md#units) | The form unit. |
| `toUnit` | [`Units`](../api.md#units) | The to unit. |

#### Returns

`number`

The formatted unit.

## Constructors

### constructor

• **new UnitsHelper**()
