const { Shape } = require('./shape');

class TextShape extends Shape {
    constructor(color, text) {
        super(color);
        this.text = text;
    }

    render(bgShape) {
        if(bgShape.type === 'triangle') {
            return `<text x="150" y="128" text-anchor="middle" font-size="80" font-weight="bold" fill="${this.color ? this.color.hex() : 'white'}">${this.text}</text>`;
        } else {
            return `<text x="150" y="128" text-anchor="middle" font-size="80" font-weight="bold" fill="${this.color ? this.color.hex() : 'white'}">${this.text}</text>`;
        }
    }
}

module.exports = { TextShape };