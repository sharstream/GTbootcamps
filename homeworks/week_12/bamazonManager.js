// bamazonManager.js main application

let inquirer = require("inquirer");

let connection = require("./connection.js");

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected');
    console.log("connected as id " + connection.threadId);
    runSearch();
});

function runSearch() {
    inquirer
        .prompt([
            {
                name: "choice",
                type: "list",
                message: "Which action you want to perform?",
                choices: [
                    "View Products for Sale",
                    "View Low Inventory",
                    "Add New Product",
                    "Add to Inventory"
                ]
            }
        ])
        .then(function (answers) {
            switch (answers.choice) {
                case "View Products for Sale":
                    viewProducts();
                    break;
                case "View Low Inventory":
                    viewInventory();
                    break;
                case "Add New Product":
                    addProduct();
                    break;
                case "Add to Inventory":
                    addInventory();
                    break;
                default:
                    console.log('Sorry, we are out of choice.');
                    connection.end();
            }
        });
}

function viewProducts() {
    connection.query(`SELECT * FROM products`, function (err, res) {
        if (err) {
            throw err;
        }
        console.log("-------------View Products for Sale---------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("--------------------------------------------------");
        runSearch();
    });
};

function viewInventory() {
    connection.query('SELECT * FROM products WHERE stock_quantity < 5;', function (err, res) {
        if (err) {
            throw err;
        }
        console.log("-------------View Low Inventory---------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("----------------------------------------------");
        runSearch();
    });
};

function addProduct(){
    inquirer
      .prompt([
        {
            name: "product",
            type: "input",
            message: "Enter the product name?"
        },
        {
            name: "department",
            type: "list",
            message: "Select which department this product belongs?",
            choices: [
                "Amazon Fresh",
                "Echo & Alexa",
                "Electronic, Computer & Office",
                "Home, Garden $ Tools",
                "Toys, Kids & Baby"
            ]
        },
        {
            name: "price",
            type: "input",
            message: "How much cost this product?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            name: "stock_quantity",
            type: "input",
            message: "How many?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
      ])
      .then((answer) => {
        connection.query(
            "INSERT INTO products SET ?",
            {
                product_name: answer.product,
                department_name: answer.department,
                price: answer.price,
                stock_quantity: answer.stock_quantity
            }
        , (err, results, fields) => {
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            // fields will contain information about the returned results fields (if any)
            if (err) throw err;
            console.log("product inserted");
            console.log(results.insertId);
            runSearch();
        });
      });
}

function addInventory() {
    connection.query("SELECT * FROM products", function (err, results){
        inquirer
            .prompt([{
                    name: "choice",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "Which product would you like to add more quantities?"
                },
                {
                    name: "stock_quantity",
                    type: "input",
                    message: "How many?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ]).then((answer) => {
                let chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name === answer.choice) {
                        chosenItem = results[i];
                    }
                }
                let add_stock = chosenItem.stock_quantity + parseInt(answer.stock_quantity);
                connection.query(
                    "UPDATE products SET ?", [
                        {
                            stock_quantity: add_stock
                        },
                        {
                            item_id: chosenItem.id
                        }
                    ], (err, results, fields) => {
                        if (err) throw err;
                        console.log("More products added to " + chosenItem.product_name);
                        runSearch();
                    });
            });
    });  
}