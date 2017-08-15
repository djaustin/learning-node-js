
// Node js will look to see if anything in our node_modules directory matches this import, we do not need to specify a file path
// To install this module we used 'npm init' to initialise our own package
// We then used 'npm install moment --save'. The save flag adds moment as a dependency of our package and saves that info in package.json
// 'npm install' will install all missing dependencies in a package
const moment = require('moment');
console.log(moment().format());

// --- DEV DEPENDENCIES ---
// When I have development dependencies, things I use during development and are not required for the app to run, we can specify these seperately
// This adds the module to our node_modules folder and adds an entry to our package.json under 'devDependencies'
// npm install <package_name> --save-dev

// --- GLOBAL DEPENDENCIES ---
// Global dependencies allow us to install a module so that npm and node can access it from anywhere on the PC and from any app.
// It does not put the modules in the node_modules folder in the directory of this app
// In this particular case, the module was installed in  C:\Users\Dan\AppData\Roaming\npm\node_modules\
// npm install <package_name> -g

// --- NPM UPDATE ---
// Updates any dependecies with newer versions where we have allowed updates to be used:
// '^' before a version number in package.json means update the dependency with any minor or patch updates (1.2.1 = major.minor.patch)
// '~' before a version number in package.json means update the dependency with any patch updates
