//Learnings the first Modules like OS and Path, understanding what is native, external and internal modules.
//Learning About ESM Modules and CommonJS to import and export modules.


const os = require('os')
const path = require("path")
const { add, subtract, multiply, divide } = require("./math") //importando componentes de /math.js

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

console.log("Hellow World!")

console.log(2 + 2)

/* 
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)


console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

function toGB(bytes) {
    return (bytes / 1024 / 1024).toFixed(2);
}

console.log(path.parse(__filename))

*/
