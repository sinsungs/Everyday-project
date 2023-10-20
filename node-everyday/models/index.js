
const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');
const Schedule = require('./schedule');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;
db.Schedule = Schedule;

User.initiate(sequelize);
Comment.initiate(sequelize);
Schedule.initiate(sequelize);

User.associate(db);
Comment.associate(db);
Schedule.associate(db);

module.exports = db;
