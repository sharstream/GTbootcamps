var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db ' + err.stack);
        return;
    }
    console.log('Connection established as id ' + connection.threadId);
});

module.exports = connection;