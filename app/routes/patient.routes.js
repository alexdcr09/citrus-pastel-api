const controller = require("../controllers/patient.controller");

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/patients", controller.createPatient);
    app.get("/api/patients/:id", controller.getPatientById);
    app.put("/api/patients/:id", controller.updatePatient);
    app.get("/api/patients/user/:userId", controller.getAllPatientByUser);
}