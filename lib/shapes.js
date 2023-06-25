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
    constructor() {
      super();
      this.radius = 80;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
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
  