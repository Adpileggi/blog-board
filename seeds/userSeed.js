const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        name: 'Hagrid',
        password: bcrypt.hashSync('biganimals', 10)
    },
    {
        name: 'Harry',
        password: bcrypt.hashSync('broomstick', 10)
    },
    {
        name: 'Doby',
        password: bcrypt.hashSync('fuzzysocks', 10)
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

