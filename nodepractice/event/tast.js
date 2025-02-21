const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("user-login", (name) => {
  console.log(`${name} is logged in`);
});

emitter.on("user-purchase", (name, product) => {
  console.log(`${name} is purchase ${product}`);
});

emitter.on("profile-update", (name) => {
  console.log(`${name}`);
});

emitter.on("user-logout", (name) => {
  console.log(name);
});

emitter.emit("user-login", "Ram Kumar");
emitter.emit("user-purchase", "Ram Maniyari", "Lapton");
emitter.emit("profile-update", "Ram updated");
emitter.emit("user-logout", "Ram is logged out");
