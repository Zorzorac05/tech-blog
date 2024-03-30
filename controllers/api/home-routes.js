const router = require('express').Router();
const { Post, Comments, User } = require('../../models');

// GET for homepage
router.get('/', async (req, res) => {
  try {
    //await to load post from users
    const dbPostData = await Post.findAll({
      include: [
        {
          attributes: ['title', 'date_created'],
        },
      ],
    });
    //maps out post to get them ready for display
    const homePost = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    //display the post
    res.render('homepage', {
      //get homepage
      homePost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
