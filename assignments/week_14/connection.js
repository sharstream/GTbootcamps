require("dotenv").load();
const mysql = require("promise-mysql");
const Character = require("./Character");

class Connection {
  constructor() {
    this.host = process.env.DB_HOST;
    this.port = 3306;
    this.user = process.env.DB_USER;
    this.password = process.env.DB_PASSWORD;
    this.database = process.env.DB_DATABASE;
  }

  connect() {
    return mysql.createConnection({
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.password,
      database: this.database
    });
  }

  queryOne(filter) {
    console.log(filter);
    const complete = this.connect().then( conn => {
      const result = conn.query(`SELECT * FROM characters WHERE routeName LIKE '${filter}'`);
      conn.end();
      return result;
    }).then( row => {
      return row;
    });

    return complete;
  }

  queryAll() {
    const complete = this.connect().then( conn => {
      const result = conn.query(`SELECT * FROM characters`);
      conn.end();
      return result;
    }).then( rows => {
      return rows;
    });

    return complete;
  }

  push(newCharacter) {
    const newRouteName = newCharacter.standardize();
    const complete = this.connect().then( conn => {
      const result = conn.query(`INSERT INTO characters (name, role, age, force_points, routeName) VALUES ('${newCharacter.name}', '${newCharacter.role}', ${newCharacter.age}, ${newCharacter.forcePoints}, '${newRouteName}');`);
      conn.end();
      return result;
    }).then( data => {
      return data;
    });

    return complete;
  }
}

module.exports = Connection;

