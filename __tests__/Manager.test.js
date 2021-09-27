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

test('create id for manager', () => {
    const id = "1234";
    const manager = new Manager(id);
    expect(manager.id).toBe(id);
});

test('create email for manager', () => {
    const email = "test@test.com";
    const manager = new Manager(email);
    expect(manager.email).toBe(email);
});

test('create role for manager', () => {
    const role = "manager";
    const manager = new Manager(role);
    expect(manager.role).toBe(role);
});

test('create office number for manager', () => {
    const officeNumber = "307";
    const manager = new Manager(officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});