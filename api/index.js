// Express app setup
const express = require("express");
const cors = require("cors");

const database = require('./db');
const Paciente = require('./models/paciente');
const Atendimento = require('./models/atendimento');
const Prontuario = require('./models/prontuario');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
    try {
        const resultado = await database.sync({ force: true });
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();

// Connection to mysql database
/*const mysql = require("mysql");
const keys = require("./keys");

function createConnectionToDatabase() {
    return mysql.createConnection({
        host: keys.mysqlHost,
        user: keys.mysqlUser,
        password: keys.mysqlPass,
        database: keys.mysqlName,
        port: keys.mysqlPort
    });
}

let connection = createConnectionToDatabase();
let isConnected = false;

const connectInterval = setInterval(() => {
    if (!isConnected) {
        connection.connect((err) => {
            if (err) {
                console.log(`Waiting for connection: ${err}`);
                isConnected = false;
                connection.end();
                connection = createConnectionToDatabase();
            }
            else {
                console.log("Connected to database!");
                isConnected = true;
                clearInterval(connectInterval);
            }
        });
    }
}, 10000);

app.post("/retry-connection", (req, res) => {
    const { password } = req.body;

    if (password != keys.mysqlPass) {
        return res.status(401).send({ 
            Error: "Wrong database password" 
        });
    }

    connection.end();
    connection = createConnectionToDatabase();
    connection.connect((err) => {
        if (err) {
            console.log(`Couldn't connect to database: ${err}`);
            isConnected = false;
        }
        else {
            console.log("Connected to database!");
            isConnected = true;
        }
    })

    return res.status(isConnected ? 200 : 503).send({
        "IsConnected": isConnected,
    });
});

// Express route handlers
app.get("/", (req, res) => {
    res.send(isConnected ? "Banco conectado" : "Não foi possível realizar conexão");
});

app.get("/tables", (req, res) => {
    sqlQuery = "SHOW TABLES";
    connection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
*/
app.listen(5000, (err) => {
    console.log("Listening on port 5000");
});