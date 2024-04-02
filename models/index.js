const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

Post.hasMany(Comments, {
    foreignKey: 'post_id',
});

User.hasMany(Post, {
    foreignKey: 'created_by',
});

User.hasMany(Comments, {
    foreignKey: 'created_by',
});

module.exports = { User, Post, Comments };
