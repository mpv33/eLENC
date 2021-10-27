const express = require("express");
const {
    pythonById,
    python,
    createpython,
    getpython,
    updatepython,
    deletepython,
} = require("../controllers/python");

const { 
    hasAuthorization
} = require("../controllers/user");
const { courseValidator} = require('../validator');
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

//python 
router.get("/python", python);
router.post("/python/create", requireSignin,courseValidator,createpython);
router.get("/python/:pythonId", requireSignin, getpython);
router.put("/python/:pythonId", requireSignin,updatepython);
router.delete("/python/:pythonId", requireSignin,deletepython);


// any route containing :userId, our app will first execute userByID()

router.param("pythonId", pythonById);
module.exports = router;
