const { Comment } = require('../models');

const commentData = [
    {
        contents: 'I like to be inside!',
        UserId: 3,
        PostId: 1
    },
    {
        contents: 'Yes, I like how they fly.',
        UserId: 2,
        PostId: 1
    },
    {
        contents: "Chores remeind me of my Uncle's house.",
        UserId: 2,
        PostId: 2
    },
    {
        contents: 'I like to be ouside!',
        UserId: 1,
        PostId: 2
    },
    {
        contents: "No, my scars just hurt.",
        UserId: 1,
        PostId: 3
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;