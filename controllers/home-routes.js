const router = require('express').Router();
const { Post, User, Comment, } = require('../models');

// get route to all post
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({});

       console.log("Data: ", postData);
        
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

// route to view a single post
router.get('/post/:id', async (req, res) => {
    try {
        const postDb = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: [
                        'contents',
                        'UserId'
                    ],
                    include: User,
                },
                {
                    model: User,
                    attributes: [
                        'name',
                    ],
                },
            ],
        });

        // console.log('Data: ', postDb);

        req.session.save(() =>{
            req.session.postId = postDb.id

            // console.log(req.session)
            
        });

        const posts = postDb.get({ plain: true });

        console.log('cooked data:::::::', posts);

        res.render('post', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    };
});

router.get('/dashboard', async (req, res) => {
    try {
        const userDb = await User.findByPk(req.session.userPk, {
            include: [
                {
                    model: Post,
                    attributes: [
                    'id',
                    'title', 
                    "contents", 
                    "createdAt"
                    ],
                },
            ],
        });
        console.log(userDb.Posts)

        const userData = userDb.get({ plain: true });

        console.log('in the dashboard route')
        console.log('--------------------------------', userData);

        res.render('dashboard', {userData, loggedIn: req.session.loggedIn} );
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

module.exports = router