const { Comments } = require('../models');

const data = [
    {
        content: "Hey look a comment how neat",
        date_created: "2024-03-10",
        created_by: 1,
        post_id: 1,
    },
    {
        content: "a second comment wild",
        date_created: "2024-03-11",
        created_by: 1,
        post_id: 1,
    },
    {
        content: "look its me zeno",
        date_created: "2024-03-17",
        created_by: 2,
        post_id: 2,
    },
];

const seed = () => Comments.bulkCreate(data);

module.exports = seed;