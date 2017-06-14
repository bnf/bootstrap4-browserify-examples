# bootstrap4-browserify-examples

Examples of how to browserify bootstrap v4:

 * [babel](babel/README.md) using babel and the upstream js sources (bootstrap/js/src/*.js)
 * [shimmed](shimmed/README.md) using the upstream generated non-es2015 modules
   (bootstrap/js/dist/*.js) and browserify-shim to control depnendencies
 * [full](full/README.md) using the upstream generated bundle (bootsrap/dist/bootstrap.js)
 
 * [babel-patched][babel-patched/README.md) using babel and a patched upstream (bootstrap/js/src/*.js) where
   * a) non babel-rc hacks are required and where
   * b) bootstrap automatically specifies "babelify" as browserify transform and where
   * c) the source files have their dependencies to jQuery and Popper.js expressed as proper ES2016 includes.
