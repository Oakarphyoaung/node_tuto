const fs = require("fs");
const http = require("http");
const port = 3000;

const server = http.createServer((request, res) => {
//   const method = request.method;
  const route = request.url;
  if (route === "/") {
    fs.readFile("index.html", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }else if(route ==="script.js"){
    fs.readFile("script.js", (error,data)=>{
        res.writeHead(200, {"Content-Type":"text/javascript"});
        res.write(data);
        return res.end();
    })
  }else{
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.write("NOt of all");
  };

});
server.listen(3000, () => {
  console.log(`Server is listen in port${port}`);
});
