let UserSearch = require("./userSearch.js");
let moment = require("moments");
function WeatherAdmin(

){
    this.searches = [];

    this.newUserAdmin = function (username, location, created) {
        this.users.push(new UserSearch(username, location));
    };

    this.newUserSearch = function(name, location){
        let newUserSearch = new UserSearch(name, location);
        let response = newUserSearch.getWeather();
        moment(format(newUserSearch.date, 'yy-mm-dd'));
        this.searches.push(newUserSearch);
    };
    this.getData = function(){
        return this.searches;
    };
}

module.exports = WeatherAdmin;