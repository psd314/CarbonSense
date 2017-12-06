const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const db = require('../models');

module.exports = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if (token) {

        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    error: 'Failed to authenticate'
                });
            } else {
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