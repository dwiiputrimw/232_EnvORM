const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

db.sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((err) => {
        console.log(err);
    });