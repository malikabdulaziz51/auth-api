const dotenv = require("dotenv");
const path = require("path");
const process = require("process");

if (process.env.NODE_ENV === "test") {
  dotenv.config({
    path: path.resolve(process.cwd(), ".test.evn"),
  });
} else {
  dotenv.config();
}
/* istanbul ignore file */
const config = {
  app: {
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    port: process.env.PORT,
    debug: process.env.NODE_ENV === "development" ? { request: ["error"] } : {},
  },
  database: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  },
};

module.exports = config;
