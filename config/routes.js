const router = require('express').Router();
const developers = require('../controllers/developers');
const projects = require('../controllers/projects');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureroute');

router.route('/developers')
  .get(developers.index)
  .post(secureRoute, developers.create);

router.route('/developers/:id')
  .get(developers.show)
  .put(secureRoute, developers.update)
  .delete(secureRoute, developers.delete);

router.route('/projects')
  .post(projects.create);

router.route('/projects/:id')
  .get(projects.show)
  .put(projects.update)
  .post(projects.submit)
  .delete(projects.delete);

router.post('/register/', auth.register);
router.post('/login/', auth.login);


module.exports = router;
