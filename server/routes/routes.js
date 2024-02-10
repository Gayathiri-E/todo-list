const express = require('express');
const router = express.Router();
const Task = require('../models/models');

router.get('/', async (req, res) => {
    try {
        const docs = await Task.find();
        res.json(docs);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

