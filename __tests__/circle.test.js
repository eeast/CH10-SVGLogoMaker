const { Circle } = require('../lib/circle');

describe('Circle', () => {
    it('Saves the color value when constructed.', () => {
        const myCircle = new Circle('blue');
        
        expect(myCircle.color.hex()).toEqual('#0000FF');
    });

    it('Allows for color reassignment and saves the value correctly.', () => {
        const myCircle = new Circle('blue');

        myCircle.setColor('red');
        expect(myCircle.color.hex()).toEqual('#FF0000');
        
        myCircle.setColor('purple');
        expect(myCircle.color.hex()).toEqual('#800080');
    })

    it('Sets the x, y, and r variables to default values.', () => {
        const myCircle = new Circle('red');

        expect(myCircle.x).toEqual(150);
        expect(myCircle.y).toEqual(100);
        expect(myCircle.r).toEqual(100);
    })

    it('Overrides render() function and returns SVG xml.', () => {
        const myCircle = new Circle('green');

        expect(myCircle.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="#008000" />`);
    });

    it('Renders with the color black if no color is specified.', () => {
        const myCircle = new Circle();

        expect(myCircle.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="#000000" />`);
    });
});