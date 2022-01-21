const db = require("../models");
const Activity = db.activity;

exports.createActivity = (req, res) => {
    Activity.create({
        name: req.body.name,
        description: req.body.description,
        associationId: req.body.associationId
    }).then(comment => {
        res.status(201).send({message: "Activité créé avec succès!"});
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};

exports.updateActivity = (req, res) => {
    Activity.update({
        name: req.body.name,
        description: req.body.description,
        associationId: req.body.associationId
        }, {returning: true, where: {id: req.params.id}}
    ).then(comment => {
        res.status(200).send({message: "Activité modifié avec succès!"});
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};

exports.getAllActivityByAssociation = (req, res) => {
    Activity.findAll({
        where: {
            associationId: req.params.associationId
        }
    })
        .then(activities => {
            if (activities.length === 0) {
                return res.status(404).send({ message: "Aucune activités trouvées."});
            }

            return res.status(200).json(activities);
        }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};