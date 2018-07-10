const router = require('express').Router();
const developers = require('../controllers/developers');
const auth = require('../controllers/auth');


router.route('/developers')
  .get(developers.index)
  .post(developers.create);

router.route('/developers/:id')
  .get(developers.show)
  .put(developers.update)
  .delete(developers.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
