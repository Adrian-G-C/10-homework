const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: function (input) {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ]);
}

function generateLogo(text, textColor, shape, shapeColor) {
  let shapeInstance;
  switch (shape) {
    case 'circle':
      shapeInstance = new Circle(text);
      break;
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    case 'square':
      shapeInstance = new Square();
      break;
    default:
      console.log('Invalid shape selected.');
      return;
  }

  shapeInstance.setColor(shapeColor);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeInstance.render(text, textColor)}</svg>`;

  const fs = require('fs');
  fs.writeFile('logo.svg', svgString, function (err) {
    if (err) {
      console.log('Error creating logo.svg:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

promptUser().then((answers) => {
  generateLogo(
    answers.text,
    answers.textColor,
    answers.shape,
    answers.shapeColor
  );
});