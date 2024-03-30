const router = require('express').Router();

const homeRoutes = require('./api/home-routes.js');

router.use('/', homeRoutes);

module.exports = router;
