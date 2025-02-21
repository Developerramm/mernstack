const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("greet", () => {
//   console.log("Ram Kumar");
// });

// emitter.emit("greet");

// greet();

// emitter.on("greet", (name,developer) => {
//   console.log(name);
//   console.log(developer);
// });

// emitter.emit("greet", "Ram Kumar Maniyari","full stack developer");

let personalDetail = {
  name: "Ram kumar",
  age: 27,
  city: "Noida",
  address: {
    colony: "magantu",
    sector: 101,
    location: "In Front of sector 83, a metro station",
  },
};

emitter.on("greet", (args) => {
  console.log(args);
  console.log(args.name);
  console.log(args.address);
});

emitter.emit("greet", personalDetail);
