const mysql2 = require('mysql2');

const connection = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: "",
        database: 'employees_db'
    },
    // console.log(`Connected to the inventory_db database.`)
);

connection.connect(function (err){
    if (err) throw err;
});

module.exports = connection;