const { response } = require('express');
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql');
const Connection = require('mysql2/typings/mysql/lib/Connection');



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

                .then((response) => {

                    //if chooses view 
                    if (response.chooseView === "VIEW") {
                        inquirer
                            .prompt ({
                                name: "pickedView",
                                type: "list",
                                choices: ["Departments", "Roles", "Employees"]
                            })
                            .then((response)=>{

                            })
                    }

                }
                )
        ]
        )
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
// ])}
//     //.then