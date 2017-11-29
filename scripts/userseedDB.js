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
      birthday: "1/1/1999",
      gender: "undefined",
      location: "under the sea", 
      successStreak: 5,
      challengeScore: 18
  }, 
  {
    name: "Philly",
    password: "jujitsu",
    birthday: "3/15/1980",
    gender: "male",
    location: "Raleigh, NC",
    successStreak: 4 ,
    challengeScore: 28
  }, 
  {
      name: "Julianne",
      password: "ilovepecans", 
      birthday: "1/18/1987",
      gender: "female", 
      location: "Raleigh, NC",
      successStreak: 6,
      challengeScore: 15
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
