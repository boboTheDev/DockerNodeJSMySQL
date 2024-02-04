const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const router = require('./routers/router');

const app = express();

app.use(cors());


app.use(express.json({ limit: "10kb" }));

app.use("/", router);


module.exports = app;

