const router = require('express').Router();
const { Comment} = require('../../models');

//post route creates a new comment with given info
router.post('/', async(req, res) => {
    console.log()
    try{
        const newComment = {
            content: req.body.content,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        }
        const commentdata = await Comment.create(newComment)
        console.log(commentdata)
        res.json(commentdata);
    }    
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
})


module.exports = router;