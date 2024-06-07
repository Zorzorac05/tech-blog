const router = require('express').Router();
const {User, Post} = require('../../models');

//get route get all posts
router.get('/', async (req, res) =>{
    try{
        const postData = await Post.findAll();
        // {include: {model: User, attributes: 'name'}}
        res.json(postData);
    }
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
});

//get route for user with id
router.get('/userId', async (req, res) =>{
    try{
        const postData = await Post.findAll({
            where: {
                user_id: req.params.userId
            },
            include: {model: User, attributes: 'name'}})
        res.json(postData)
    }
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
});

//get route get a post by id
router.get('/:id', async (req, res)=>{
    try{
        const postData = await Post.findByPk(req.params.id);
        res.json(postData);
    }
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
});

//post route create a post
router.post('/', async (req, res)=>{
    try{
        const user = await User.findByPk(req.session.user_id)
        if(user && req.body.title && req.body.content){
            const newPost = {
                title: req.body.title,
                content: req.body.content,
                user_id: user.id
            }
            const postData = await Post.create(newPost);
            res.json(postData)
        }
        else{
            res.status(500).json('invalid post');
        }
    }
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
});

//delete route delete a post
router.delete('/:id', async (req, res)=>{
    try{
        const postData = await Post.destroy({where: {id: req.params.id}});
        res.json(postData);
    }
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
});

//put route update post 
router.put('/:id', async (req, res)=>{
    try{
        const postData = await Post.update(req.body, {where: {id: req.params.id}});
        res.json(postData);
    }
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
});

module.exports = router;