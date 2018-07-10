const router = require('express').Router();
const developers = require('../controllers/developers');


router.route('/developers')
  .get(developers.index)
  .post(developers.create);

router.route('/developers/:id')
  .get(developers.show)
  .put(developers.update)
  .delete(developers.delete);

// add later when we need to register/login users
// router.post('/register', authDev.register);
// router.post('/login', authDev.login);
// router.post('/register', authUser.register);
// router.post('/login', authUser.login);

module.exports = router;
