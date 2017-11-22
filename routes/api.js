const router = require('express').Router();
const db = require('../models');

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
router.route('/addpoints/:id') 
    .post((req, res) => {
        db.User
            .findOneAndUpdate({_id: req.params.id}, {$set: {dailyPoints: req.params.dailyPoints}})
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to get the daily challenge for push notifications (?)
router.route('/challenge/:id') 
    .get((req, res) => {
        db.Challenge
            .findById({_id: req.params.id})
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to get streak of successful days (days below the target daily carbonPoints)
router.route('/successStreak/:id')
    .get((req, res) => {
        db.User
            .findById({ _id: req.params.id })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to update successStreak 
router.route('/successStreak/:id')
    .post((req, res) {
        db.User 
            .findOneAndUpdate({_id: req.params.id }, {$set: {succssStreak: req.params.successStreak}})
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to display leaderboard 
router.route('/leaderboard')
    .get((req, res) => {
        db.User
            .find()
            .sort({ successStreak: 1 })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//the following is to be added if we have time
//route to follow specific users (save these users to friends database)
//route to display only saved users to the leaderboard


router.route('/subscriptions')
    .post((req, res) => {
        console.log(req.body.endpoint);

        db.Subscriptions
            .findOneAndUpdate(
                req.body
            , {
                new: true
            }, {
                upsert: true
            }, function(error, doc) {
                res.json("success");
            });
    });

module.exports = router;