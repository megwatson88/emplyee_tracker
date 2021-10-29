const connection = require('../config/connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    findEmployeesAll(){
        return this.connection.promise().query('SELECT * FROM employee');
    }
    findManagerAll(){
        return this.connection.promise().query('SELECT * FROM manager');
    }
    createEmployee(employee){
        return this.connection.promise().query('INSERT INTO employee SET ?', employee);
    }
    createRole(role){
        return this.connection.promise().query('INSERT INTO role SET ?', role);
    }
    findAllDepartments(){
        return this.connection.promise().query('SELECT * FROM department');
    }
}

module.exports = new DB(connection);