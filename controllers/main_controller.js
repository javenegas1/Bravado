const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));



module.exports = router