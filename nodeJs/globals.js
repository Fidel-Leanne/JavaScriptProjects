const EventEmitter= require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log('data received')
})

customEmitter.on('response', ()=>{
    console.log('data received')
})

customEmitter.on('r2', ()=>{
    console.log('data received')
})

customEmitter.emit('response')