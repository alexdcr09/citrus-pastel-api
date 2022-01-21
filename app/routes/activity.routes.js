const controller = require("../controllers/activity.controller");

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/activities", controller.createActivity);
    app.put("/api/activities/:id", controller.updateActivity);
    app.get("/api/activities/associations/:associationId", controller.getAllActivityByAssociation);
}