const controller = require("../controllers/institution.controller");

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/institution", controller.createInstitution);
    app.get("/api/institution", controller.getAllInstitutions);
    app.put("/api/institution/:id", controller.updateInstitution);
}