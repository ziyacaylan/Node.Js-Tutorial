const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>WELCOME TO HOME PAGE</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>WELCOME TO ABOUT PAGE</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>WELCOME TO CONTACT PAGE</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>The Page Not Found</h2>");
  }
  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port: ${port} de başlatıldı...`);
});
