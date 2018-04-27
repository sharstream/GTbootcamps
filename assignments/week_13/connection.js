require("dot-env");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: process.env.DATABASE_PASSWORD,
    database: "play_musicDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected');
    console.log("connected as id " + connection.threadId);
    var sql = "INSERT INTO track (title, artist, genre) VALUES ?";
    var values = [
        ['Paradise', 'Coldplay', "Rock"],
        ['Tocixity', 'System of Down', "Hard Rock"],
        ['Infest', 'Papa Roach', "Metal"],
        ['Jurassic Song', 'Robin William', "Orchestra"]
    ];
    connection.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log("All records have been inserted");
    });

    let ids =[];

    function getTracks(){
        connection.query("SELECT * FROM track", (err, result) => {
            result.forEach(element => {
                if (element.genre === 'Rock') {
                    ids.push(element.id);
                }
                
                console.log('Title: ' + element.title + ' Artist: ' + element.artist + ' Genre: ' + element.genre + '\n');
            });
        });
    }
    // "SELECT id FROM track WHERE id IN(ids)"
    let find = "WHERE id =" + ids;

    //rock data retrieved from this query
    function printTRacks (){
        connection.query("SELECT * FROM track" + find, (err, result) => {
            result.forEach(element => {
                console.log('Title: ' + element.title + ' Artist: ' + element.artist + ' Genre: ' + element.genre + '\n');
            });
        });
    }
    connection.end();
});
