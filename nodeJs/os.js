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

//method returns the system update


console.log(`the sytem uptime is${os.uptime()} seconds`)

const currentOS={
    name: os.type(),
    platform : os.platform(),
    architechture: os.arch(),
    release: os.release,
    totalmem: os.totalmem()/1024/1024 +'MB', //in MB
    cpuspeed: (os.cpus()[0].speed)/1024+' MHz'

}

console.log(currentOS)