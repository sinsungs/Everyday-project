const express = require('express');
const { Schedule } = require('../models');

const router = express.Router();


router.route('/')
  .get(async (req, res, next) => {
    try {
      const schedules = await Schedule.findAll();
      res.json(schedules);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
    .post(async (req, res, next) => {
  try {
    const schedule = await Schedule.create({
      writer: req.body.id,
      plan: req.body.plan,
    });
    console.log(schedule);
    res.status(201).json(schedule);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.route('/:id')
  .patch(async (req, res, next) => {
    try {
      const result = await Schedule.update({
        plan: req.body.plan,
      }, {
        where: { id: req.params.id },
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const result = await Schedule.destroy({ where: { id: req.params.id } });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });


  

module.exports = router;
