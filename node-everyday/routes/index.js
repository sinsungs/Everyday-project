const express = require('express');
const userController = require('../controllers/user');
const scheduleController = require('../controllers/schedlue');
const commentController = require('../controllers/commentController'); 
const habitController = require('../controllers/habit'); 
const { isLoggedIn } = require('../middlewares');


const router = express.Router();

router.get('/user', userController.getUsers);
router.post('/user', userController.postUsers);

router.post('/comment', habitController.createComment);
router.get('/comment/:id', habitController.getComments);
router.patch('/comment/:id', habitController.updateComment);
router.delete('/comment/:id', habitController.deleteComment);

router.get('/schedule', scheduleController.getAllSchedules);
router.post('/schedule', scheduleController.createSchedule);
router.patch('/schedule/:id', scheduleController.updateSchedule);
router.delete('/schedule/:id', scheduleController.deleteSchedule);

module.exports = router;
