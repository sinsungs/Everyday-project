const Sequelize = require('sequelize');

class Habit extends Sequelize.Model {
    static initiate(sequelize) {
        Schedule.init({
            habit: {
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
            modelName: 'Habit',
            tableName: 'habits',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Habit.belongsTo(db.User, { foreignKey: 'writer', targetKey: 'id' });
    }
};

module.exports = Habit;