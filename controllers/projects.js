const Project = require('../models/project');
const Emailer = require('../lib/Emailer');

function createRoute(req, res, next) {
  Project.create(req.body)
    .then(project => res.status(201).json(project))
    .catch(next);
}

function showRoute(req, res, next) {
  Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(next);
}

function submitRoute() {
  Emailer.sendMail({
    to: 'codeshoptest@gmail.com',
    subject: 'New Project',
    text: 'Hey, have a look at this awesome project we have for you, the details are as follows......Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  });
}

function updateRoute(req, res, next) {
  Project.findById(req.params.id)
    .then(project => project.set(req.body))
    .then(project => project.save())
    .then(project => res.json(project))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Project.findById(req.params.id)
    .then(project => project.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  create: createRoute,
  show: showRoute,
  submit: submitRoute,
  update: updateRoute,
  delete: deleteRoute
};
