const db = require("../models");
const Institution = db.institution;

exports.createInstitution = (req, res) => {
    Institution.create({
        name: req.body.name,
        address: req.body.address
    }).then(institution => {
        res.status(201).send({message: "Institution créée avec succès!"});
    }).catch(err => {
        res.status(500).send({message: err.message});
    })
};

exports.updateInstitution = (req, res) => {
    Institution.update({
            name: req.body.name,
            address: req.body.address,
        }, {returning: true, where: {id: req.params.id}}
    ).then(comment => {
        res.status(200).send({message: "Institution modifiée avec succès!"});
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};
