const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter)

const exemplo = new Character('Exemplo Resposta')
exemplo.on('help', () => console.log(`${exemplo.name}`))

console.log('Exemplo pergunta')
exemplo.emit('help')



/* 
const ev = new EventEmitter()
console.log(ev)
//  on = sempre
ev.once('SaySomething', (message) =>{
    console.log('Eu ouvi você', message)
})

ev.emit('SaySomething', 'Caetano')
ev.emit('SaySomething', 'Andreia') */