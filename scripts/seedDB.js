const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Challenge collection and inserts the challenges below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/carbonsensedb",
  {
    useMongoClient: true
  }
);

const challengeSeed = [
  {
      title: "Get a reusable water bottle and drink only from it all day."
  }, 
  {
      title: "Take a cold shower instead of a hot shower today, or skip the shower altogether."
  },
  {
      title: "Hand-wash all dishes instead of using the dishwasher"
  },
  {
      title: "If it’s yellow let it mellow"
  },
  {
      title: "Locate a place where you can go to refill your soap bottles and cleaning products. If you need any refills, get them now, or make a plan to go there when you need more soap."
  },
  {
      title: "Make a compost in your yard or sign up for a composting service in your area. Learn about what is and is not compostable!"
  },
  {
      title: "Purchase clothing second hand"
  }, 
  {
      title: "Transfer dried pantry items to reusable containers and locate where to refill them from bulk bins."
  },
  {
      title: "Take a reusable coffee cup to get your coffee or tea"
  }, 
  {
      title: "Ride a bike to work and take a picture to post to social media with a caption about what you are doing and why"
  },
  {
      title: "Plan your next vacation taking a bus or train instead of driving or flying"
  }, 
  {
      title: "Make the switch to cloth napkins and towels and commit to not using paper towels and paper napkins in the future"
  }, 
  {
      title: "Find an alternative to plastic wrap and plastic bags for packing lunches and storing food"
  }, 
  {
      title: "If you drink tea, use loose-leaf instead of tea bags"
  }, 
  {
      title: "Use a reusable k-cup in your keurig coffee machine"
  }, 
  {
      title: "Don’t use any straws or bring your own reusable/washable straw"
  }, 
  {
      title: "Convince a friend to do yesterday’s challenge"
  }, 
  {
      title: "Entertain yourself in only non-electronic ways"
  },
  {
      title: "Go to bed by 10pm"
  }, 
  {
      title: "Use less than 4 squares of toilet papter for each use"
  }, 
  {
      title: "Wear your glasses instead of dailies contacts"
  }
];

db.Challenge
  .remove({})
  .then(() => db.Challenge.collection.insertMany(challengeSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
