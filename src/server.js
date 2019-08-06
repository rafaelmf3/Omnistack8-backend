const express = require("express");

require("./config/mongo");

const routes = require("./routes");

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3333);
