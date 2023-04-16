const { Shape } = require('./shape');

class Square extends Shape {
    constructor(color, type) {
        super(color, type);
        this.x = 50;
        this.y = 0;
        this.width = 200;
        this.height = 200;
    }
    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color ? this.color.hex() : "black"}"/>`;
    }
}

module.exports = { Square };