const fs = require("fs");
const http = require("http");
const port = 3000;

const users = [
  { name: "Aung AUng", email: "aungaung@email.com", password: "ilovemypeople" },
  { name: "Mya Mya", email: "myamya@gmail.com", password: "3434554" },
  { name: "Aye Aye", email: "ayeaye@gmail.com", password: "34344" },
];

const server = http.createServer((request, res) => {
  const method = request.method;
  const route = request.url;
  if (route === "/") {
    fs.readFile("index.html", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (route === "/script.js") {
    fs.readFile("script.js", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (route === "/users") {
    res.writeHead(200, { "Content-Type": "application/html" });
    res.write(JSON.stringify(users));
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("NOt found |||");
  }
});
server.listen(3000, () => {
  console.log(`Server is listen in port${port}`);
});
