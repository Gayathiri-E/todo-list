

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todolist';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DB connection established');
    })
    .catch((err) => {
        console.error(`Error in DB connection: ${err}`);
    });

module.exports = mongoose;
