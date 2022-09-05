const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const Review = require('../models/bravado_schema')
const User = require('../models/user_schema')

//register
router.get('/register', (req, res) => {
    res.render('register.ejs')
    //res.send('hello')
})

router.post('/register', async (req, res) => {
    try{
        //hashPassword
        const userExists = await User.exists({$or: [{username:req.body.username}, { email: req.body.email }]});
        if (userExists) {
          return res.redirect("/bravado/register_try=again");
        }
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

//register too 
router.get('/register_try=again', (req, res) => {
    const context = {message: 'This Username or Email is already taken 😔'}
    res.render('register2.ejs', context)
    //res.send('hello')
})

router.post('/register_try=again', async (req, res) => {
    try{
        //hashPassword
        const userExists = await User.exists({$or: [{username:req.body.username}, { email: req.body.email }]});
        if (userExists) {
          return res.redirect("/bravado/register_try=again");
        }
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
        if(!authUser) return res.redirect("/bravado/login_try=again");

        //match password with hashpassword
        const validPassword = await bcrypt.compare(req.body.password, authUser.password)
        if(!validPassword) return res.redirect("/bravado/login_try=again");

        req.session.thisUser = {
            id: authUser._id,
            username: authUser.username,
        };
        console.log(req.session)
        res.redirect('/')
    } catch(error){
        console.log(error)
        res.send(error)
    }
})

//login too
router.get('/login_try=again', (req, res) => {
    const context = {message: 'Username and Password do not match'}
    res.render('login2.ejs', context)
})

router.post('/login_try=again', async (req, res) => {
    try{
        //match login information with user database
        const authUser = await User.findOne({username: req.body.username})
        if(!authUser) return res.redirect("/bravado/login_try=again");

        //match password with hashpassword
        const validPassword = await bcrypt.compare(req.body.password, authUser.password)
        if(!validPassword) return res.redirect("/bravado/login_try=again");

        req.session.thisUser = {
            id: authUser._id,
            username: authUser.username,
        };
        console.log(req.session)
        res.redirect('/')
    } catch(error){
        console.log(error)
        res.send(error)
    }
})

//logout functionality
//destroy session upon logout
router.get('/logout', async (req, res) => {
    try {
        console.log(req.session.user, 'logout')
        await req.session.destroy();
        return res.redirect("/bravado/login");
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

//delete profile
//deletes individual submission
router.get('/manage-profile', async (req,res) => {
    try{
        console.log(req.session.thisUser)
        const myProfile = await User.findOne({username: req.session.thisUser.username});
        const myPosts = await Review.find({user: myProfile.username})
        context = {myPosts: myPosts, myProfile: myProfile}
        res.render('manage-profile.ejs', context)
    } catch (error){
        console.log(error)
    }
})

router.delete('/manage-profile', async (req, res) => {
    try {
        const deletePosts = await Review.deleteMany({user: req.session.thisUser.username})
        console.log(deletePosts)
        const deleteUser = await User.findOneAndDelete({username: req.session.thisUser.username});
        console.log(deleteUser)
        res.redirect('/bravado/logout');
    } catch(error) {
        console.log(error)
    }
  })

module.exports = router
