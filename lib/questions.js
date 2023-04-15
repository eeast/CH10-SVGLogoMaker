const Color = require('color');

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
        type: 'input',
        message: `What color would you like to use for the text in your logo?\nYou can enter a keyword or a hexcode value`,
        validate: (c) => {
            const color = Color(c);
            return color.isColor() || 'Please enter a valid keyword or hexcode value'
        }
    }, {
        name: 'shape',
        type: 'list',
        message: 'What shape would you like to use in the background?',
        choices: ['Circle', 'Square', 'Triangle'],
    }, {
        name: 'shapeColor',
        type: 'input',
        message: `What color would you like to use for the shape in your logo?\nYou can enter a keyword or a hexcode value`,
        validate: (c) => {
            const color = Color(c);
            return color.isColor() || 'Please enter a valid keyword or hexcode value'
        }
    }
]

module.exports = { questions }