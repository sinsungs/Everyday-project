const Habit = require('../models/habit')


exports.createHabit = async (req, res, next) => {
    try {
    const habit = await Habit.create({
        title: req.body.title,
        count: req.body.count,
    });
        console.log(habit);
        res.status(201).json(habit);
    } catch (err) {
        console.error(err);
        next(err);
    }
};


exports.getAllHabits = async (req, res, next) => {
    try {
        const habits = await Habit.findAll();
        res.json(habits);
        console.log(habits);
    } catch (err) {
        console.error(err);
        next(err);
    }
};


// exports.updateHabit = async (req, res, next) => {
//     try {
//         const result = await Habit.update(
//         { plan: req.body.plan },
//         { where: { id: req.params.id } }
//         );
//             res.json(result);
//     } catch (err) {
//         console.error(err);
//         next(err);
//     }
// };


// exports.deleteHabit = async (req, res, next) => {
// try {
//     const result = await Habit.destroy({ where: { id: req.params.id } });
//     res.json(result);
// } catch (err) {
//     console.error(err);
//     next(err);
// }
// };