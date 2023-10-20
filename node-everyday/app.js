const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const scheduleRouter = require('./routes/schedule');
const habitRouter = require('./routes/habit');

const app = express();
app.set('port', process.env.PORT || 8080);
sequelize.sync({ force: false })
.then(() => {
    console.log('데이터베이스 연결 성공');
})
.catch((err) => {
    console.error(err);
});

// app.use(cors()); // 모든 Origin에서의 요청을 허용
app.use(cors({              // front 서버인 127.0.0.1:8080 의 요청을 허용하도록 cors 사용
    origin: 'http://localhost:8080',
    credentials:true,
}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// 라우팅 모듈을 불러옵니다.
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);
app.use('/schedule', scheduleRouter);
app.use('/habit', habitRouter);


    app.use((req, res, next) => {
        const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
        error.status = 404;
        next(error);
    });

    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            error: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
        });
        });


        
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});






