module.exports = (sequelize, Sequelize) => {
    return sequelize.define("associations", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        concept: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
};