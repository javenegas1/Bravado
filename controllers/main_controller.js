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
        const createSubmission = await Submission.create(req.body)
        console.log(createSubmission);
  
        res.redirect("/");
    } catch (error){
        error = 'Could not Post'
        console.log(error)
    }
})

//display submissions by category
//tech
router.get('/:category', async (req, res) => {
    try {
        const findReview = await Review.find({});
        const context = { findReview: findReview, category: req.params.category}
        return res.render('category.ejs', context);
    } catch (error) {
        error = 'Could not Post'
        console.log(error)
    }
    // const context = {category: req.params.category}
    // res.render('category.ejs', context)
  });

//retrieves submissions
// router.get('/:submissionId', async (req, res) => {
//     try {
//         const userSubmission = await Review.findById(req.params.submissionId)
//         console.log(userSubmission);
//         console.log(req.params.submissionId)
//         //provides context for delete button as well
//         const context = { userSubmission: userSubmission, id: userSubmission._id }
//         res.render('show.ejs', context)
//     } catch (error) {
//         error = 'Could not Post'
//         console.log(error)
//     }
// })



module.exports = router