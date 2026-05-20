const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();
console.log(authController);
router.post('/register', authController.registerUser);
router.get('/login', authController.loginUser);

module.exports = router;