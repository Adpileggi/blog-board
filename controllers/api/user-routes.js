const router = require('express').Router();
const { User } = require('../../models');

// New user route
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.username,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            // req.session.username = req.body.username;
            
            res.status(200).json(newUser);
            
        });
    } catch {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route

router.post('/login', async (req, res) => {
    try {
        const userDb = await User.findOne({
            where: {
                name: req.body.username,
            },
        });

        console.log(userDb)

        if (!userDb) {
            res.status(400)
            .json({message: 'Incorrect email or password'});
            return
        }

        const validPassword = await userDb.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400)
            .json({message: 'Incorrect email or password'});
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userPk = userDb.id;

            console.log(req.session)
            res.status(200)
            .json({ user: userDb, message: "You are logged in."})
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout Route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;