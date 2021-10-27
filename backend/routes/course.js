const express = require("express");
const {
    courseById,
    allCourse,
    createCourse,
    getCourse,
    updateCourse,
    deleteCourse,
} = require("../controllers/course");


const { 
    hasAuthorization
} = require("../controllers/user");
const { courseValidator} = require('../validator');
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

//course
router.get("/courses", allCourse);
router.post("/course/create", requireSignin,courseValidator,createCourse);
router.get("/course/:courseId", requireSignin, getCourse);
router.put("/course/:courseId", requireSignin,updateCourse);
router.delete("/course/:courseId", requireSignin,deleteCourse);


// any route containing :userId, our app will first execute userByID()
router.param("courseId", courseById);
module.exports = router;
