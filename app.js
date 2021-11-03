
const EventEmitter = require('events');

const emiter=new EventEmitter();





emiter.on('Logginer',(arg)=>{
    console.log(arg);
})






emiter.emit('Logginer',{id:1});