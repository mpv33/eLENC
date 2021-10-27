const _ = require('lodash');
const Python = require('../models/python');
const formidable = require('formidable');
const fs = require('fs');





//python
exports.pythonById = (req, res, next, id) => {
    Python.findById(id)
        .exec((err, course) => {
            if (err || !course) {
                return res.status(400).json({
                    error: 'course not found'
                });
            }
            req.python = course;     
            next();
        });
};


exports.python = (req, res) => {
    Python.find((err,c) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(c);
    }).select("title")
};

exports.getpython = (req, res) => {
    return res.json(req.python);
};

exports.createpython = async (req, res) => {
    const courseExists = await Python.findOne({ title: req.body.title });
    if (courseExists)
        return res.status(403).json({
            error: 'title is taken!'
        });
    const course = await new Python(req.body);
    await course.save();
    res.status(200).json({ message: 'course successfully! created.' });

};

exports.updatepython = (req, res,next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Photo could not be uploaded'
            });
        }
        // save course
        let course = req.python;
      
        course = _.extend(course, fields);

        course.updated = Date.now();
        console.log("course FORM DATA UPDATE: ", course);

        if (files.photo) {
            user.photo.data = fs.readFileSync(files.photo.path);
            user.photo.contentType = files.photo.type;
        }

        course.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            console.log("couse after update with formdata: ",course);
            res.json(course);
        });
    });
};



exports.deletepython = (req, res, next) => {
    let course = req.python;
    course.remove((err, user) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({ message: 'course deleted successfully' });
    });
};



