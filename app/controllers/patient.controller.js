const db = require("../models");
const Patient = db.patient;

exports.getAllPatientByUser = (req, res) => {
    Patient.findAll({
            where: {
                userId: req.params.userId
            }
        },
        {
            include: db.user
        }).then(patients => {
        if (patients.length === 0) {
            return res.status(404).send({message: "Aucun patients trouvés."});
        }

        return res.status(200).json(patients);
    })
};

exports.getPatientById = (req, res) => {
    Patient.findByPk(req.params.id, {
            include: db.user
        }).then(patient => {
        if (!patient) {
            return res.status(404).send({message: "Aucun patient trouvé."});
        }

        return res.status(200).json(patient);
    })
};

exports.createPatient = (req, res) => {
    Patient.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        pathology: req.body.pathology,
        statut: req.body.statut,
        userId: req.body.userId
    }).then(patient => {
        res.status(201).send({message: "Patient créé avec succès!"});
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};

exports.updatePatient = (req, res) => {
    Patient.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            pathology: req.body.pathology,
            statut: req.body.statut,
        }, {returning: true, where: {id: req.params.id}}
    ).then(patient => {
        res.status(200).send({message: "Patient modifié avec succès!"});
    })
        .catch(err => {
            res.status(500).send({message: err.message});
        })
};