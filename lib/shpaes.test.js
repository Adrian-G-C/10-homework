const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('renders circle SVG', () => {
    const circle = new Circle('abc');
    circle.setColor('red');
    expect(circle.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="110" text-anchor="middle" fill="red" font-size="60">abc</text>'
    );
  });
});

describe('Triangle', () => {
  test('renders triangle SVG', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual(
      '<polygon points="150,18 244,182 56,182" fill="blue" />'
    );
  });
});

describe('Square', () => {
  test('renders square SVG', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual(
      '<rect x="56" y="56" width="188" height="188" fill="green" />'
    );
  });
});