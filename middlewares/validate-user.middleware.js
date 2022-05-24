'use strict'

const { User } = require('../models')

async function validateUser(req, res, next) {
    const token = req.headers.authorization;
    let error = null;

    if (!token) {
        error = 'Token not provided';
    } else {
        const user = await User.findOne({ where: { token } });
        if (!user) {
            error = 'Invalid token';
        } else {
            req.currentUser = user;
        }
    }

    if (error) {
        res.status(401).send(error);
    } else {
        next();
    }
}

module.exports = validateUser;
