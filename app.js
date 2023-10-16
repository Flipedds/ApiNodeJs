const express = require("express");
const Mongo = require("./Models/Mongo");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = require("./swaggerDef");
const connection = new Mongo().connect();
const app = express();
const cors = require("cors");

const options = {
  swaggerDefinition,
  apis: ["./Routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const petRoute = require("./Routes/pet.route");

app.use(express.json());

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/pet", petRoute);

app.listen(3000);
