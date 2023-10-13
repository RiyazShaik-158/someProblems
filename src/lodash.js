const http = require('http');

const server = http.createServer();


// console.log('server :',server)/

// console.log('app :',app);

// server.)

server.listen(8000,()=>{
    console.log('app is live on 8000')
})

// server.listen(8000,()=>{
//     console.log("app is live on 8000");
// })