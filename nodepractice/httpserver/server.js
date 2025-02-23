const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to home page  </h1>");
    res.end();
  }

  if (req.url === "/product") {
    res.setHeader("Content-Type", "text/plain");
    res.write(
      "Hello guys this is product page here, you can buy any product from here "
    );
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
