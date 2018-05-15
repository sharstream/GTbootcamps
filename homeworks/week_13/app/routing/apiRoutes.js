//api routes
let friends = require('../data/friends.js');
let path = require('path');
module.exports = (app) => {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        friends.push(req.body);

        //add for loop to traverse the friends arrays.

        friends.sort( (friendOne, friendTwo) => {
            var totalDifference = 0;
            var friendOne_diff = friendOne['scores'].reduce((total, amount) => total + amount);
            var friendTwo_diff = friendTwo['scores'].reduce((total, amount) => total + amount);
            totalDifference = friendOne_diff - friendTwo_diff;
            return Math.abs(totalDifference);
        });

        res.json({name: friends[0]['name'], photo: friends[0]['photo']}); // KEY LINE
    });

    app.post('/api/clear', function (req, res) {
        // Empty out the arrays of data
        friends = [];
        console.log(friends);
    });
}