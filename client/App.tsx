export const App = () => {
  const url = `ws://${process.env.URL}`;

  function connectToChat() {
    const websocket = new WebSocket(url);
    websocket.addEventListener("open", () => {
      websocket.send(
        JSON.stringify({
          message: "Hello server!",
          data: ["1", "2", "3", "4"],
          raw: { name: "alex" },
        }),
      );
    });
    websocket.addEventListener("message", (message) => {
      console.log(message);
    });
  }

  return (
    <>
      <h1>Welcome to the chat</h1>
      <button onClick={connectToChat}>Start</button>
    </>
  );
};
