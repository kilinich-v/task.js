class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getFullName = `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
    this.getCourse = `${new Date().getFullYear() - year}-й курс`;
  }
}

export default Student;
