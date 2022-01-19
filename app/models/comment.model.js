module.exports = (sequelize, Sequelize) => {
    return sequelize.define("comments", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        commentary: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        file: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
};