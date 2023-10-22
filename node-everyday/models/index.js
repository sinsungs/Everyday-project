
const Sequelize = require('sequelize');
// const User = require('./user');
const Habit = require('./habit');
const HabitStatus = require('./habitStatus');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

// db.User = User;
db.Habit = Habit;
db.HabitStatus = HabitStatus;

// User.initiate(sequelize);
Habit.initiate(sequelize);
HabitStatus.initiate(sequelize);

Habit.associate(db);
HabitStatus.associate(db);

module.exports = db;
