/*
 * json-schema-preset.ts
 *
 * Created by Dr. Maximillian Dornseif 2021-12-20 in huwawi3backend 11.12.1
 * Copyright (c) 2021 Dr. Maximillian Dornseif
 */

import { JSONSchema7 } from 'json-schema'
import { jsonDefault } from 'json-schema-default'
import { jsonEmptyArrays } from 'json-schema-empty-arrays'
import { jsonEmptyStrings } from 'json-schema-empty-strings'
import merge from 'lodash.merge'

export function jsonPreset(schema: JSONSchema7, inputData = {}) {
  return merge({}, jsonEmptyArrays(schema), jsonEmptyStrings(schema), jsonDefault(schema), inputData)
}
