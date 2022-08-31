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
        //if(!User.findOne({email: req.body.email})) return console.log('email is used')
        //hashPassword
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassword
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

        //match password with hashpassword
        const validPassword = await bcrypt.compare(req.body.password, authUser.password)
        if(!validPassword) return console.log('invalid user')
        res.redirect('/')
    } catch(error){
        console.log(error)
        res.send(error)
    }
})

//create session upon login

//destroy session upon logout

//logout functionality
module.exports = router
