'use strict'

const { WorkTime, sequelize } = require('../models')

async function index(req, res) {
    const worktime = await Worktime.findAll()
    res.status(200).send(tasks)
}

async function create(req, res) {
    const t = await sequelize.transaction();
    try {

        const { taskId, userId, startedAt, endAt } = req.body;
        const totalTime = Math.abs(Date.parse(endAt) - Date.parse(startedAt)) / 36e5;
        await WorkTime.create({
            taskId,
            userId,
            startedAt,
            endAt,
            totalTime,
        }, { transaction: t });
        await t.commit();
        res.status(200).send();

    } catch (error) {
        await t.rollback();
    }
}

module.exports = {
    index,
    create
}