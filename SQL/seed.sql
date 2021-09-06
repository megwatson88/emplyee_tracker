INSERT INTO department (id, department_name)
VALUE 
    (1, "LEADERSHIP"),
    (2, "MARKETING"),
    (3, "SALES"),
    (4, "HR"),
    (5, "FINACE")
INSERT INTO role_id (id, title, salary, department_id)
VALUE
    (1, "manager", 100000.00, 1)
    (2, "worker", 80000.00, 0)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id, department) 
