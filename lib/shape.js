const Color = require('color');

class Shape {
    constructor(color, type) {
        this.color = new Color(color);
        this.type = type;
    };

    setColor(color) {
        this.color = new Color(color);
    }

    render() {
        throw new Error('Child class must implement render() method.');
    };
};

module.exports = { Shape };