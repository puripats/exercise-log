const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const exercise_controller = require('../controllers/exercise.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', exercise_controller.test);

router.post('/add/:id', exercise_controller.addActivity);


module.exports = router;