const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const authenticate = require('../middleware/validateToken.js');
const moment = require('moment');
const router = require('express').Router();
const db = require('../models');
const DailyScore = require('../models/Score.js');
//route to display all the challenges in the database (if we need this)

function validateInput(data) {
    let errors = {};

    if (isEmpty(data.name)) {
        errors.name = 'Email field is required';
    }
    if (!isEmpty(data.name) && !Validator.isEmail(data.name)) {
        errors.name = 'Please enter a valid email address';
    }
    if (isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }
    if (isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Confirm Password field is required';
    }
    if (!isEmpty(data.password) && !isEmpty(data.confirmPassword) && !Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords must match exactly';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

function validateLogin(data) {
    let errors = {};

    if (isEmpty(data.name)) {
        errors.name = 'Email field is required';
    }
    if (!isEmpty(data.name) && !Validator.isEmail(data.name)) {
        errors.name = 'Please enter a valid email address';
    }
    if (isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.route('/challenges')
    .get((req, res) => {

        db.Challenge
            .find()
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))

    });

//route to add new User to the database
router.route('/newuser')
    .post((req, res) => {

        const passwordDigest = bcrypt.hashSync(req.body.password, 10);

        const {
            errors,
            isValid
        } = validateInput(req.body);
        if (isValid) {
            db.User
                .find({
                    name: req.body.name
                })
                .then(user => {
                    if (user.length === 0) {
                        db.User
                            .create({
                                name: req.body.name,
                                password: passwordDigest
                            })
                            .then(resp => res.json(resp))
                    } else {
                        errors.name = "This email is already in use"
                        res.status(400).json(errors);
                    }
                })
                .catch(error => res.status(500).json(err))
        } else {
            res.status(401).json(errors);
        }
    });

//route to get the daily challenge for push notifications (?)
router.route('/user/:id')
    .get(authenticate, (req, res) => {
        db.User
            .find({
                name: req.currentUser
            })
            .then(results => {
                res.json(results)
            })
            .catch(err => res.status(500).json(err))
    })
    .post(authenticate, (req, res) => {
        let updateUser = {};

        for (const prop in req.body) {
            if (req.body[prop] !== '' && prop !== "edit") {
                updateUser[prop] = req.body[prop];
            }
        }

        db.User.findOneAndUpdate({
                    name: req.currentUser
                },
                updateUser, {
                    new: true
                })
            .then((user) => res.json(user));
    });
//
//route to update goal max gauge
router.route('/gaugeTarget')
    .put(authenticate, (req, res) => {
        db.User
            .findOneAndUpdate({
                name: req.currentUser
            }, {
                $set: {
                    gaugeTarget: req.body.gaugeTarget
                }
            }, {
                new: true
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    })

//route to get max gauge number
router.route('/gaugeTarget')
    .get(authenticate, (req, res) => {
        console.log('req.currentUser:', req.currentUser);
        db.User
            .findOne({
                name: req.currentUser
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

router.route('/currentScore')
    .get(authenticate, (req, res) => {
        const now = moment().format('MM-DD-YYYY');
        db.User.findOne({
                name: req.currentUser,
                "dailyScores.date": now
            })
            .then(results => {
                if (results === null) {
                    res.json({
                        score: 0
                    });
                } else {
                    const currentScore = results.dailyScores.find(function(obj) {
                        return obj.date === now;
                    });
                    res.json(currentScore);
                }
            })
            .catch(error => res.status(500).json(error));
    });

//route to add daily points to the user's profile
router.route('/addpoints')
    .post(authenticate, (req, res) => {
        const now = moment().format('MM-DD-YYYY');

        // if date doesn't exist, add new date/score to dailyScores []
        db.User.findOneAndUpdate({
                name: req.currentUser,
                dailyScores: {
                    $not: {
                        '$elemMatch': {
                            'date': now
                        }
                    }
                }
            }, {
                $addToSet: {
                    dailyScores: {
                        date: now,
                        score: req.body.score
                    }
                }
            }, {
                new: true
            })
            .then(results => {
                // if null, date already exists, update score for specific date 
                if (results === null) {
                    db.User.findOneAndUpdate({
                            name: req.currentUser,
                            "dailyScores.date": now
                        }, {
                            $set: {
                                "dailyScores.$.score": req.body.score
                            }
                        }, {
                            new: true
                        })
                        .then(user => {
                            const currentScore = user.dailyScores.find(function(obj) {
                                return obj.date === now;
                            });
                            res.json(currentScore);
                        });
                } else {
                    // if !null, pass new entry back
                    const currentScore = results.dailyScores.find(function(obj) {
                        return obj.date === now;
                    });
                    res.json(currentScore);
                }
            })
            .catch(error => res.json(error));

        // const newDailyScore = new DailyScore({date: now, score: req.body.score});
        // // console.log(newDailyScore);
        // newDailyScore.save((error, doc) => {

        //     if (error) {
        //         res.send(error);
        //     } else {
        //         db.User.findOneAndUpdate({
        //             name: req.currentUser
        //         }, {
        //             $push: {
        //                 "dailyScores": doc
        //             }
        //         }, {
        //             new: true
        //         }, function(err, newdoc) {
        //             if (err) {
        //                 res.send(err);
        //             } else {
        //                 res.send(newdoc);
        //             }
        //         });
        //     }
        // });

        // res.json({
        //     success: true
        // });
    });

//route to get the daily challenge for push notifications (?)
router.route('/challenge/:id')
    .get((req, res) => {
        db.Challenge
            .findById({
                _id: req.params.id
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to get streak of successful days (days below the target daily carbonPoints)
router.route('/successStreak/:id')
    .get((req, res) => {
        db.User
            .findById({
                _id: req.params.id
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to update successStreak 
router.route('/successStreak/:id')
    .put((req, res) => {
        db.User
            .findOneAndUpdate({
                _id: req.params.id
            }, {
                $set: {
                    succssStreak: req.params.successStreak
                }
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to display leaderboard for success streak
router.route('/leaderboard/successstreak')
    .get((req, res) => {
        db.User
            .find()
            .sort({
                successStreak: -1
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    });

//route to display challenges leaderboard
router.route('/leaderboard/challenges')
    .get((req, res) => {
        db.User
            .find()
            .sort({
                challengeScore: 1
            })
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err))
    })

//the following is to be added if we have time
//route to follow specific users (save these users to friends database)
//route to display only saved users to the leaderboard

// verify login info
router.route('/login')
    .post((req, res) => {
        const username = req.body.name;
        const password = req.body.password;
        const {
            errors,
            isValid
        } = validateLogin(req.body);

        if (isValid) {
            db.User
                .find({
                    name: username,
                })
                .then(results => {
                    if (bcrypt.compareSync(password, results[0].password)) {
                        const token = jwt.sign({
                            id: results._id,
                            name: results[0].name
                        }, config.jwtSecret);
                        res.json({
                            token
                        });
                    } else {
                        errors.errors = "Email or password is incorrect";
                        res.status(400).json(errors);
                    }
                })
                .catch(errors => {
                    errors.errors = "Email or password is incorrect";
                    res.status(500).json(errors)
                });
        } else {

            res.status(401).json(errors);
        }
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