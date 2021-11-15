const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.querySelector(id="log-window");
connection.onopen = () => {
    connection.send("Hello from client!")
}
connection.onmessage = (event) => {
    logWindow.innerHTML = event.data
}