# Shimmed
## Advantages

 * semi-automatic dependency resolution as defined in package.json
 * No babel transpiler required
   * => fast build
 * supports using only those modules that you need (smaller builds)

## Disadvantages

 * requires to reflect bootstrap internal dependencies in package.json
 * global jQuery and Popper.js required
 * bootstrap/util and bootstrap/tooltip are exposed as window.Util and window.Tooltip
