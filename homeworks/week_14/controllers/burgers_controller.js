var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

//get all burgers routes
router.get('/', (req, res) => {
    burger.all( (data) => {
        var handlebarObj = {
            burgers: data
        };
        console.log(handlebarObj);
        res.render('index', handlebarObj);
    });
});

//insert a burger route
router.post('/api/burgers', (req, res) => {
    burger.create(['mcDonald', true], [reg.body.burger_name, req.body.devored], (result) => {
        // Send back the ID of the new burger
        res.json({ id: result.id });
    });
});

//update a burger route
router.put('/api/burgers:id', (req, res) => {
    var condition = 'id = ' + req.params.id;

    console.log('condition ', condition);

    burger.update(
        {
            burger_name: req.body.burger_name,
            devored: reg.body.devored
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
});

//delete a burger route
router.delete('/api/burgers:id', (req, res) => {
    var condition = 'id = ' + req.params.id;

    burger.delete({
            id: req.body.id
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
});

module.exports = router;