export class Base {
  constructor() {
    this._params = {
      page: 1
    };
  }
}

export class Filter extends Base {
  constructor() {
    super();
  }
}

export class Sort extends Base {
  constructor() {
    super();
  }
}
