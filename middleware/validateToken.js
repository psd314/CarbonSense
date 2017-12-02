import jwt from 'jsonwebtoken';
import config from '../config/config.js';
const db = require('../models');

export default (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            console.log('decoded:', decoded);
            if (err) {
                res.status(401).json({
                    error: 'Failed to authenticate'
                });
            } else {
                // query db for user
                // if no user then respond with 404
                db.User.find({
                        name: decoded.name
                    })
                    .then(res => {
                        if (!res) {
                            res.status(404).json({
                                error: 'No such user'
                            });
                        } else {
                            req.currentUser = res[0].name;
                            next();
                        }
                    });
            }
        });
    } else {
        res.status(403).json({
            error: 'No token provided'
        });
    }
}