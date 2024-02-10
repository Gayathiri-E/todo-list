const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    todo: String,
    isComplete: Boolean,
});

const Task = mongoose.model('Task', TaskSchema); // Use singular for the model name

module.exports = Task;


