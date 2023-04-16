const { Triangle } = require('../lib/triangle');

describe('Triangle', () => {
    it('Saves the color value when constructed.', () => {
        const myTriangle = new Triangle('blue');
        
        expect(myTriangle.color.hex()).toEqual('#0000FF');
    });

    it('Allows for color reassignment and saves the value correctly.', () => {
        const myTriangle = new Triangle('blue');

        myTriangle.setColor('red');
        expect(myTriangle.color.hex()).toEqual('#FF0000');
        
        myTriangle.setColor('purple');
        expect(myTriangle.color.hex()).toEqual('#800080');
    })

    it('Sets the three vertice variables to default values.', () => {
        const myTriangle = new Triangle('red');

        expect(myTriangle.point1).toEqual([150, 10]);
        expect(myTriangle.point2).toEqual([50, 190]);
        expect(myTriangle.point3).toEqual([250, 190]);
    })

    it('Overrides render() function and returns SVG xml.', () => {
        const myTriangle = new Triangle('green');

        expect(myTriangle.render()).toEqual(`<polygon points="150,10,50,190,250,190" fill="#008000" />`);
    });

    it('Renders with the color black if no color is specified.', () => {
        const myTriangle = new Triangle();

        expect(myTriangle.render()).toEqual(`<polygon points="150,10,50,190,250,190" fill="#000000" />`);
    })
});