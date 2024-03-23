const { User } = require('../models');

const userData = [
    {
        name: 'Hagrid',
        password: 'biganimals'
    },
    {
        name: 'Harry',
        password: 'broomstick'
    },
    {
        name: 'Doby',
        password: 'fuzzysocks'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

