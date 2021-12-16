// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const drones = [
    {
        name: "General Atomics MQ-9 Reaper",
        propellers: 4,
        maxSpeed: 18,
    },
    {
        name: "General whatever",
        propellers: 6,
        maxSpeed: 20,
    },
    {
        name: "Atomics thing",
        propellers: 8,
        maxSpeed: 30,
    }
];


const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

/* mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  }); */


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    return Drone.deleteMany();
}).then(() => {
    console.log(`Deleted all the drones`);
}).then(() => {
    return Drone.create(drones)
}).then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
}).then(() => {
    mongoose.connection.close();
}).catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));