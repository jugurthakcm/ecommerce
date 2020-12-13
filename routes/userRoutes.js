const express = require('express');
const router = express.Router();
const { register, login, loadUser } = require('../controllers/userController');
const { auth } = require('../middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/user', auth, loadUser);

module.exports = router;
