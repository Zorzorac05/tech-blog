const { User } = require('../models');

const data = [
    {
        name: 'Alex',
        password: 'word',
    },
    {
        name: 'Zeno',
        password: 'justaguy',
    },
];

const seed = () => User.bulkCreate(data);

module.exports = seed;