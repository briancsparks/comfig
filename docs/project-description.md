 # Overview

When developing (in `ACTIVE_DEVELOPMENT`), having to look high and low for config/arguments/etc
is time consuming without providing value.

## What

Just `comfig.getItem("MYLIB_CONFIG_ITEM_NAME")`, and comfig will look in the following places,
doing the expected defaulting and precedencing:
- Look in the system-wide config area. TBD
- Look in the user's config area, as appropriate:
  - XDG
  - %AppData%
  - Etc
- For "project" dirs (that have a `.git`, or similar):
  - .mylib.json / .mylib.yml;yaml
  - .mylib/mylib.json, .mylib/mylib.yml;yaml
  - Other similar, well-known spellings
- For non-project dirs:
  - the user will provide a resolution mechanism.

### If Nothing Else

If the item is not found anywhere:
- The ability to provide a default.
- Ask the user at run-time?

## Future

Imagine things like:
- looking into the Windows Registry
- looking at DBs/Redis could also make sense.
 
