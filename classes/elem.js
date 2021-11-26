class Elem {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }

  html(text) {
    this.selector.textContent = text;
    return this;
  }

  append(text) {
    this.selector.append(text);
    return this;
  }

  prepend(text) {
    this.selector.prepend(text);
    return this;
  }

  attr(name, value) {
    this.selector.setAttribute(name, value);
    return this;
  }
}

export default Elem;
