[![npm version](https://badge.fury.io/js/json-schema-preset.svg)](https://badge.fury.io/js/json-schema-preset)

# json-schema-preset

Produce a suitable default template / preset based on a [JSON-Schema](https://json-schema.org), e.g. for pre-filling a form.

It is in the spirit of [json-schema-empty](https://www.npmjs.com/package/json-schema-empty).
json-schema-empty is different in that it closely observes the `required` properties and only adds required values.

json-schema-preset on the other hand copies default values not caring if they are required or not. It also ensures that no string properties are `null` but preset with an empty string (`""`). Arrays without defaults are replaced by `[]`.

You can generate a preset for a form etc. like this:

```js
import { jsonPreset } from 'json-schema-preset';

const preset = jsonPreset(schema);
```

If you want to ensure that an existing object has all missing properties filled in by `jsonPreset()` give it as a second parameter:

```js
import { jsonPreset } from 'json-schema-preset';

const dataWithPreset = jsonPreset(schema, { data: 'foobar' });
```

# See also

- [json-schema-empty](https://github.com/romeovs/json-schema-empty)
- [json-schema-default](https://www.npmjs.com/package/json-schema-default)
- [json-schema-empty-strings](https://www.npmjs.com/package/json-schema-empty-strings/)
- [json-schema-empty-arrays](https://www.npmjs.com/package/json-schema-empty-arrays/)
- [AJV](https://ajv.js.org/guide/modifying-data.html#assigning-defaults)
