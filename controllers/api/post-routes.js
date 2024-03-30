const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try{
        const postData = await Post.create({
            title: req.body.title,
            contents: req.body.contents,
            UserId: req.session.userPk
        });

        console.log(postData)
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
})

// delete a post
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No user with this id'});
            return;
        }
        res.status(200).json(postData)
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a post
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        console.log(postData)

        if (!postData) {
            res.status(404).json({ message: 'No user with this id'});
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router