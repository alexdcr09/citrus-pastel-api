const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

isPro = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "pro") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require pro Role!"
            });
            return;
        });
    });
};

isBasic = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "basic") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Basic Role!"
            });
        });
    });
};

isFree = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "free") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Free Role!"
            });
        });
    });
};

isProOrFreeOrBasic = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "pro") {
                    next();
                    return;
                }

                if (roles[i].name === "free") {
                    next();
                    return;
                }

                if (roles[i].name === "basic") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Pro or Free or Basic Role!"
            });
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isPro: isPro,
    isBasic: isBasic,
    isFree: isFree,
    isProOrFreeOrBasic: isProOrFreeOrBasic
};
module.exports = authJwt;