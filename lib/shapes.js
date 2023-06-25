class Shape {
  constructor() {
    this.color = 'black';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return '';
  }
}

class Circle extends Shape {
  constructor(text) {
    super();
    this.radius = 80;
    this.text = text;
  }

  render() {
    const circleElement = `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    const textElement = `<text x="150" y="110" text-anchor="middle" fill="${this.color}" font-size="60">${this.text}</text>`;
    return `<g>${circleElement}${textElement}</g>`;
  }
}

class Triangle extends Shape {
  render() {
    return '<polygon points="150,18 244,182 56,182" fill="' + this.color + '" />';
  }
}

class Square extends Shape {
  render() {
    return '<rect x="56" y="56" width="188" height="188" fill="' + this.color + '" />';
  }
}

module.exports = { Shape, Circle, Triangle, Square };