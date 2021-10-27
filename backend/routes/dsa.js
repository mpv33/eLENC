const express = require("express");
const {
    dsaById,
    dsa,
    createdsa,
    getdsa,
    updatedsa,
    deletedsa,
} = require("../controllers/dsa");
const { 
    hasAuthorization
} = require("../controllers/user");
const { courseValidator} = require('../validator');
const { requireSignin } = require("../controllers/auth");

const router = express.Router();



//dsa 
router.get("/dsa",dsa);
router.post("/dsa/create", requireSignin,courseValidator,createdsa);
router.get("/dsa/:dsaId", requireSignin, getdsa);
router.put("/dsa/:dsaId", requireSignin,updatedsa);
router.delete("/dsa/:dsaId", requireSignin,deletedsa);

// any route containing :userId, our app will first execute userByID()

router.param("dsaId", dsaById);
module.exports = router;
