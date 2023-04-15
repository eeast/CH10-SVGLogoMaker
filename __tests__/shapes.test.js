const { Shape } = require('../lib/shape');

describe('Shape', () => {
    it('Saves the color value when constructed.', () => {
        const myShape = new Shape('blue');
        
        expect(myShape.color).toEqual('blue');
    });

    it('Allows for color reassignment and saves the value correctly.', () => {
        const myShape = new Shape('blue');

        myShape.setColor('red');
        expect(myShape.color).toEqual('red');
        
        myShape.setColor('purple');
        expect(myShape.color).toEqual('purple');
    })

    it('Requires child override of render() function and throws an error if not.', () => {
        const myShape = new Shape();

        expect(() => myShape.render()).toThrow('Child class must implement render() method.');
    });
});