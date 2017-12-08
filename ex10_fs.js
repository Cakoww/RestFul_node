
//importacao do modulo nativo node, fileSystem [módulo de manipulação de arquivos]
const fs = require('fs')

const files = fs.readdirSync(__dirname)

files.forEach(f => console.log(f))