const express = require('express');
const router = express.Router();
const {
  register,
  login,
  logout,
  loadUser,
} = require('../controllers/userController');
const { auth } = require('../middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/user', auth, loadUser);

module.exports = router;
