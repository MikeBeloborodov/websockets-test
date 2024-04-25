const WebSocket = require("ws");

const wsServer = new WebSocket.Server({ port: 9000 });

wsServer.on("connection", (wsClient) => {
  console.log("New user");
  console.log(wsClient);
  wsClient.send("Hello!");
  wsClient.on("message", (message) => {
    console.log(message);
  });
  wsClient.on("close", () => {
    console.log("User logout");
  });
});
