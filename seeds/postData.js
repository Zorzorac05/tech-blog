const { Post } = require('../models');

const data = [
    {
        title: "First Post",
        content: "this is my first post smile",
        user_id: 1,
    },
    {
        title: "New Post",
        content: "look a new post",
        user_id: 1,
    },
    {
        title: "Bears",
        content: "happy bears",
        user_id: 1,
    },
    {
        title: "Zeno post",
        content: "hey look its me zeno i made a post",
        user_id: 2,
    },
    {
        title: "Stop",
        content: "Don't let Zeno post",
        user_id: 1,
    },
    {
        title: "Can't stop me",
        content: "im an unstoppable guy smile",
        user_id: 2,
    },
];

const seed = () => Post.bulkCreate(data);

module.exports = seed;