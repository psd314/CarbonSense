const router = require('express').Router();
const db = require('../models');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

//route to display all the challenges in the database (if we need this)
router.route('/challenges')
    .get((req, res) => {
        console.log("this is a test");
        db.Challenge
            .find()
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))

    })

//route to add new User to the database
router.route('/newuser')
    .post((req, res) => {
        db.User
            .create(req.body)
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    })

//route to add daily points to the user's profile
//still need to work on how the points will be added and specified by date - - I may need some help here!
router.route('/addpoints/:id')
    .post((req, res) => {
        db.User
            .findOneAndUpdate({
                _id: req.params.id
            }, {
                $set: {
                    dailyPoints: req.params.dailyPoints
                }
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to select and display the daily challenge for push notifications (?)
router.route('/challenge/:id')
    .get((req, res) => {
        db.Challenge
            .findById({
                _id: req.params.id
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });


//route to display streak of successful days (days below the target daily carbonPoints)
router.route('/profile/:id')
    .get((req, res) => {
        db.User
            //do we need to specifically find the points? or just grab it from the results? **************************************************
            .findById({
                _id: req.params.id
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to display leaderboard 
router.route('/leaderboard')
    .get((req, res) => {
        db.User
            .find()
            .sort({
                totalScore: 1
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });



//the following is to be added if we have time
//route to follow specific users (save these users to friends database)
//route to display only saved users to the leaderboard

// verify login info
router.route('/login')
    .post((req, res) => {
        const username = req.body.username;
        //will need to hash and salt for production, bcrypt???
        const password = req.body.password;

        console.log('dir', __dirname);
        res.json("login route worked");
    });

router.route('/subscriptions')
    .get((req, res) => {
        console.log(req.body);
    })
    .post((req, res) => {
        console.log(req.body.endpoint);

        db.Subscriptions
            .findOneAndUpdate(
                req.body, {
                    new: true
                }, {
                    upsert: true
                },
                function(error, doc) {
                    res.json("success");
                });
    });

module.exports = router;