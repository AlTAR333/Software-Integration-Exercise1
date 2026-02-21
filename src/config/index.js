const env = process.env.NODE_ENV || "dev";
require("dotenv").config({ path: `.env.${env}`});
const config = require(`./${env}`);
module.exports = config;