var orm = require("../config/orm.js");

var burger = {
    // Find all the burgers ordering by a day.
    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    // Insert a new burger in the burgers table.
    create: (cols, vals, cb) => {
        orm.insertOne('burgers', cols, vals, (res) => {
            cb(res);
        });
    },

    // Find a burger and then update it.
    update: (objColVals, condition, cb) => {
        orm.updateOne('burgers', objColVals, condition, (res) => {
            cb(res);
        });
    },

    // Del a burger
    delete: (vals, condition, cb) => {
        orm.deleteOne('burgers', vals, condition, (res) => {
            cb(res);
        })
    }
}

module.exports = burger;