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
        // const hashPassword = bcrypt.hash(req.body.password, 10)
        // req.body.password = hashPassword
        //create user with username and hashPassword
        const createUser = await User.create(req.body)
        console.log(createUser)
        res.redirect('/bravado/login')
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
        //match login information with user database
        const authUser = await User.findOne({username: req.body.username})
        if(!authUser) return console.log('user not found')
        const validPassword = await bcrypt.compare(req.body.password, authUser.password)
        if(!validPassword) return console.log('invalid user')
        res.redirect('/')
    } catch(error){
        console.log(error)
        res.send(error)
    }
})

module.exports = router
