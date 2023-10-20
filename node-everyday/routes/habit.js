const express = require('express');
const router = express.Router();

// 가짜 스케줄 데이터 배열 (실제로 데이터베이스에서 가져와야 함)
const habit = [
    { id: 1, title: 'Meeting', date: '2023-10-15' },
    { id: 2, title: 'Conference', date: '2023-10-20' },
    // 다른 스케줄 항목들...
];

    router.get('/', (req, res) => {
        res.json(schedules);
    });

    router.post('/', (req, res) => {
        const newSchedule = req.body;
        schedules.push(newSchedule);
        res.json(newSchedule);
    });

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedSchedule = req.body;
        schedules[id] = updatedSchedule;
        res.json(updatedSchedule);
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        schedules.splice(id, 1);
        res.send('일정이 삭제되었습니다.');
    });

module.exports = router;