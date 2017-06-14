# Babel with patched Bootstrap
## Advantages

 * automatic dependency resolution as defined in package.json
 * no globals are required or exposed
 * supports using only those modules that you need (smaller builds)
 * your source is hack-free.
   (well maybe the include syntax could be nicer, but that's not really a hack but a common nodejs thing)

## Disadvantages

 * bootstrap needs to be [patched](https://github.com/bnf/bootstrap/tree/v4-dev-browserify-v2)
   (in a way that's currently not mergeable as it breaks other usecases)
 * babel transpiler required
   * => not that fast build (but it's ok, as only bootstrap is babelified)
 * A bit clumsy include syntax, as we have to define the full path, e.g. `require('bootstrap/js/src/carousel')`
