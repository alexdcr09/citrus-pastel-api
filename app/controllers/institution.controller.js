const db = require("../models");
const Institution = db.institution;

exports.getAllInstitutions = (req, res) => {
    Institution.findAll()
        .then(institutions => {
            if (institutions.length === 0) {
                return res.status(404).send({message: "Aucun établissement trouvé."});
            }

            return res.status(200).json(institutions);
        }).catch(err => {
        return res.status(500).send({message: err.message});
    });
};

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
