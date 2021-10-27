const _ = require('lodash');
const DSA = require('../models/dsa');
const formidable = require('formidable');
const fs = require('fs');


//dsa
exports.dsaById = (req, res, next, id) => {
    DSA.findById(id)
        .exec((err, course) => {
            if (err || !course) {
                return res.status(400).json({
                    error: 'course not found'
                });
            }
            req.dsa= course;     
            next();
        });
};


exports.dsa = (req, res) => {
    DSA.find((err,c) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(c);
    }).select("title")
};

exports.getdsa = (req, res) => {
    return res.json(req.dsa);
};

exports.createdsa = async (req, res) => {
    const courseExists = await DSA.findOne({ title: req.body.title });
    if (courseExists)
        return res.status(403).json({
            error: 'title is taken!'
        });
    const course = await new DSA(req.body);
    await course.save();
    res.status(200).json({ message: 'course successfully! created.' });

};

exports.updatedsa = (req, res,next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Photo could not be uploaded'
            });
        }
        // save course
        let course = req.dsa;
      
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



exports.deletedsa = (req, res, next) => {
    let course = req.dsa;
    course.remove((err, user) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({ message: 'course deleted successfully' });
    });
};

