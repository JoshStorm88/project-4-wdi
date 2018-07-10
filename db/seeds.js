const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Developer = require('../models/developer');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Developer.create([{
      companyName: 'A',
      companySize: 'B',
      description: 'C',
      image: 'D',
      skills: 'E',
      location: 'F'
    }]))
    .then(developers => console.log(`${developers.length} developer(s) created`))


    .then(() => User.create([{
      username: 'A',
      email: 'a@a.com',
      passsword: '1234'
    }]))
    .then(users => console.log(`${users.length} user(s) created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
