const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findEmployeesAll(){
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
    }
    findManagerAll(){
        return this.connection.promise().query('Select id, first_name, last_name FROM employee WhERE id != ?');
    }
    createEmployee(employee){
        return this.connection.promise().query('INSERT INTO employee SET ?', employee);
    }
    removeEmployee(employeeId){
        return this.connection.promise().query('DELETE FOMR employee WHERE id = ?', employeeId);
    }
    updateManager(employeeId, managerId){
        return this.connection.promise().query("UPDATE empluyee SET manager_id = ? WHERE ID = ?", [managerId, employeeId])
    }
    findRoles(){
        return this.connection.promise().query('SELECT role.id, role.title, departentment.name AS departemnt, role.salary FROM role')
    }
    createRole(role){
        return this.connection.promise().query('INSERT INTO role SET ?', role);
    }
    findAllDepartments(){
        return this.connection.promise().query('SELECT * FROM department');
    }
    findEmployeesAllByDepartment(department_id){
        return this.connection.promise().query('SELECT * FROM employee WHERE department_id = ?', department_id);
    }
    
}

module.exports = new DB(connection);
