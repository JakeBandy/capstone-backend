const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection pool...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: HOST,
        user: USERNAME,
        password: PASSWORD,
        database: "users",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;