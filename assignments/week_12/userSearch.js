//UserSearch constructor object

let weather = require("weather-js");

function UserSearch(
    username,
    location,
    created
){
    this.username = username;
    this.location = location;
    this.created = created;
    this.date = Date.now();
}

UserSearch.prototype.getWeather = () => {
    // Options: 
    // search:     location name or zipcode 
    // degreeType: F or C 
    let temp_location = '';
    if (this.username && this.location) {
        let response = '';
        
        switch (this.created) {
            case true:
                weather.find({ search: this.location, degreeType: 'F' }, function (err, result) {
                    if (err) console.log(err);
                    return JSON.stringify(result, null, 2);
                });
                break;
            case false:
                weather.find({ search: this.location, degreeType: 'F' }, function (err, result) {
                    if (err) console.log(err);
                    console.log(JSON.stringify(result, null, 2));
                });
                break;
            default:
                break;
        }
    }
}

module.exports = UserSearch;