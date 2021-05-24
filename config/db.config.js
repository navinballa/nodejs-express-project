const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "us-cdbr-east-03.cleardb.com",
  user: "b257ae9f95d7dd",
  password: "badbc264",
  database: "heroku_12f1937794459fe",
  connectionLimit: 10,
});
/** Connection pool creation - END */
module.exports = db;