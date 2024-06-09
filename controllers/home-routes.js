const router = require('express').Router();
const { Post, Comments, User } = require('../models');
const auth = require('../utils/auth');

// GET for homepage when logged in
router.get('/', auth, async (req, res) => {
  try {
    //await to load post from users
    const dbPostData = await Post.findAll({
      include: {model: User},
      order: [['date_created', 'DESC']],
    });
    
    //maps out post to get them ready for display
    const homePost = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    //display the post
    res.render('homepage', {
      //get homepage
      homePost,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//goes to log in if not logged in
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

//goes to post page by id
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
        id: req.params.id
    },
    attributes: [
        'id',
        'title',
        'content',
        'date_created'
    ],
    include: [{
            model: Comments,
            attributes: ['id', 'content', 'post_id', 'date_created', 'user_id'],
            include: {
                model: User,
                attributes: ['name']
            }
        },
        {
            model: User,
            attributes: ['name']
        }
    ]
})
.then(dbPostData => {
    if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
    }
    const post = dbPostData.get({ plain: true });
    console.log(post);
    res.render('post', 
      { 
        post,
        loggedIn: req.session.loggedIn 
      });


})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;
