const { test } = require('@jest/core');
const Manager = require('../lib/Manager');

test('Create a Manager Object', () => {
    const manager = new Manager;
    
    expect(typeof(manager)).toBe('object');
});

test('Create name for manager', () => {
    const name = "John";
    const manager = new Manager(name);
    expect(manager.name).toBe(name);
});


test('create role for manager', () => {
    const role = "manager";
    const manager = new Manager('John', '1234', 'test@test.com', role);
    expect(manager.role).toBe(role);
});

test('create office number for manager', () => {
    const officeNumber = "307";
    const manager = new Manager('John', '1234', 'test@test.com', officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});