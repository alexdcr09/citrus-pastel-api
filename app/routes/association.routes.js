const controller = require("../controllers/association.controller");

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/associations", controller.createAssociation);
    app.get("/api/associations/:id", controller.getAssociationById);
    app.put("/api/associations/:id", controller.updateAssociation);
    app.get("/api/associations", controller.getAllAssociations);
}