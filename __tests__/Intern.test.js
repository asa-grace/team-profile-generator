const { test } = require('@jest/core');
const Intern = require('../lib/Intern');

test('Create an Intern Object', () => {
    const intern = new Intern;

    expect(typeof(intern)).toBe('object');
});

test('create name for Intern', () => {
    const name = 'John';
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
});

test('create role for intern', () => {
    const role = 'intern';
    const intern = new Intern('John', '1234', 'test@test.com', role);
    expect(intern.role).toBe(role);
});

test('create School for intern', () => {
    const school = 'UofU';
    const intern = new Intern('John', '1234', 'test@test.com', school);
    expect(intern.school).toBe(school);
});