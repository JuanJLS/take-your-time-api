'use strict'

const { User } = require('../models')

async function login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
        where: {
            email, password
        }
    })

    if (email && password && user) {
        res.status(200).json({token: user.token, user})
    } else {
        res.status(401).send()
    }
}

module.exports = {
    login
}
