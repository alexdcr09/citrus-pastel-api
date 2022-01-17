const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();

function initial() {
    Role.create({
        id: 1,
        name: "free"
    });

    Role.create({
        id: 2,
        name: "basic"
    });

    Role.create({
        id: 3,
        name: "pro"
    });
    Role.create({
        id: 4,
        name: "expired"
    });
}

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Citrus application." });
});

require('./app/routes/auth.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});