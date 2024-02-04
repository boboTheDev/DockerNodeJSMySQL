const dotenv = require("dotenv");
var path = require('path');
const db = require("./src/models");

if (process.env.NODE_ENV.trim() === "development"){
  dotenv.config({ path: './config.dev.env' }); 
} else if (process.env.NODE_ENV.trim() === "test"){
  dotenv.config({ path: './config.test.env' }); 
} else if (process.env.NODE_ENV.trim() === "production"){
  dotenv.config({ path: './config.prod.env' }); 
}

const app = require("./src/app");

console.log("NODE_ENV: " + process.env.NODE_ENV)

var expressPort = process.env.EXPRESS_PORT;

app.listen(expressPort, () => {
  console.log("EXPRESS server on port:", expressPort);
});