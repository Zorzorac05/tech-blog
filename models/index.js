const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

Comments.belongsTo(Post, {
    //foreignKey: 'post_id',
});
Post.hasMany(Comments, {
    //foreignKey: 'post_id',
});

Post.belongsTo(User, {
    //foreignKey: 'user_id',
});
User.hasMany(Post, {
    //foreignKey: 'user_id',
});

Comments.belongsTo(User, {
    //foreignKey: 'user_id',
});
User.hasMany(Comments, {
    //foreignKey: 'user_id',
});

module.exports = { User, Post, Comments };
