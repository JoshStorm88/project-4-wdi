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
      image: 'https://pbs.twimg.com/profile_images/1706286797/M_Slogo_400x400.jpg',
      skills: 'Python, Ruby, Javascript',
      location: 'Kingston Upon Thames'
    },{
      companyName: 'Achilleus Designs',
      companySize: 'Small',
      description: 'C',
      image: 'https://s3-media2.fl.yelpcdn.com/bphoto/zcI5ktHMaO7GTMRQo02Zjg/l.jpg',
      skills: 'Bulma, Angular',
      location: 'Manhatten'
    },{
      companyName: 'MI6',
      companySize: 'Unknown',
      description: 'Unknown',
      image: 'https://pbs.twimg.com/profile_images/1132279153/MI6-col_neg_400x400.jpg',
      skills: 'Unknown',
      location: 'Unknown'
    },{
      companyName: 'Network Code',
      companySize: 'Medium',
      description: 'C',
      image: 'https://pbs.twimg.com/profile_images/696378871126462464/c2DJbncv_400x400.png',
      skills: 'React.js, Sass, Node.js, Ruby on Rails',
      location: 'London'
    },{
      companyName: 'Julian & Gerry Coders',
      companySize: 'Medium',
      description: 'C',
      image: 'https://pbs.twimg.com/profile_images/896001072015314945/6xIWXrOx_400x400.jpg',
      skills: 'Witty Retorts, French Accents, Javascript, React.js, Normalize',
      location: 'Paris'
    },{
      companyName: 'Mike & Nicks\' Websites',
      companySize: 'Small',
      description: 'C',
      image: 'https://pbs.twimg.com/profile_images/454345227587690496/PWMftTUJ_400x400.jpeg',
      skills: 'Bulma, Art, Ruby, Python, PHP, Javascript, React.js, Angular.js',
      location: 'Birmingham'

    }
    ]))
    .then(developers => console.log(`${developers.length} developer(s) created`))


    .then(() => User.create([{
      username: 'A',
      email: 'jn@test.com',
      password: '1234'
    },{
      username: 'B',
      email: 'js@test.com',
      password: '1234'
    },{
      username: 'C',
      email: 'mg@test.com',
      password: '1234'
    },{
      username: 'D',
      email: 'gm@test.com',
      password: '1234'
    }]))
    .then(users => console.log(`${users.length} user(s) created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
