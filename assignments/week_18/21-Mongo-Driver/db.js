var MongoClient = require('mongodb').MongoClient;

function DB() {
    this.db = null; // The MongoDB database connection
}

DB.prototype.connect = function (uri) {

    // Connect to the database specified by the connect string / uri

    // Trick to cope with the fact that "this" will refer to a different
    // object once in the promise's function.
    var _this = this;

    // This method returns a javascript promise (rather than having the caller
    // supply a callback function).

    return new Promise(function (resolve, reject) {
        if (_this.db) {
            // Already connected
            resolve();
        } else {
            var this = _this;

            // Many methods in the MongoDB driver will return a promise
            // if the caller doesn't pass a callback function.
            MongoClient.connect(uri)
                .then(
                    function (database) {

                        // The first function provided as a parameter to "then"
                        // is called if the promise is resolved successfuly. The
                        // "connect" method returns the new database connection
                        // which the code in this function sees as the "database"
                        // parameter

                        // Store the database connection as part of the DB object so
                        // that it can be used by subsequent method calls.

                        this.db = database;

                        // Indicate to the caller that the request was completed succesfully,
                        // No parameters are passed back.

                        resolve();
                    },
                    function (err) {

                        // The second function provided as a parameter to "then"
                        // is called if the promise is rejected. "err" is set to
                        // to the error passed by the "connect" method.

                        console.log("Error connecting: " + err.message);

                        // Indicate to the caller that the request failed and pass back
                        // the error that was returned from "connect"

                        reject(err.message);
                    }
                )
        }
    })
}
