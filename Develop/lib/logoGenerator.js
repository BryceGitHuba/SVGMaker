const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./shapes');

async function generateLogo() {
  try {
    const shapeChoices = ['Circle', 'Triangle', 'Square'];

    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: function (value) {
          return value.length <= 3 ? true : 'Maximum three characters allowed.';
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: shapeChoices,
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal):',
      },
    ]);

    let shape;
    switch (userInput.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Square':
        shape = new Square();
        break;
    }

    shape.setColor(userInput.shapeColor);

    const svgString = `
      <svg width="300" height="200">
        ${shape.render()}
        <text x="150" y="120" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
      </svg>
    `;

    return svgString.trim();
  } catch (error) {
    throw error;
  }
}

module.exports = generateLogo;