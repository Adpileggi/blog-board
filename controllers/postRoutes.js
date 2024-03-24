const router = require('express').Router();
const Post = require('../models/post');

// get route to all post
router.get('/', async (req, res) => {
    const postData = await Post.findAll().catch((err) => {
        res.json(err);
    });
})

// find all from gallery example

// get route for a single post