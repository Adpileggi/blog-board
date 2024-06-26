const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            contents: req.body.contents,
            UserId: req.session.userPk,
            PostId: req.session.postId,
        });

        console.log(newComment);

        // res.render('')

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router