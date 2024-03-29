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

router.delete('/delete/:id', async (req, res) => {
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

router.put('/update/:id', async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!postData[0]) {
            res.status(404).json({ message: 'No user with this id'});
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router