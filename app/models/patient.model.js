module.exports = (sequelize, Sequelize) => {
    return sequelize.define("patients", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pathology: {
            type: Sequelize.STRING,
            allowNull: false
        },
        statut: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
};