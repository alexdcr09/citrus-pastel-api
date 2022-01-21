const db = require("../models");
const User = db.user;

exports.getUserByInstitution = (req, res) => {
    User.findAll({
        where: {
            institutionId: req.params.institutionId
        }
    }).then(users => {
        if (users.length === 0) {
            return res.status(404).send({message: "Aucun employés trouvé pour cet établissement."});
        }

        return res.status(200).json(users);
    }).catch(err => {
        return res.status(500).send({message: err.message});
    });
};
