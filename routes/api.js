import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import authenticate from '../middleware/validateToken.js';
import moment from 'moment';
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
    .put(authenticate,(req, res) => {
        db.User
            .findOneAndUpdate({
                name: req.currentUser
            }, {
                $set: {
                    gaugeTarget: req.body.gaugeTarget
                }
            }, {
                new: true 
            } )
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

// moment.js check today's date
// check db for score for today's date
// if date exists, return score
// if date doesn't exist, create new entry and return score

//route to add daily points to the user's profile
router.route('/addpoints')
    .post((req, res) => {
        const now = moment().format('MM-DD-YYYY'); 
        console.log(now);
        console.log(req.body);
        const currentUser = 'jtgonski@gmail.com'; 

        // const newDailyScore = new DailyScore(req.body);

        // newDailyScore.save((error, doc) => {
        //     if (error) {
        //         res.send(error);
        //     } else {
        //         db.User.findOneAndUpdate({
        //             name: currentUser
        //         }, {
        //             $push: {
        //                 "dailyScores": doc._id
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
        // })

        res.json({
            success: true
        });
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
        console.log(req.body);
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

// prototype route for validating user on all routes
// attached to Temp Btn
router.route('/token/:id')
    .get(authenticate, (req, res) => {

        res.status(201).json({
            success: true
        });
    })
    .post((req, res) => {
        console.log(req.body);
    });

module.exports = router;

// login message errors

// moment.js check today's date
// check db for score for today's date
// if date exists, return score
// if date doesn't exist, create new entry and return score