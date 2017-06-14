# Babel
## Advantages

 * semi-automatic dependency resolution: bootstrap's util.js will be automatically included
 * one-line configuration in [package.json](./package.json) (compared to [shimmed/package.json](../shimmed/package.json))
 * supports using only those modules that you need (smaller builds)

## Disadvantages

 * requires to manually include bootstrap dependencies jQuery and Popper.js to be mapped to globals in [./bootstrap-custom.js](./bootstrap-custom.js)
   * => global jQuery and Popper.js required
 * requires to disable babelrc usage (as bootstrap .babelrc is intended for their build where import statements are simply dropped)
 * requires to run babelify as global transform (as bootstrap doesn't define what 
 * a bit clumsy include syntax, as we have to define the full path, e.g. `require('bootstrap/js/src/carousel')`
 * babel transpiler required
   * => slow build as we have to apply it as a global transform (so it runs over jquery as well)
