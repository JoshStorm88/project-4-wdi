const Project = require('../models/project');

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
  update: updateRoute,
  delete: deleteRoute
};
