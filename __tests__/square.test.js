const { Square } = require('../lib/square');

describe('Square', () => {
    it('Saves the color value when constructed.', () => {
        const mySquare = new Square('blue');
        
        expect(mySquare.color.hex()).toEqual('#0000FF');
    });

    it('Allows for color reassignment and saves the value correctly.', () => {
        const mySquare = new Square('blue');

        mySquare.setColor('red');
        expect(mySquare.color.hex()).toEqual('#FF0000');
        
        mySquare.setColor('purple');
        expect(mySquare.color.hex()).toEqual('#800080');
    })

    it('Sets the x, y, width, and height variables to default values.', () => {
        const mySquare = new Square('red');

        expect(mySquare.x).toEqual(50);
        expect(mySquare.y).toEqual(0);
        expect(mySquare.width).toEqual(200);
        expect(mySquare.height).toEqual(200);
    })

    it('Overrides render() function and returns SVG xml.', () => {
        const mySquare = new Square('green');

        expect(mySquare.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="#008000"/>`);
    });

    it('Renders with the color black if no color is specified.', () => {
        const mySquare = new Square();

        expect(mySquare.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="#000000"/>`);
    });
});