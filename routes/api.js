const router = require('express').Router();
const db = require('../models');

//path to get the daily activities and post them to the page ?
router.route('/fetch')
    .get((req, res) => {
        db.Challenges
            .find()
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    }); 

//route to add daily points to the user's profile
router.route('/updatescore') 
    .post((req, res) => {
        db.User
            .findOneAndUpdate({_id: req.params.id}, {$set: {score: req.params.score}})
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to select and display the daily challenge
router.route('/challenge') 
    .get((req, res) => {
        db.User
            .findById()
    });

//route to display leaderboard 
router.route('/leaderboard')
    .get((req, res) => {
        db.User
            .find()
            .sort({ score: -1 })
            .then(resultes => res.json(results))
    });

router.route('/subscriptions')
    .post((req, res) => {
        console.log(req.body);
    });
//route to 

module.exports = router;
