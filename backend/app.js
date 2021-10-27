const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
var cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const fs = require('fs');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// db

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true
    })
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

// bring in routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/course');
const pythonRoutes = require('./routes/python');
const jsRoutes = require('./routes/javascript');
const dsaRoutes = require('./routes/dsa');
// apiDocs
app.get('/', (req, res) => {
    fs.readFile('docs/apiDocs.json', (err, data) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        }
        const docs = JSON.parse(data);
        res.json(docs);
    });
});
app.get('/api', (req, res) => {
    fs.readFile('docs/apiDocs.json', (err, data) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        }
        const docs = JSON.parse(data);
        res.json(docs);
    });
});


// middleware -
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api/c', courseRoutes);
app.use('/api/c1', pythonRoutes);
app.use('/api/c2', jsRoutes);
app.use('/api/c3', dsaRoutes);

app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized!' });
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});
