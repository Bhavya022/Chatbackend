const express = require('express');
const { login,logout,register } = require('../controllers/authController');
const authenticateUser = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authenticateUser, logout);

module.exports = router;
