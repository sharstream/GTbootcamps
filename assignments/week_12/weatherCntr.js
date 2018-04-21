//main.js
let WeatherAdmin = require("./weatherAdmin.js");
let UserSearch = require("./userSearch.js");
let fs = require("fs");
let logger = fs.createWriteStream('newUserSearch.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
});

let temp_user = new UserSearch('daverioverde', 'San Francisco', false);
temp_user.getWeather();

let admin = new WeatherAdmin();
admin.newUserSearch(temp_user.username, temp_user.location);

admin.getData.forEach(element => {
    logger.writeFile('newUserSearch.txt', 'utf-8', 'New Weather Search, ' + 'username: ' +element.username + ', location:' + element.location, 
        function(err){
            if (err) console.log(err);
            console.log('New Weather Search, ' + 'username: ' + element.username + ', \nlocation:' + element.location);
    });
});
