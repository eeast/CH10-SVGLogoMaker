const Color = require('color');
const ColorNames = require('color-name');

const questions = [
    {
        name: 'text',
        type: 'input',
        message: 'Enter up to three characters to be added to your logo',
        validate: (text) => {
            return text.length <= 3 || 'Please enter a value with 3 characters or less.';
        }
    }, {
        name: 'textColor',
        type: 'list',
        message: 'Please select a color from the list',
        choices: Object.keys(ColorNames)
    }, {
        name: 'shape',
        type: 'list',
        message: 'What shape would you like to use in the background?',
        choices: ['Circle', 'Square', 'Triangle'],
    }, {
        name: 'shapeColor',
        type: 'list',
        message: 'Please select a color from the list',
        choices: Object.keys(ColorNames)
    }
]

module.exports = { questions }