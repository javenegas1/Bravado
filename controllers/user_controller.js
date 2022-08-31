const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const User = require('../models/user_schema')

//register
router.get('/register', (req, res) => {
    res.render('register.ejs')
    //res.send('hello')
})

router.post('/register', async (req, res) => {
    try{
        //hashPassword
    } catch(error){
        console.log(error)
        res.send(error)
    }
})

//login
router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.post('/login', async (req, res) => {
    try{
        //match login information with database
    } catch(error){
        console.log(error)
        res.send(error)
    }
})

module.exports = router
