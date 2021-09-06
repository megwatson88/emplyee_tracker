const { response } = require('express');
const express = require('express');
const inquirer = require('inquirer');
// const mysql2 = require('mysql2');
// const Connection = require('mysql2/typings/mysql/lib/Connection');



const PORT = process.env.PORT || 3001
const app = express();

//express middlewear 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//test 
// app.get('/', (req, res)=>{
//     res.json({
//         message: 'hello world'
//     });
// });


// inquirer employee questions


const startApp = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Welcome to your employee tracking system! Would you like to VIEW, ADD or UPDATE an employee?",
                choices: ["VIEW", "ADD", "UPDATE", "END"]
            }
        ])
        .then((response) => {

            //if chooses view 
            if (response.chooseView === "VIEW") {
                inquirer
                    .prompt({
                        name: "pickedView",
                        type: "list",
                        choices: ["Departments", "Roles", "Employees"]
                    })

                    //departments
                    .then((response) => {
                        if (response.chooseView === "Departments") {
                            connection.Query("SELECT * FROM department", (err, res) => {
                                if (err) throw err;
                                console.log(res);
                                startApp()
                            });
                        }
                    });

                //roles 
                if ((response.chooseView === "Roles")) {
                    connection.Query("SELECT * FROM roles", (err, res) => {
                        if (err) throw err;
                        console.log(res);
                        startApp()
                    })
                };

                //employees
                if (response.chooseView === "Employees") {
                    connection.Query("SELECT * FROM employees", (err, res) => {
                        if (err) throw err;
                        console.log(res);
                        startApp()
                    });
                };
            };
        })
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
                        .then((response)=>{
                            connection.query(`Insert into department VALUE ${response.departmentName}`, (err, res)=> {
                                if (err) throw err;
                                connection.query("SELECT * FROM departent", (err, res)=> {
                                    if (err) throw err;
                                    startApp()
                                })
                            })
                        })

                }
                //start if roles
                then((response) => {
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
                                message:"Please put in the new department",
                                name: "newDepartment"
                            },
                            )
                            .then((response)=>{
                                connection.query(`Insert into role VALUE ${response.newDepartment}, ${response.newSalery}, ${response.roleName} `, (err, res)=> {
                                    if (err) throw err;
                                    connection.query("SELECT * FROM departent", (err, res)=> {
                                        if (err) throw err;
                                        startApp()
                                    })
                                })
                            })
                            }}
                            .then((response)=>{
                                if 
                            })
            }
            )
    }
}






//         {
//             type: input,
//             name: first_name,
//             message: "What is the employee's first name?"
//         },
//         {
//             type: input,
//             name: last_name,
//             message: "What is the employee's last name?"
//         },
//         {
//             type: input,
//             name: role,
//             message: "What is the employee's role?"
//         },
//         {
//             type: list,
//             name: department,
//             message: "What department is this employee in?",
//             choices: ['Leadership', 'Marketing', 'Sales', 'HR', 'Finance']
//         },
//         {
//             type: input,
//             name: salary,
//             message: "What is the employee's salary?"
//         },
//         {
//             type: input,
//             name: last_name,
//             message: "What is the employee's last name?"
//         },
//         {
//             type: input,
//             name: manager_name,
//             message: "Who is the manager?"
//         },
//         {
//             type: input,
//             name: manager_id,
//             message: "What is the manager's id?"
//         },
//         {
//             type: input,
//             name: last_name,
//             message: "What is the employee's last name?"
//         },
