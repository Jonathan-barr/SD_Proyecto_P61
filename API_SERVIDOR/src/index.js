const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const db = require("./database.js");

var MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const cors = require("cors");

app.use(
    cors({
      origin: "*",
      optionsSuccessStatus: 200,
      methods: "GET, PUT, POST"
    })
  );

app.options('*',cors());

//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Nuestro primer WS Get
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/index.html"));
});

app.get("/datos", (req, res) => {
  db.consultarProductos()
    .then((val) => res.json(val))
    .catch((err) => console.error(err))
    .finally(() => client.close());
});

app.post("/insertDatos", (req, res) => {
  db.insertarProductos(req.body)
    .then((val) => res.json(val))
    .catch((err) => console.error(err))
    .finally(() => client.close());
});

app.post("/eliminarDatos", (req, res) => {
    db.insertarProductos(req.body)
      .then((val) => res.json(val))
      .catch((err) => console.error(err))
      .finally(() => client.close());
  });

//Iniciando el servidor
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
