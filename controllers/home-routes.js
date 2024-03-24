const router = require('express').Router();
const { Post, User, } = require('../models');

// get route to all post
router.get('/', async (req, res) => {
    try {
        const postData = await User.findAll({
            include: [
                {
                    model: Post,
                    attributes: ['title']
                },
            ],
        });

        const posts = postData.map((post) => 
        post.get({ plain: true })
        );

        res.render('home', {posts} )
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

    // {
    //         posts,
    //         loggedIn: req.session.loggedIn,
    //     }
// find all from gallery example

// get route for a single post

// login route

router.get('/login,', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router