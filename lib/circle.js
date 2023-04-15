const { Shape } = require('./shape');

class Circle extends Shape {
    constructor(color) {
        super(color);
        this.x = 150;
        this.y = 100;
        this.r = 100;
    }
    render() {
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.r}" fill="${this.color ? this.color : "black"}" />`;
    }
}

module.exports = { Circle };