const { Shape } = require('./shape');

class Triangle extends Shape {
    constructor(color, type) {
        super(color, type);
        this.point1 = [150, 0];
        this.point2 = [35, 200];
        this.point3 = [265, 200];
    }
    render() {
        return `<polygon points="${this.point1[0]},${this.point1[1]},${this.point2[0]},${this.point2[1]},${this.point3[0]},${this.point3[1]}" fill="${this.color ? this.color.hex() : "black"}" />`;
    }
}

module.exports = { Triangle };