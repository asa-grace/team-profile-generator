const Employee = require('../lib/Employee');

// Employee object
test('creates an Employee object', () => {
    const employee = new Employee('John');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('john@gmail.com');
});

test('create name for the employee', () => {
    const name = "John";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('create id for employee', () => {
    const id = "1234";
    const employee = new Employee(id);
    expect(employee.id).toBe(id);
});

test('create email for employee', () => {
    const email = "test@test.com";
    const employee = new Employee(email);
    expect(employee.email).toBe(email);
});

test('create role for employee', () => {
    const role = "employee";
    const employee = new Employee(role);
    expect(employee.role).toBe(role);
});