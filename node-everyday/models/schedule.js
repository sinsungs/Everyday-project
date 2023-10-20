const Sequelize = require('sequelize');

class Schedule extends Sequelize.Model {
    static initiate(sequelize) {
        Schedule.init({
            plan: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Schedule',
            tableName: 'schedules',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Schedule.belongsTo(db.User, { foreignKey: 'writer', targetKey: 'id' });
    }
};

module.exports = Schedule;