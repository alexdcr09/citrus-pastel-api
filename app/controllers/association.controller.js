const db = require("../models");
const Association = db.association;

exports.getAllAssociations = (req, res) => {
    Association.findAll()
        .then(associations => {
            if (associations.length === 0) {
                return res.status(404).send({ message: "Aucune associations trouvées."});
            }

            return res.status(200).json(associations);
        }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.getAssociationById = (req, res) => {
    Association.findOne({
        where: {
            id: req.params.id
        }
    }).then(association => {
        if (!association) {
            return res.status(404).send({ message: "Aucune association trouvée."});
        }

        return res.status(200).json(association);
    });
};

exports.createAssociation = (req, res) => {
    Association.create({
        name: req.body.name,
        concept: req.body.concept,
        category: req.body.category
    }).then(association => {
        res.status(201).send({ message: "Association créée avec succès!"});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.updateAssociation = (req, res) => {
    Association.update({
        name: req.body.name,
        concept: req.body.concept,
        category: req.body.category
    }, {returning: true, where: { id: req.params.id }}
    ).then(association => {
        res.status(200).send({ message: "Association modifiée avec succès!"});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};