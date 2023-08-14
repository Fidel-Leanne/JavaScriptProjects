// modules are encapsulated code
//Every file is a module by default

// const names=require('./names')
// const sayHi= require('./utils')

// console.log(names)

//  sayHi(names.john)
//  sayHi(names.peter)
// sayHi('suzy')

const os = require('os')

//console.log(`Node version ${process.version}`)
//console.log(`${os.platform()}`)

const user =os.userInfo()
console.log(user)