// a função require(maneira de chamar(usar) módulos nativos ou criados por nós mesmo) precisa ter um argumento:
// console.log(require('path'))

// colocar o path num objeto: MÓDULOS NATIVOS DO NODE:
// const path = require('path')

// console.log(path.basename(__filename))

// console.log(path.basename('/Users/starter/docs.js'))

// MEUS MÓDULOS:
const myModule = require('./exports.js')
console.log(myModule)
