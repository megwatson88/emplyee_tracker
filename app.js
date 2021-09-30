//creating the dependancies 
const express = require('express');
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const { response } = require('express');
//setting port 
const PORT = process.env.PORT || 3001
const app = express();

const db = mysql2.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: '',
        database: 'employees_db'
    },
    console.log(`Connected to the inventory_db database.`)
);
//express middlewear 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




// inquirer employee questions


const startApp = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Welcome to your employee tracking system! Would you like to VIEW, ADD or UPDATE an employee?",
                choices: ["VIEW", "ADD", "UPDATE", "Delete"],
                name: "chooseAction"
            }
        ])
        .then((response) => {

            //if chooses view 
            if (response.chooseAction === "VIEW") {
                inquirer
                    .prompt({
                        name: "pickedView",
                        type: "list",
                        choices: ["Departments", "Roles", "Employees"]
                    })

                    //departments
                    .then((response) => {
                        if (response.pickedView === "Departments") {
                            connection.Query("SELECT * FROM department", (err, res) => {
                                if (err) throw err;
                                console.table(res);
                                startApp()
                            });
                        }
                    });

                //roles 
                if ((response.pickedView === "Roles")) {
                    connection.Query("SELECT * FROM roles", (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        startApp()
                    })
                };
                //where does connection come from check the acitivites. 
                //employees
                if (response.pickedView === "Employees") {
                    connection.Query("SELECT * FROM employees", (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        startApp()
                    });
                };
            };

            //chooses add
            if (response.chooseAction === "ADD") {
                inquirer
                    .prompt(
                        {
                            name: "chooseAdd",
                            type: "list",
                            message: "Would you like to add to Employee, Departments or Roles?",
                            choices: ["Employee", "Roles", "Departments"]
                        }
                    ).then((response) => {
                        if (response.chooseAdd === "Departments") {
                            inquirer
                                .prompt({
                                    type: "input",
                                    message: "Enter Department Name",
                                    name: "departmentName"
                                })
                                .then((response) => {
                                    connection.query(`Insert into department VALUE ${response.departmentName}`, (err, res) => {
                                        if (err) throw err;
                                        connection.query("SELECT * FROM departent", (err, res) => {
                                            if (err) throw err;
                                            startApp()
                                        })
                                    })
                                })

                        }
                        //start if roles

                        if (response.chooseAdd === "Roles") {
                            inquirer
                                .prompt({
                                    type: "input",
                                    message: "Enter New Role Title",
                                    name: "roleName"
                                },
                                    {
                                        type: "input",
                                        message: "Please put in the new salery",
                                        name: "newSalery"
                                    },
                                    {
                                        type: "input",
                                        message: "Please put in the new department",
                                        name: "newDepartment"
                                    },
                                )
                                .then((response) => {
                                    connection.query(`Insert into role VALUE ${response.newDepartment}, ${response.newSalery}, ${response.roleName} `, (err, res) => {
                                        if (err) throw err;
                                        connection.query("SELECT * FROM departent", (err, res) => {
                                            if (err) throw err;
                                            startApp()
                                        })
                                    })
                                })
                        };
                        if (response.chooseAdd === "Employee") {
                            inquirer
                                .prompt[
                                {
                                    type: input,
                                    name: first_name,
                                    message: "What is the employee's first name?"
                                },
                                {
                                    type: input,
                                    name: last_name,
                                    message: "What is the employee's last name?"
                                },
                                {
                                    type: input,
                                    name: role,
                                    message: "What is the employee's role?"
                                },
                                {
                                    type: list,
                                    name: department,
                                    message: "What department is this employee in?",
                                    choices: ['Leadership', 'Marketing', 'Sales', 'HR', 'Finance']
                                },
                                {
                                    type: input,
                                    name: salary,
                                    message: "What is the employee's salary?"
                                },

                                {
                                    type: input,
                                    name: manager_name,
                                    message: "Who is the manager?"
                                },
                                {
                                    type: input,
                                    name: manager_id,
                                    message: "What is the manager's id?"
                                },
                                {
                                    type: input,
                                    name: last_name,
                                    message: "What is the employee's last name?"
                                }

                            ]
                        }


                    }
                    )
            };
            if (response.chooseAction === "Update") {
                inquirer
                    .prompt({
                        name: "update",
                        type: "list",
                        choices: ["Employee", "Role", "Manager"],
                        message: "What would you like to update?"
                    })
                    .then((response) => {
                        connection.query(`Insert into department VALUE ${response.update}`, (err, res) => {
                            if (err) throw err;
                            connection.query("SELECT * FROM departent", (err, res) => {
                                if (err) throw err;
                                startApp()
                            })
                        })

                    })
            }
        }

,)};

startApp();

