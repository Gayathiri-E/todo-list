const express = require('express');
const router = require('./routes/routes');
const cors = require('cors');
const app = express();
const db = require('./models/db');

app.use(express.json());
app.use(cors());
app.use('/api/tasks', router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is started at port number: ${PORT}`);
});