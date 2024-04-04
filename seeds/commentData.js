const { Comments } = require('../models');

const data = [
    {
        content: "Hey look a comment how neat",
        user_id: 1,
        post_id: 1,
    },
    {
        content: "a second comment wild",
        user_id: 1,
        post_id: 1,
    },
    {
        content: "look its me zeno",
        user_id: 2,
        post_id: 2,
    },
];

const seed = () => Comments.bulkCreate(data);

module.exports = seed;