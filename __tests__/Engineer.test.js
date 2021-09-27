const { test } = require('@jest/core');
const Engineer = require('../lib/Engineer');

test('Create Engineer Object', () => {
    const engineer = new Engineer;

    expect(typeof(engineer)).toBe('object');
});

test('Create name for Engineer', () => {
    const name = "John";
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name);
});

test('Create Role for engineer', () => {
    const role = "Engineer";
    const engineer = new Engineer('John', '1234', 'test@test.com', role);
    expect(engineer.role).toBe(role);
});

test('Create Github for engineer', () => {
    const gitHub = "githubuser@github.com";
    const engineer = new Engineer('John', '1234', 'test@test.com', gitHub);
    expect(engineer.gitHub).toBe(gitHub);
});