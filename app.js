// npm - global command comes with node
// npm --version

// local dependency -use it in a project
// npm i <package name>

// global dependency - use in a ny proj
// npm install -g <package name>

// package.json - mainfest file
// manual approach (create in root)
// npm init (w/ questions)
// npm init -y (default everything)

const _ = require('lodash');

const items = [1, [2, 3]];
const newItems = _.flattenDeep(items);

console.log(newItems);