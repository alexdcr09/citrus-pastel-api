const db = require("../models");
const Comment = db.comment;

exports.getAllCommentByPatient = (req, res) => {
    Comment.findAll({
        where: {
            patientId: req.params.patientId
        }
    }).then(comments => {
        if (!comments) {
            return res.status(404).send({ message: "Aucun suivi trouvé."});
        }

        return res.status(200).json(comments);
    }).catch(err => {
        return res.status(500).send({ message: err.message });
    });
};

exports.getCommentById = (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        }
    }).then(comment => {
        if (!comment) {
            return res.status(404).send({ message: "Aucun suivi trouvé."});
        }

        return res.status(200).json(comment);
    }).catch(err => {
        return res.status(500).send({ message: err.message });
    });
};

exports.createComment = (req, res) => {
    Comment.create({
        commentary: req.body.commentary,
        userId: req.body.userId,
        patientId: req.body.patientId
    }).then(comment => {
        res.status(201).send({ message: "Suivi créé avec succès!"});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.updateComment = (req, res) => {
    Comment.update({
        commentary: req.body.commentary
    }, {returning: true, where: { id: req.params.id }}
    ).then(comment => {
        res.status(200).send({ message: "Patient modifié avec succès!"});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};