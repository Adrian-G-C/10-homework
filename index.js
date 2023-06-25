const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

function promptUser() {
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
      }
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Choose a text color:',
      choices: [
        'black',
        'white',
        'red',
        'green',
        'blue',
        'yellow',
        'cyan',
        'magenta',
      ],
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Choose a shape color:',
      choices: [
        'black',
        'white',
        'red',
        'green',
        'blue',
        'yellow',
        'cyan',
        'magenta',
      ],
    },
  ]);
}

function generateLogo(text, textColor, shape, shapeColor) {
  let shapeInstance;
  switch (shape) {
    case 'circle':
      shapeInstance = new Circle();
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
  const svgString = shapeInstance.render();

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
