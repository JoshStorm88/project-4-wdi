const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Developer = require('../models/developer');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Developer.create([{
      companyName: 'Marks & Spencer Ltd',
      companySize: 'Large',
      description: 'C',
      image: 'D',
      skills: 'Python, Ruby, Javascript',
      location: 'Kingston Upon Thames'
    },{
      companyName: 'Achllieus Designs',
      companySize: 'Small',
      description: 'C',
      image: 'D',
      skills: 'Bulma, Angular',
      location: 'Manhatten'
    },{
      companyName: 'MI6',
      companySize: 'Unknown',
      description: 'Unknown',
      image: 'Unknown',
      skills: 'Unknown',
      location: 'Unknown'
    },{
      companyName: 'Network Code',
      companySize: 'Medium',
      description: 'C',
      image: 'D',
      skills: 'React.js, Sass, Node.js, Ruby on Rails',
      location: 'London'
    },{
      companyName: 'Julian & Gerry Coders',
      companySize: 'Medium',
      description: 'C',
      image: 'D',
      skills: 'Witty Retorts, French Accents, Javascript, React.js, Normalize',
      location: 'Paris'
    },{
      companyName: 'Mike & Nicks\' Websites',
      companySize: 'Small',
      description: 'C',
      image: 'D',
      skills: 'Bulma, Art, Ruby, Python, PHP, Javascript, React.js, Angular.js',
      location: 'Birmingham'

    }
    ]))
    .then(developers => console.log(`${developers.length} developer(s) created`))


    .then(() => User.create([{
      username: 'A',
      email: 'jn@test.com',
      passsword: '1234'
    },{
      username: 'B',
      email: 'js@test.com',
      passsword: '1234'
    },{
      username: 'C',
      email: 'mg@test.com',
      passsword: '1234'
    },{
      username: 'D',
      email: 'gm@test.com',
      passsword: '1234'
    }]))
    .then(users => console.log(`${users.length} user(s) created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
