INSERT INTO department (department_id, name)
VALUE 
    (1, "LEADERSHIP"),
    (2, "MARKETING"),
    (3, "SALES"),
    (4, "HR"),
    (5, "FINACE");

INSERT INTO roles (role_id, title, salary, department_id)
VALUE
    (1, "manager", 100000.00, 1),
    (2, "worker", 80000.00, 5)
;
INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id) 
VALUE
    (1, "Joe", "Doe", 2, 0 ),
    (2, "Jane", "Smith", 2, 0),
    (3, "Matt", "Watson", 1, 1),
    (4, "GABRIEL", "Campbell",1, 1),
    (5, "ROSIE", "BLACK", 2, 0);
