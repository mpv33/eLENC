const express = require("express");
const {
    javascriptById,
    javascript,
    createjavascript,
    getjavascript,
    updatejavascript,
    deletejavascript,
} = require("../controllers/javascript");
const { 
    hasAuthorization
} = require("../controllers/user");
const { courseValidator} = require('../validator');
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

//javascript 
router.get("/javascript", javascript);
router.post("/javascript/create", requireSignin,courseValidator,createjavascript);
router.get("/javascript/:javascriptId", requireSignin, getjavascript);
router.put("/javascript/:javascriptId", requireSignin,updatejavascript);
router.delete("/javascript/:javascriptId", requireSignin,deletejavascript);



// any route containing :userId, our app will first execute userByID()

router.param("javascriptId", javascriptById);

module.exports = router;
