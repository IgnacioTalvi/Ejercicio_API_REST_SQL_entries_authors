const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres¸",
  password: "123456",
  port: 5432,
});
module.exports = pool;
