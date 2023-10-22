const express = require('express');
const userController = require('../controllers/user');
const habitController = require('../controllers/habit'); 
// const { isLoggedIn } = require('../middlewares');


const router = express.Router();

router.post('/user', userController.postUser);
router.get('/user', userController.getUsers);


// router.post('/comment', habitController.createComment);
// router.get('/comment', scheduleController.getAllComments);
// router.get('/comment/:id', habitController.getComment);
// router.patch('/comment/:id', habitController.updateComment);
// router.delete('/comment/:id', habitController.deleteComment);

router.post('/habit', habitController.createHabit);
router.get('/habit/getList', habitController.getAllHabits);
// router.get('/schedule/:id', habitController.getSchedule);
// router.patch('/habit/:id', habitController.updateSchedule);
// router.delete('/habit/:id', habitController.deleteSchedule);



module.exports = router;
