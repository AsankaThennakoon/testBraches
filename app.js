
const EventEmitter = require('events');

const emiter=new EventEmitter();





emiter.on('Logginer',(arg)=>{
    console.log(arg);
})


// this is the edite on the first branch



emiter.emit('Logginer',{id:1});