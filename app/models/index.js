const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    {
        database: config.DB,
        username: config.USER,
        password: config.PASSWORD,
        port: config.PORT,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle

        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.patient = require("../models/patient.model")(sequelize, Sequelize);
db.association = require("../models/association.model")(sequelize, Sequelize);
db.comment = require("../models/comment.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});
db.patient.belongsTo(db.user);
db.comment.belongsTo(db.user);
db.comment.belongsTo(db.patient);
db.comment.belongsTo(db.association);

db.ROLES = ["free", "basic", "pro", "expired"];

module.exports = db;