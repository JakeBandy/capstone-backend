const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection pool...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "capstone-db.crhitog4yyue.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "Jakers3737",
        database: "users",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;