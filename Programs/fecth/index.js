const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/add") {
        fs.readFile(`${__dirname}/fetch/api.json`, "utf-8", (error, data) => {
            if (error) {
                console.error(error);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(data);
                console.log("Data sent:", data);
            }
        });
    }
});

server.listen(9000, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:9000/");
});
