const Sequelize = require('sequelize');

class HabitStatus extends Sequelize.Model {
    static initiate(sequelize) {
        HabitStatus.init({

            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: true,
            }
            
        }, {
            sequelize,
            timestamps: false,
            modelName: 'HabitStatus',
            tableName: 'habitStatus',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }


    static associate(db) {
        db.HabitStatus.belongsTo(db.Habit);
    }
};

module.exports = HabitStatus;