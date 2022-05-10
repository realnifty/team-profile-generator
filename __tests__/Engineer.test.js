const Engineer = require('../lib/Engineer');
 
test('creates an Engineer object', () => {
    const engineer = new Engineer('name', 0, 'lovecore@pm.me', 'realnifty');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('name', 0, 'lovecore@pm.me', 'realnifty');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
 
test('gets employee role', () => {
    const engineer = new Engineer('name', 0, 'lovecore@pm.me', 'realnifty');

    expect(engineer.getRole()).toEqual("Engineer");
});