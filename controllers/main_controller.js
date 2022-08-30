const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const Review = require('../models/bravado_schema')

//new submissions
router.get('/newSubmission', (req, res) => {
    res.render('new.ejs')
})

//posts to category
router.post('/', async (req, res) => {
    try{
        const createReview = await Review.create(req.body)
        console.log(createReview);
  
        res.redirect("/");
    } catch (error){
        //error = 'Could not Post'
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
        //error = 'Could not Post'
        console.log(error)
        res.send(error)
    }
  });

//retrieves individual submissions
router.get('/:category/:submissionId', async (req, res) => {
    try {
        const userSubmission = await Review.findById(req.params.submissionId)
        // console.log(comment.user)
        console.log(userSubmission);
        //provides context for delete button as well
        const context = { userSubmission: userSubmission, id: userSubmission._id }
        res.render('show.ejs', context)
        //res.send('hello')
    } catch (error) {
        //error = 'Could not Post'
        console.log(error)
    }
})

//new comments
router.get('/:category/:submissionId/comment', (req, res) => {
    const context = {category: req.params.category, submissionId: req.params.submissionId}
    res.render('comment.ejs', context)
})

//post comments to page
router.post('/:category/:submissionId', async (req, res) => {
    try{
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
        //res.redirect(`/${req.params.category}/${req.params.submissionId}`);
        res.redirect('/')

    } catch (error){
        //error = 'Could not Post'
        console.log(error)
        res.send(error)
    }
})

//deletes individual submission
router.delete('/:category/:submissionId', async (req, res) => {
    try {
        const deletePost = await Review.findByIdAndDelete(req.params.submissionId);
        console.log(deletePost)
        res.redirect('/bravado');
    } catch(error) {
        //error = 'Could not Post'
        console.log(error)
    }
  })

//Edit and Update individual submissions
router.get('/:category/:submissionId/edit', async (req, res) => {
    try {
        const updatePost = await Review.findById(req.params.submissionId);
        console.log(updatePost);
        return res.render('edit.ejs', { userPost: updatePost })
    } catch (error) {
        //error = 'Could not Post'
        console.log(error)
    }
  })

router.put('/:category/:submissionId', async (req, res) => {
    try {
        //const categoryBtn = document.getElementById('editBtn')
        const updatePost = await Review.findByIdAndUpdate(req.params.submissionId, req.body);  
        //console.log(categoryBtn);
        return res.redirect(`/bravado/${updatePost.category}`);
    } catch (error) {
        //error = 'Could not Post'
        console.log(error)
    }
  });

module.exports = router