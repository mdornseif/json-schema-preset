/**
 * json-schema-preset.test.ts
 *
 * Created by Dr. Maximillian Dornseif 2021-12-20 in json-schema-empty-arrays 1.0.0
 * Copyright (c) 2021 Dr. Maximillian Dornseif
 */

import test from 'ava'
import { JSONSchema7 } from 'json-schema'

import { jsonPreset } from './json-schema-preset'

const schema: JSONSchema7 = {
  $id: 'https://huwawi3.hudora.de/schemata/H3Test',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Test data',
  type: 'object',
  required: ['s1', 'n1'],
  properties: {
    s1: {
      title: 's1',
      type: 'string',
      default: 'foo',
    },
    s2: {
      title: 's2',
      type: 'string',
      default: '',
    },
    s3: {
      title: 's3',
      type: 'string',
    },
    n1: {
      title: 'n1',
      type: 'integer',
    },
    n2: {
      title: 'n2',
      type: 'integer',
    },
    n3: {
      title: 'n3',
      type: 'integer',
      default: 3,
    },
    sub: {
      type: 'array',
      items: {
        title: 'su1',
        type: 'string',
      },
    },
  },
}

test('handles simple schema', (t) => {
  t.deepEqual(jsonPreset(schema), {
    n3: 3,
    s1: 'foo',
    s2: '',
    s3: '',
    sub: [],
  } as unknown)
})
