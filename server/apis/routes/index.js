const router = require('express').Router();

// importing all routes
const authRoutes = require('./auth/auth');

router.use('/auth', authRoutes);

module.exports = router;
