const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Rog', 0, 'lovecore@pm.me');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Rog', 0, 'lovecore@pm.me');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Rog', 0, 'lovecore@pm.me');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Rog', 0, 'lovecore@pm.me');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', () => {
    const employee = new Employee('Rog', 0, 'lovecore@pm.me');

    expect(employee.getRole()).toEqual("Employee");
}); 