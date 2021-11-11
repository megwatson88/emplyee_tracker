//creating the dependancies 
const express = require('express');
const inquirer = require('inquirer');
const db = require("./db/connection");
const consoleTable = require('console.table');

//setting port 
const PORT = process.env.PORT || 3001
const app = express();

db.connect(err => {
    if (err) throw err;
    console.log("connected to database");
    
})
//express middlewear 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


function start() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "chocie",
                message: "What would you like to do?",
                choices: [
                    {
                        name: "View Department",
                        value: "VIEW_DEPARTMENT"
                    },
                    {
                        name: "View Employees",
                        value: "VIEW_EMPLOYEES"
                    },
                    {
                        name: "View Roles",
                        value: "VIEW_ROLES"
                    },
                    {
                        name: "Add an Employee",
                        value: "ADD_EMPLOYEE"
                    },
                    {
                        name: "Update Employee",
                        value: "UPDATE_EMPLOYEE"
                    },
                    {
                        name: "End",
                        value: "END"
                    },

                ]
            }
        ]).then(res => {
            let choices = res.choices;
            switch (choices) {
                case "VIEW_DEPARTMENT":
                    viewDepartment();
                    break;
                case "VIEW_EMPLOYEES":
                    viewEmployees();
                    break;
                case "VIEW_ROLES":
                    viewEmployees();
                    break;
                case "ADD_EMPLOYEE":
                    addEmployee();
                    break;
                case "UPDATE_EMPLOYEE":
                    updateEmployee();
                    break;
                case "END":
                    end();
                    break;
            }
        }
        );
}


function viewDepartment() {
    var query = "SELECT * FROM department";
    db.query(query, function (err, res) {
        console.log('=========');
        console.table(res);
        start();
    })
}
function viewEmployees() {
    var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id";
    db.query( query, function (err, res) {
        console.log('=========');
        console.table(res);
        start();
    })
};

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the employee's first name?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the employee's last name?"
            },
            {
                type: "input",
                name: "role_id",
                message: "What is the employee's role id?"
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is the employee's manager id?"
            }
        ]).then(res => {
            let first_name = res.first_name;
            let last_name = res.last_name;
            let role_id = res.role_id;
            let manager_id = res.manager_id;
            db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [first_name, last_name, role_id, manager_id], function (err, res) {
                if (err) throw err;
                console.table(res);
                start();
            });
        })
}

start();