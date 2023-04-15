const { Shape } = require('./shape');

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.point1 = [150, 10];
        this.point2 = [50, 190];
        this.point3 = [250, 190];
    }
    render() {
        return `<polygon points="${this.point1[0]},${this.point1[1]},${this.point2[0]},${this.point2[1]},${this.point3[0]},${this.point3[1]}" fill="${this.color ? this.color : "black"}" />`;
    }
}

module.exports = { Triangle };