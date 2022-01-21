const controller = require("../controllers/comment.controller");

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/comments", controller.createComment);
    app.get("/api/comments/patients/:patientId", controller.getAllCommentByPatient);
    app.get("/api/comments/:id", controller.getCommentById);
    app.put("/api/comments/:id", controller.updateComment);
}