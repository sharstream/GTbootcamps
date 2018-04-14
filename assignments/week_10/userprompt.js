// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer =  require("inquirer");

var geocoder = require("geocoder");

var apiKey = { key: "AIzaSyC0gZfYsjDXvYeWnMcm6WyAvcGj3FArV0U" };

var userInput = process.argv;

var city = process.argv[3];

var state = process.argv[4];

var array = city + ', ' + state;

const requireLetterNumber = function (value) {
    // /\w/.test(value) && /\d/.test(value)
    if (/\w/.test(value) && /\d/.test(value)) {
        return true;
    }

    return "Please enter one character and number";
}

inquirer.prompt([
    {
        type: "input",
        name: "first_name",
        message: "What's is your first name?"
    },
    {
        type: "input",
        name: "last_name",
        message: "What's your last name?"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your username: "
    },
    {
        type: "confirm",
        name: "user_confirm",
        message: "Are you sure?"
    },
    {
        type: "input",
        name: "phone",
        message: "What's your phone number",
        validate: function(value){
            if (value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i)){
                return true;
            }
            return "Please enter a valid number";
        }
    },
    {
        type: "password",
        name: "password",
        message: "Enter your password: ",
        mask: '*',
        validate: requireLetterNumber 
    },
    {
        type: "confirm",
        name: "username",
        message: "Are you sure?"
    },
    {
        type: "input",
        name: "city",
        message: "Enter your city: "
    }, 
    {
        type: "input",
        name: "state",
        message: "Enter your state: "
    },
    {
        type: "input",
        name: "method",
        message: "Select geolocation method: "
    },
    {
        type: "confirm",
        name: "geocode_method",
        message: "Are you sure?"
    }
]).then(answers => {
    // Use user feedback for... whatever!! 
    console.log(answers);

    if (answers.username === 'daverioverde' && answers.password === '123dave') {

        if (answers.method === 'option1') {
            geocoder.geocode(answers, function (error, result, apiKey) {
                if (error) {
                    console.log(error);
                }
                console.log(JSON.stringify(result, null, 2));
            });
        }

        else if (answers.method === 'option2') {
            geocoder.reverseGeocode(33.7489, -84.3789, function (err, data) {
                if (err) {
                    console.log(err);
                }
                console.log(JSON.stringify(data));
            }, apiKey);
        }
    }
}).catch(function(err){
    if (err) {
        console.log(err);
    }
});