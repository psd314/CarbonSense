const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/carbonsensedb",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
      name: "Bob Sponge",
      password: "underTheSea",
      gender: "undefined",
      location: "under the sea", 
  }, 
  {
    name: "Philly",
    password: "jujitsu",
    gender: "furry",
    location: "Raleigh, NC", 
  }, 
  {
      name: "Julianne",
      password: "ilovepecans", 
      gender: "trans", 
      location: "Raleigh, NC"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
