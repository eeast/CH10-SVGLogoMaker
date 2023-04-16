const { Shape } = require('../lib/shape');
const Color = require('color');

describe('Shape', () => {
    it('Saves the color value when constructed.', () => {
        const myShape = new Shape('blue');
        
        expect(myShape.color.hex()).toEqual('#0000FF');
    });

    it('Allows for color reassignment and saves the value correctly.', () => {
        const myShape = new Shape('blue');

        myShape.setColor('red');
        expect(myShape.color.hex()).toEqual('#FF0000');
        
        myShape.setColor('purple');
        expect(myShape.color.hex()).toEqual('#800080');
    })

    it('Requires child override of render() function and throws an error if not.', () => {
        const myShape = new Shape();

        expect(() => myShape.render()).toThrow('Child class must implement render() method.');
    });
});