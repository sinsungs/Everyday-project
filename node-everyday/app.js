const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models');
const indexRouter = require('./routes/index');


const app = express();
app.set('port', process.env.PORT || 8000);
sequelize.sync({ force: false })
.then(() => {
    console.log('데이터베이스 연결 성공');
})
.catch((err) => {
    console.error(err);
});

// app.use(cors()); // 모든 Origin에서의 요청을 허용
app.use(cors({              // front 서버인 127.0.0.1:8080 의 요청을 허용하도록 cors 사용
    origin: 'http://localhost:3000',
    credentials:true,
}));

app.get('/proxy', (req, res) => {
    // 이 예제에서는 단순한 응답을 보냅니다. 실제로는 데이터베이스 쿼리 또는 다른 비즈니스 로직을 수행할 수 있습니다.
    const responseData = '프록시 연결에 성공했습니다.';
    res.send(responseData);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// 라우팅 모듈을 불러옵니다.
app.use('/', indexRouter);
app.use('/user', indexRouter);
app.use('/habit', indexRouter);


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






