const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const Review = require('../models/bravado_schema')
const User = require('../models/user_schema')

// const generalRoutes = [
//     { href: "/bravado/", title: "Home" },
//     { href: "/bravado/general", title: "General" },
//     { href: "/bravado/tech", title: "Tech" },
//     { href: "/bravado/finance", title: "Finance" },
//     { href: "/bravado/register", title: "Register" },
//     { href: "/bravado/login", title: "Login" },
// ];

// const userRoutes = [
//     { href: "/bravado/", title: "Home" },
//     { href: "/bravado/newSubmission", title: "Post" },
//     { href: "/bravado/general", title: "General" },
//     { href: "/bravado/tech", title: "Tech" },
//     { href: "/bravado/finance", title: "Finance" },
//     { href: "/bravado/logout", title: "Logout" },
// ];

//about us page
router.get('/about', (req, res) => {
    //console.log(req.session.thisUser)
    console.log(generalRoutes)
    res.render('about.ejs')
})

//new submissions
router.get('/newSubmission', async (req, res) => {
    try{
        await User.find({username: req.session.thisUser.username})
        const context = {oneUser: req.session.thisUser}
        res.render('new.ejs', context)
    } catch {
        res.send('Create an Account first!')
        //res.redirect('/bravado/register')
    }
    //res.render('new.ejs')
})

//posts to category
router.post('/', async (req, res) => {
    try{
        const oneUser = req.session.thisUser.username
        req.body.user = oneUser
        const createReview = await Review.create(req.body)
        console.log(createReview);  
        res.redirect("/");
    } catch (error){
        console.log(error)
        res.send(error)
    }
})

//display submissions by category
//category
router.get('/:category', async (req, res) => {
    try {
        const sortCategory = req.params.category
        const findReview = await Review.find({category: sortCategory});
        const context = { findReview: findReview, category: sortCategory}
        console.log(findReview)
        return res.render('category.ejs', context);
    } catch (error) {
        console.log(error)
        res.send(error)
    }
  });

//retrieves individual submissions
router.get('/:category/:submissionId', async (req, res) => {
    try {
        // 'default' req.session.thisUser to bypass ejs rules
        let oneUser = {_id: 1, username: 'default' };
        if(req.session.thisUser !== undefined) oneUser = req.session.thisUser

        const userSubmission = await Review.findById(req.params.submissionId)
        console.log(userSubmission);
        //provides context for delete button as well
        const context = { userSubmission: userSubmission, id: userSubmission._id, oneUser: oneUser }
        res.render('show.ejs', context)
        //res.send('hello')
    } catch (error) {
        console.log(error)
    }
})

//new comments
router.get('/:category/:submissionId/comment', async (req, res) => {
    try{
        await User.find({username: req.session.thisUser.username})
        const context = {category: req.params.category, submissionId: req.params.submissionId, oneUser: req.session.thisUser}
        res.render('comment.ejs', context)
    } catch {
        res.send('Create an Account first!')
        //res.redirect('/bravado/register')
    }
})

//post comments to page
router.post('/:category/:submissionId', async (req, res) => {
    try{
        const oneUser = req.session.thisUser.username
        req.body.user = oneUser
        const userSubmission = await Review.findById(req.params.submissionId)
        const comment = await userSubmission.comments.create(req.body)
        console.log(req.body)
        await Review.updateOne(
            {_id: req.params.submissionId},
            {$push: { comments: comment }}
        )
        console.log(comment)
        
        // redirect troubleshoot ----------->
        // res.redirect(`/${userSubmission.category}/${userSubmission.id}`);
        // res.redirect(`/${req.params.category}/${req.params.submissionId}`);
        res.redirect('/')

    } catch (error){
        console.log(error)
        res.send(error)
    }
})

//deletes individual submission
router.delete('/:category/:submissionId', async (req, res) => {
    try {
        //compare req.session.thisUser.username to Review.find({user})
        // if no match then block access to be able to delete
        const deletePost = await Review.findByIdAndDelete(req.params.submissionId);
        //if(deletePost.user == req.session.thisUser.username) return res.redirect('/bravado');
        console.log(deletePost)
        res.redirect('/bravado');
    } catch(error) {
        console.log(error)
        //res.send('Not for you to delete')
        //res.redirect('/bravado/:category/:submissionId')?
    }
  })

//Edit and Update individual submissions
router.get('/:category/:submissionId/edit', async (req, res) => {
    try {
        const updatePost = await Review.findById(req.params.submissionId);
        if(updatePost.user == req.session.thisUser.username) return res.render('edit.ejs', { userPost: updatePost })
        console.log(updatePost);
        return res.render('edit.ejs', { userPost: updatePost })
    } catch (error) {
        console.log(error)
        res.redirect('/bravado/login')
    }
  })

router.put('/:category/:submissionId', async (req, res) => {
    try {
        const updatePost = await Review.findByIdAndUpdate(req.params.submissionId, req.body);  
        return res.redirect(`/bravado/${updatePost.category}`);
    } catch (error) {
        console.log(error)
    }
  });

module.exports = router