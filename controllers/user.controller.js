'use strict'

const { User, sequelize } = require('../models')

async function index(req, res) {
    const users = await User.findAll({
    })
    res.status(200).send(users)
}

async function show(req, res) {
    const id = req.params.id;

    const user = await User.findOne({
        where: { id } = id,
    })
    res.status(200).send(user);
}

async function create(req, res) {
    const t = await sequelize.transaction();
    try {
        const { firstName, lastName, admin, email, password, token } = req.body;
        await User.create({
            firstName,
            lastName,
            admin,
            email,
            password,
            token
        }, { transaction: t });
        await t.commit();
        res.status(200).send();

    } catch (error) {
        console.log('This is the error: ' + error);
        await t.rollback();
    }
}

async function getCurrentUser(req, res) {
    res.status(200).send(req.currentUser);
}

module.exports = {
    index,
    show,
    create,
    getCurrentUser
}