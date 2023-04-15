const { questions } = require('./lib/questions');
const { Circle } = require('./lib/circle');
const { Square } = require('./lib/square');
const { Triangle } = require('./lib/triangle');

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt(questions)
    .then((answers) => {
        let shape;
        switch (answers.shape) {
            case 'Circle':
                shape = new Circle(answers.shapeColor);
                break;
            case 'Square':
                shape = new Square(answers.shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle(answers.shapeColor);
                break;
        }
        
    })