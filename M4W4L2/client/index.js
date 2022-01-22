const socket = io("http://localhost:3333");
let userName;

socket.on("connection", (socket) => {
  console.log("Socket id: ", socket.id);
});

socket.on("message", ({ message, userName }) => {
  messageList.innerHTML += `<li>${userName}: ${message}</li>`;
});

const messageForm = document.querySelector(".message-form");
const nameForm = document.querySelector(".name-form");
const messageList = document.querySelector(".message-list");
const userNameEl = document.querySelector(".user-name");

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formEl = event.target;
  const input = formEl.querySelector("input");
  userName = input.value;
  userNameEl.innerHTML = `Hello, <span>${input.value}</span>`;

  nameForm.remove();
});

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formEl = event.target;
  const input = formEl.querySelector("input");

  socket.emit("message", { message: input.value, userName: userName });
  input.value = "";
});
