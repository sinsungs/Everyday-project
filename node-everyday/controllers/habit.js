const Habit = require('../models/habit')


// exports.getAllSchedules = async (req, res, next) => {
//     try {
//       const schedules = await Schedule.findAll();
//       res.json(schedules);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
// };


// exports.createSchedule = async (req, res, next) => {
//     try {
//       const schedule = await Schedule.create({
//         writer: req.body.id,
//         plan: req.body.plan,
//       });
//       console.log(schedule);
//       res.status(201).json(schedule);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
// };


// exports.updateSchedule = async (req, res, next) => {
//     try {
//       const result = await Schedule.update(
//         { plan: req.body.plan },
//         { where: { id: req.params.id } }
//       );
//       res.json(result);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
// };


// exports.deleteSchedule = async (req, res, next) => {
// try {
//     const result = await Schedule.destroy({ where: { id: req.params.id } });
//     res.json(result);
// } catch (err) {
//     console.error(err);
//     next(err);
// }
// };