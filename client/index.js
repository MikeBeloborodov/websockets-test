const url = "ws://178.208.81.203:9000";
const websocket = new WebSocket(url);

websocket.addEventListener("open", () => {
  websocket.send({
    message: "Hello server!",
    data: ["1", "2", "3", "4"],
    raw: { name: "alex" },
  });
});
