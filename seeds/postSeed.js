const { Post } = require('../models');

const postData = [
    {
        title: 'Hippogryphs',
        contents: 'They are not as scary as you think',
        UserId: 1            
    },
    {
        title: 'Chores',
        contents: 'I could do chores all day!!',
        UserId: 3
    },
    {
        title: 'Scars',
        contents: 'Do other people get visions when their scars hurt?',
        UserId: 2
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;