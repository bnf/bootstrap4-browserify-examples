# Full
## Advantages

 * simple configuration in package.json
 * semi-simple embedding in index.js, you "just" need to remember to assign jQuery and Popper to global variables
 * No babel transpiler required
   * => fast build

## Disadvantages

 * Full bootstrap.js, you probably don't need everything => overhead
 * global jQuery and Popper.js exposed as globals (window.jQuery, window.Popper) required
