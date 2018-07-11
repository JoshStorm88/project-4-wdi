const Developer = require('../models/developer');

function indexRoute(req, res, next) {
  Developer.find()
    .then(developers => res.json(developers))
    .catch(next);
}

function showRoute(req, res, next) {
  Developer.findById(req.params.id)
    .then(developer => res.json(developer))
    .catch(next);
}

function createRoute(req, res, next) {
  Developer.create(req.body)
    .then(developer => res.status(201).json(developer))
    .catch(next);
}

function updateRoute(req, res, next) {
  Developer.findById(req.params.id)
    .then(developer => developer.set(req.body))
    .then(developer => developer.save())
    .then(developer => res.json(developer))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Developer.findById(req.params.id)
    .then(developer => developer.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
