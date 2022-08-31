const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/register', (req, res) => {
    res.render('register.ejs')
    //res.send('hello')
})

router.get('/login', (req, res) => {
    res.render('login.ejs')
})

module.exports = router
