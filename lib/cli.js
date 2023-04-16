const fs = require('fs');
const inquirer = require('inquirer');

const { questions } = require('./questions');
const { Circle } = require('./circle');
const { Square } = require('./square');
const { Triangle } = require('./triangle');
const { TextShape } = require('./textShape');

class CLI {
    constructor() {
        this.filename = 'logo.svg';
    }

    buildSVG() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
${this.shape.render()}
${this.textShape.render(this.shape)}
</svg>`
    }

    saveFile(data) {
        fs.writeFile(`./dist/${this.filename}`, data,(err) => err ? console.log(err) : console.log(`Generated ${this.filename}`))
    }

    run() {
        inquirer
            .prompt(questions)
            .then((answers) => {
                this.textShape = new TextShape(answers.textColor, answers.text);

                switch (answers.shape) {
                    case 'Circle':
                        this.shape = new Circle(answers.shapeColor, 'circle');
                        break;
                    case 'Square':
                        this.shape = new Square(answers.shapeColor, 'square');
                        break;
                    case 'Triangle':
                        this.shape = new Triangle(answers.shapeColor, 'triangle');
                        break;
                }

                this.saveFile(this.buildSVG());
            })
    }
};

module.exports = { CLI };