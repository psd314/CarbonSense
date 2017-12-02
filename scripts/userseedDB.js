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
      image: "https://2.bp.blogspot.com/-CPKJ_gdJFt0/Vz2_AgSXrgI/AAAAAAAAGQU/7t8ipb6KLyQ3CBohP1ysNslycP51Mb62ACKgB/s1600/SpongeBob_5.png",
      gaugeTarget: 100,      
      successStreak: 5,
      challengeScore: 18
  }, 
  {
    name: "Philly",
    password: "jujitsu",
    birthday: "3/15/1980",
    gender: "male",
    location: "Raleigh, NC",
    image: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1jdbpa8_be64ca1b.png?region=0%2C0%2C600%2C565", 
    gaugeTarget: 100,    
    successStreak: 4 ,
    challengeScore: 28
  }, 
  {
      name: "Julianne",
      password: "ilovepecans", 
      birthday: "1/18/1987",
      gender: "female", 
      location: "Raleigh, NC",
      image: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/18216422_1960543210842462_7285967195853793702_o.jpg?oh=888b5540a18613585b435788380400c6&oe=5A8DD4DD",
      gaugeTarget: 100,
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
