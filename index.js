//creating the dependancies 
const express = require('express');
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const db = require("./db/connection");
const cTable = require('console.table');

//setting port 
const PORT = process.env.PORT || 3001
const app = express();


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
            }. then(res =>{
                let choice = res.choice;
                switch(choice) {
                    case "VIEW_DEPARTMENT":
                        viewDepartment();
                        break;
                    case "VIEW_EMPLOYEES":
                        viewEmployees();
                        break;
                    case "VIEW_ROLES":
                }
            })

            ]

                )
            }
                start();