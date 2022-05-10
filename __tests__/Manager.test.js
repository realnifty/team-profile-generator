const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Rog', 0, 'lovecore@pm.me', 0);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets employee role', () => {
    const manager = new Manager('Rog', 0, 'lovecore@pm.me');

    expect(manager.getRole()).toEqual('Manager');
});