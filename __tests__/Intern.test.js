const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Rog', 0, 'lovecore@pm.me', 'Lone Star College');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Rog', 0, 'lovecore@pm.me', 'Lone Star College');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets employee role', () => {
    const intern = new Intern('Rog', 0, 'lovecore@pm.me', 'Lone Star College');

    expect(intern.getRole()).toEqual("Intern");
}); 