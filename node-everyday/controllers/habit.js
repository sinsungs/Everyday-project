const Habit = require('../models/habit')
const HabitStatus = require('../models/habitStatus')


// exports.createHabit = async (req, res, next) => {
//     try {
//     const habit = await Habit.create({
//         title: req.body.title,
//         count: req.body.count,
//     });
//         console.log(habit);
//         res.status(201).json(habit);
//     } catch (err) {
//         console.error(err);
//         next(err);
//     }
// };

exports.createHabit = async (req, res, next) => {
    try {
        // const id = req.body.id;
        const title = req.body.title;
        const count = req.body.count;

        // 현재 날짜 가져오기
        const currentDate = new Date();

        // Habit 모델을 생성하고 생성일자와 count에 따라 날짜 배열 생성
        const habit = await Habit.create({
            // id : id,
            title: title,
            count: count,
            created_at: currentDate, // 습관의 시작일은 현재 날짜로 설정
        });

        // count 만큼의 날짜 생성
        const habitDates = [];
        for (let i = 0; i < count; i++) {
            const date = new Date(currentDate);
            date.setDate(date.getDate() + i); // 날짜를 더해줌
            habitDates.push(date);
        }

        // 각 날짜를 HabitStatus 모델에 저장
        for (const date of habitDates) {
            await HabitStatus.create({
                HabitId: habit.id,
                status: 0, // 초기 상태 (성공, 실패 등)
                date: date,
            });
        }

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


exports.getAllHabitStatues = async (req, res, next) => {
    try {
        // Habit 테이블과 HabitStatus 테이블을 LEFT JOIN하여 title과 다른 열을 함께 가져옵니다.
        const habitsWithStatus = await Habit.findAll({
            include: {
                model: HabitStatus,
                required: false,
            },
            attributes: ['title', 'count', 'created_at'], // 원하는 열을 선택
        });

        res.status(200).json(habitsWithStatus);
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