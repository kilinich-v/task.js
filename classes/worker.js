class Worker {
  #name;
  #surname;
  #rate;
  #days;

  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }

  get getName() {
    return this.#name;
  }

  get getSurname() {
    return this.#surname;
  }

  get getRate() {
    return this.#rate;
  }

  get getDays() {
    return this.#days;
  }

  get getSalary() {
    return this.#rate * this.#days;
  }
}

export default Worker;
