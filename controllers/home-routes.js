const router = require('express').Router();
const { Post, User, } = require('../models');

// get route to all post
router.get('/', async (req, res) => {
    try {
        const postData = await User.findAll({
            include: [
                {
                    model: Post,
                    attributes: ['title', 'createdAt']
                },
            ],
        });
       // console.log("Data: ", postData);
        
        const posts = postData.map((post) => 
            post.get({ plain: true })
        );
        console.log("Serialized Data: ", posts);
        
        res.render('home', {posts, loggedIn: req.session.loggedIn} )
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const postData = await Post.findAll();
        console.log(postData)

        const post = postData.map((post) =>
        post.get({ plain: true }))

        console.log('in the dashboard route')
        res.render('dashboard', {post, loggedIn: req.session.loggedIn} );
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});


// router.get('/test', (req, res) => {
//     console.log("Hit Test Route");
//     res.render('test');
// });

module.exports = router