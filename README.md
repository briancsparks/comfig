# Comfig

Super easy development-time config management for apps/mods.

## How To

Just ask for a config item, and `comfig` will look high and low for it, following
consistent rules.

```javascript
const Comfig = require('@inim:comfig');

const cfg = Comfig('FOOBAR', 'FOO');                // The name of your app/lib

let wooden = cfg.getItem('USE_WOODEN_BAT');         // Reads env.FOOBAR_USE_WOODEN_BAT, or --use-wooden-bat; gets the string "true"
wooden = cfg.getItem('USE_WOODEN_BAT', false);      // Reads env.FOOBAR_USE_WOODEN_BAT, or --use-wooden-bat; gets the boolean true

wooden = cfg.smartGetItem('USE_WOODEN_BAT');        // Auto-parses into Number, Boolean, Date, JSON (so an Object), or String

let aluminum = cfg.getItem('USE_AL_BAT');           // Not found anywhere: aluminum is undefined
```

Remember that all of the places that Comfig could look at when fetching the configuration items
will return a string: CLI args are all strings until parsed, same for env.XYZ. But when you
pass in a default value, the function knows the type and will parse it into that type. This works
only with non-compound (builtin) types: Number, String, Boolean.

## Future

TBD: Will follow 12 principles when not `ACTIVE_DEVELOPMENT`.

