//creating the dependancies 
const express = require('express');
const inquirer = require('inquirer');
// const mysql2 = require('mysql2');
const db = require("./db/connection");



//setting port 
const PORT = process.env.PORT || 3001
const app = express();


//express middlewear 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// db.query(`SELECT ? FROM ?`, ['title', 'role'], function(err, data) {
//     if (err) return console.log(err);

//     console.log(data);
// });

// const beginingQuestions = () => {
//     inquirer
//     .prompt([
//         {
//             type: "list",
//             message: "Welcome to your employee tracking system! Would you like to VIEW, ADD or UPDATE an employee?",
//             ame: "chooseAction",
//             choices: [
//                 {
//                     name: `VIEW Employees`,
//                     value: "VIEW_EMPLOYEES"
//                 },
//                 {
//                     name: "VIEW Employees by department",
//                     value: "VIEW_EMPLOYEES_By_Department"
//                 },
//                 {
//                     name: "VIEW Employees by manager",
//                     value: "VIEW_EMPLOYEES_By_Manager"
//                 },
//                 {
//                     name: "Add Employee",
//                     value: "Add_Empoyees"
//                 },
//                 {
//                     name: "Delete Employee",
//                     value: "Delete_Empoyees"
//                 },
//                 {
//                     name: "Update Employee role",
//                     value: "Update_Empoyees_Role"
//                 },
//                 {
//                     name: "Update Employee Manager",
//                     value: "Update_Empoyees_Manger"
//                 },
//                 {
//                     name: "Update Employee Deparment",
//                     value: "Update_Empoyees_Department"
//                 },
//                 {
//                     name: "Update Employee role",
//                     value: "Update_Empoyees_Role"
//                 },
//             ]
//         }
//     ])
        // .then(res => {
        //     var choice = res.choice;
        //     switch (choice) {
        //         case "VIEW_EMPLOYEES":
        //             viewEmployees();
        //             break;
        //         case "VIEW_EMPLOYEES_By_Department":
        //             viewEmployeesByDepartment();
        //             break;
        //         case "VIEW_EMPLOYEES_By_Manager":
        //             viewEmployeesByManager();
        //             break;
        //         case "Add_Empoyees":
        //                 addEmployees();
        //                 break;
        //     }
        // })
// }
// beginingQuestions();
function viewEmployees(){
    db.findAllEmployees()
    .then(([rows]) => {
        let employee = rows;
        console.log('----------');
        console.table(employee)
    })
    .then(() => startBegingQuestions());
}

const startApp = () => {
    inquirer
        .prompt([

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
                            this.connection.promise().query("SELECT * FROM department;", (err, res) => {
                                if (err) throw err;
                                console.table(res);
                                startApp()
                            });
                        }
                    });

                //roles 

                if ((response.pickedView === "Roles")) {
                    return this.connection.Query("SELECT * FROM roles", (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        startApp()
                    })
                };
                //where does connection come from check the acitivites. 
                //employees
                if (response.pickedView === "Employees") {
                    return this.connection.Query("SELECT * FROM employees", (err, res) => {
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
                                    return this.connection.query(`Insert into department VALUE ${response.departmentName}`, (err, res) => {
                                        if (err) throw err;
                                        query("SELECT * FROM departent", (err, res) => {
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
                                    return this.connection.query(`Insert into role VALUE ${response.newDepartment}, ${response.newSalery}, ${response.roleName} `, (err, res) => {
                                        if (err) throw err;
                                        return this.connection.query("SELECT * FROM departent", (err, res) => {
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
                        return this.connection.query(`Insert into department VALUE ${response.update}`, (err, res) => {
                            if (err) throw err;
                            connection.query("SELECT * FROM departent", (err, res) => {
                                if (err) throw err;
                                startApp()
                            })
                        })

                    })
            }
        }

,)
};

startApp();

function end() {
    console.log("Thank you, goodbye!")
    process.exit();
}
end()