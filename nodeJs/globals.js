// const EventEmitter= require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on('response', ()=>{
//     console.log('data received')
// })

// customEmitter.on('response', ()=>{
//     console.log('data received')
// })

// customEmitter.on('r2', ()=>{
//     console.log('data received')
// })

// customEmitter.emit('response')

const {createReadStream, createWriteStream}= require('fs')

const stream = createReadStream('./content/first.txt')
const writeStream= createWriteStream('./content/new.txt')

stream.on('data',(result)=>{
    console.log(`Data: ${result}`)  
})