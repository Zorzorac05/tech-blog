const { Post } = require('../models');

const data = [
    {
        title: "First Post",
        content: "this is my first post smile",
        date_created: "2024-03-10",
        created_by: 1,
    },
    {
        title: "New Post",
        content: "look a new post",
        date_created: "2024-03-14",
        created_by: 1,
    },
    {
        title: "Bears",
        content: "happy bears",
        date_created: "2024-03-16",
        created_by: 1,
    },
    {
        title: "Zeno post",
        content: "hey look its me zeno i made a post",
        date_created: "2024-03-19",
        created_by: 2,
    },
    {
        title: "Stop",
        content: "Don't let Zeno post",
        date_created: "2024-03-20",
        created_by: 1,
    },
    {
        title: "Can't stop me",
        content: "im an unstoppable guy smile",
        date_created: "2024-03-10",
        created_by: 2,
    },
];

const seed = () => Post.bulkCreate(data);

module.exports = seed;