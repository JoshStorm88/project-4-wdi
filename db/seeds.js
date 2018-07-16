const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Developer = require('../models/developer');
const User = require('../models/user');
const Project = require('../models/project');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Developer.create([{
      companyName: 'Marks & Spencer Ltd',
      companySize: 'Large',
      description: 'C',
      image: 'https://pbs.twimg.com/profile_images/1706286797/M_Slogo_400x400.jpg',
      skills: 'Python, Ruby, Javascript',
      // location: 'Kingston Upon Thames',
      location: { lat: 51.412229, lng: -0.300556},
      telNumber: '0203 442 1767',
      email: 'info@MandS.com'
    },{
      companyName: 'Achilleus Designs',
      companySize: 'Small',
      description: 'C',
      image: 'https://s3-media2.fl.yelpcdn.com/bphoto/zcI5ktHMaO7GTMRQo02Zjg/l.jpg',
      skills: 'Bulma, Angular',
      // location: 'Manhatten',
      location: {lat: 40.7484, lng: -73.9857},
      telNumber: '0208 112 2566',
      email: 'info@AD.com'
    },{
      companyName: 'MI6',
      companySize: 'Unknown',
      description: 'Unknown',
      image: 'https://pbs.twimg.com/profile_images/1132279153/MI6-col_neg_400x400.jpg',
      skills: 'Unknown',
      // location: 'Unknown',
      location: {lat: 51.4872 , lng: 0.1245},
      telNumber: 'Unknown',
      email: 'info@government'
    },{
      companyName: 'Network Code',
      companySize: 'Medium',
      description: 'C',
      image: 'https://pbs.twimg.com/profile_images/696378871126462464/c2DJbncv_400x400.png',
      skills: 'React.js, Sass, Node.js, Ruby on Rails',
      // location: 'London',
      location: {lat: 51.528013, lng: -0.132117},
      telNumber: '0208 332 5566',
      email: 'info@Networkcode.com'
    },{
      companyName: 'Julian & Gerry Coders',
      companySize: 'Medium',
      description: 'C',
      image: 'https://pbs.twimg.com/profile_images/896001072015314945/6xIWXrOx_400x400.jpg',
      skills: 'Witty Retorts, French Accents, Javascript, React.js, Normalize',
      // location: 'Paris',
      location: {lat: 48.8584, lng: 2.2945},
      telNumber: '0208 117 1253',
      email: 'info@jandg.com'
    },{
      companyName: 'Mike & Nicks\' Websites',
      companySize: 'Small',
      description: 'C',
      image: 'https://pbs.twimg.com/profile_images/454345227587690496/PWMftTUJ_400x400.jpeg',
      skills: 'Bulma, Art, Ruby, Python, PHP, Javascript, React.js, Angular.js',
      // location: 'Birmingham',
      location: {lat: 52.413154, lng: -1.919435},
      telNumber: '0208 328 8907',
      email: 'info@Mikeandnicweb.com'
    },{
      companyName: 'Castrid\'s Web Studio',
      companySize: 'Small',
      description: 'C',
      image: 'https://dsocdn.akamaized.net/Assets/Images_Upload/2018/01/14/a71c295a-f962-11e7-9a05-1b44e7e70ea5_web_scale_0.4557291_0.4557291__.jpg?maxheight=416&maxwidth=568&scale=both',
      skills: 'Bulma, Art, Ruby, Python, PHP, Javascript, React.js, Angular.js',
      // location: 'Birmingham',
      location: {lat: 52.413154, lng: -1.919435},
      telNumber: '0208 328 8907',
      email: 'info@castrid.com'
    }
    ]))
    .then(developers => console.log(`${developers.length} developer(s) created`))

    .then(() => User.create([{
      username: 'A',
      email: 'jn@test.com',
      password: '1234',
      passwordConfirmation: '1234'
    },{
      username: 'B',
      email: 'js@test.com',
      password: '1234',
      passwordConfirmation: '1234'
    },{
      username: 'C',
      email: 'mg@test.com',
      password: '1234',
      passwordConfirmation: '1234'
    },{
      username: 'D',
      email: 'gm@test.com',
      password: '1234',
      passwordConfirmation: '1234'
    }]))
    .then(users => console.log(`${users.length} user(s) created`))

    .then(() => Project.create([{
      projectName: 'Winning',
      projectType: 'Small',
      projectBrief: 'To Win',
      skillsRequired: 'Javascript'
    }]))
    .then(projects => console.log(`${projects.length} project(s) created`))


    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
