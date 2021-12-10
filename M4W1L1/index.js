const { readTasks, addTask, completeTask } = require("./dbHandlers");
const http = require("http");

const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/todo/create" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      const parsedData = JSON.parse(data);

      addTask(parsedData.text);
      res.end();
    });
  }
});

server.listen(3000, hostname, () => {
  console.log(`Server is running on port http://${hostname}:3000`);
});
