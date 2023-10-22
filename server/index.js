require('dotenv').config()
const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const router = require('./routes/MainRouter');
const errorHandlerMiddleware = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandlerMiddleware);

app.get('/', (req, res) => {
    res.status(200).json({message: 'WORKING!!!'});
});

const startApp = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

startApp();