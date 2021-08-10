class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = Math.floor(Math.random);
        this.email = 'john@gmail.com';
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return `${this.id}`;
    }

    getEmail() {
        return `${this.email}`
    }

    getRole() {
        return Employee;
    }
}

module.exports = Employee