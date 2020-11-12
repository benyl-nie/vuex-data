require("babel-register")
require("babel-polyfill")
var { vuexPersistence } = require("./app")

// module.exports = { vuexPersistence }

const test = new vuexPersistence({});
test.setKey({type:'LS', moduledName: 'testModuled', key: 'test', value: '123'});
test.getKey({type: 'LS', moduledName: 'testModuled', key: 'test'});
// console.log('1' , vuexPersistence);