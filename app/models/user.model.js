module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
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
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        socialSecurity: {
            type: Sequelize.STRING,
            allowNull: true
        },
        siret: {
            type: Sequelize.STRING,
            allowNull: true
        },
        company: {
            type: Sequelize.STRING,
            allowNull: true
        },
        job: {
            type: Sequelize.STRING,
            allowNull: true
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        requierement: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        offer: {
            type: Sequelize.STRING,
            allowNull: true
        },
    });

    return User;
};