const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { mongoose } = require('./database.js');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Routes
app.use('/api/employees', require('./routes/employee.routes'));


app.listen(app.get('port'), () => {
    console.log(`SERVER ON PORT: ${app.get('port')}`);
});