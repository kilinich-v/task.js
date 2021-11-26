import Elem from './classes/elem.js';
import Student from './classes/student.js';
import Worker from './classes/worker.js';
import { Base, Filter, Sort } from './classes/base.js';

const elem = new Elem('h1');

elem.html('Hello');
elem.append('!').prepend('!');

const student = new Student('Иван', 'Иванов', 2018);

console.log(student.getCourse);

const worker = new Worker('Иван', 'Иванов', 100, 31);

console.log(worker.getName);
console.log(worker.getSurname);
console.log(worker.getRate);
console.log(worker.getDays);
console.log(worker.getSalary);

const base = new Base();
const filter = new Filter();
const sort = new Sort();

console.log(
  'base.params.page не может переопределить значение свойства других экземпляров, даже если эти классы насдеуют Base.'
);

console.log(base.params.page); // 1

base.params.page = 2;
console.log(sort.params.page); // 1
console.log(filter.params.page); // 1

console.log(
  'sort.params.page не может переопределить значение свойства других экземпляров класса Base, даже если эти классы насдеуют Base.'
);

sort.params.page = 3;
console.log(sort.params.page); // 3
console.log(filter.params.page); // 1
