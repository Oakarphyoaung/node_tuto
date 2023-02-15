const fs = require ("fs");
const http = require ("http");
const port = 3000;

const server = http.createServer((req,res)=>{
    const method = request.method;
})
server.listen(3000,()=>{
    console.log(`Server is listen in port${port}`);
})