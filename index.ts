import * as ws from "ws";

const wsServer = new ws.Server({ port: 9000 });

type TMessage = {
  name: string;
  message: string;
};

wsServer.on("connection", (wsClient) => {
  console.log("New user");
  wsClient.send(JSON.stringify({ message: "Connected", name: "Admin" }));

  wsClient.on("message", (message: string) => {
    const msg: TMessage = JSON.parse(message);

    console.log(msg);

    wsServer.clients.forEach((client) => {
      client.send(JSON.stringify(message));
    });
  });

  wsClient.on("close", () => {
    console.log("User logout");
  });
});

console.log("Server is working on port 9000");
