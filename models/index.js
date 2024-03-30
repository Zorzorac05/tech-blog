const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

Post.hasMany(Comments, {
    foreignKey: 'id',
});

User.hasMany(Post, {
    foreignKey: 'id',
});

User.hasMany(Comments, {
    foreignKey: 'id',
});

module.exports = { User, Post, Comments };
