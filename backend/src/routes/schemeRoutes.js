const express = require('express');
const router = express.Router();
const { matchSchemes } = require('../controllers/schemeController');
const protect = require('../middleware/authMiddleware');

router.post('/match', protect, matchSchemes);

module.exports = router;