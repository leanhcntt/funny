const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');

require('express-async-errors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/', require('./routes/funny.route'));

app.use((req, res, next) => {
    throw createError(404, '404 Resource not found!');
})

app.use(function (err, req, res, next) {
    console.log("err, req, res, next", err)
    if (typeof err.status === 'undefined' || err.status === 500) {
        res.status(500).send('View the error log on the console screen!');
    } else {
        res.status(err.status).send(err);
    }
})

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'), () => {
    console.log("App is listening on port 3000");
});