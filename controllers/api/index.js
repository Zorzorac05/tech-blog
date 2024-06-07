const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes)

module.exports = router;
