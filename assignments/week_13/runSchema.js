require("dot-env");
var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: process.env.DATABASE_PASSWORD,
    database: "top_songsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    let artist = 'Bryan Adams';
    let song = 'White Christmas'
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "Which action you want to perform?",
            choices: [
                "search specific artist",
                "search top songs based on top score",
                "search songs between a range",
                "search specific songs from 5000 top songs"
            ]
        }
    ]).then(function(answers){
        switch (answers.choice){
            case "search specific artist":
                searchSongsBySpecificArtist(artist);
                break;
            case "search top songs based on top score":
                searchTopArtists();
                break;
            case "search songs between a range":
                searchBySpecificRange();
                break;
            case "search specific songs from 5000 top songs":
                searchTopSongBySpecificArtist(song);
                break;
            default:
                console.log('Sorry, we are out of choice.');
        }
        connection.end();
    });
});

function searchSongsBySpecificArtist(artist) {
    console.log(artist);
    connection.query(`SELECT * FROM top5000 WHERE artist = '${artist}'`, function (err, res) {
        if (err) {
            throw err;
        }
        console.log("-------------Task 1 - Query all data for songs by a specific artist---------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].artist + " | " + res[i].song_name + " | " + res[i].year);
            // console.log(res);
        }
        console.log("--------------------------------------------------------------------------");
    });
}

function searchTopArtists() {
    // 'SELECT * FROM top5000 order by top_score desc LIMIT 10;'
    connection.query('SELECT * FROM top5000 GROUP BY artist HAVING COUNT(*) > 1;', function (err, res) {
        if (err) {
            throw err;
        }
        console.log("-------------Task 2 - Top artist by score---------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].artist + " | " + res[i].song_name + " | " + res[i].year + " | " + res[i].top_score);
            // console.log(res);
        }
        console.log("--------------------------------------------");
    });
}

function searchBySpecificRange() {
    connection.query('SELECT * FROM top5000 WHERE top_score BETWEEN 31.0540 AND 39.903;', function (err, res) {
        if (err) {
            throw err;
        }
        console.log("-------------Task 3 - search all data contained a specific range---------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].artist + " | " + res[i].song_name + " | " + res[i].year);
            // console.log(res);
        }
        console.log("--------------------------------------------");
    });
}

function searchTopSongBySpecificArtist(song) {
    connection.query(`SELECT * FROM top5000 WHERE song_name = '${song}' order by top_score desc LIMIT 1;`, function (err, res) {
        if (err) {
            throw err;
        }
        console.log("-------------Task 4 - search specific song in the top 5000--------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].artist + " | " + res[i].song_name + " | " + res[i].year + " | " + res[i].top_score);
            // console.log(res);
        }
        console.log("--------------------------------------------------------------------------");
    });
}