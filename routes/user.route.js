const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');


// a simple test url to check that all of our files are communicating correctly.
//router.get('/test', user_controller.test);
router.post('/new-user', user_controller.newUser);
router.get('/users', user_controller.users);
router.get('/logs/:id', user_controller.logs);
// router.post('/add/:id', user_controller.addActivity);

module.exports = router;