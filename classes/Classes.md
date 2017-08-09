(In JS) Classes are functions that make objects

function fakeDogClass( color, size ) {
    return {
        color: color,
        size: size
    };
}
fakeDogClass( brown, small );

class Dog {
    constructor( color, size ) {
        this.color = color;
        this.size = size;
    }
    bark() {
        console.log( 'bark' );
    }
}

new Dog( 'brown', 'big );
Dog.bark(); // 'bark'

var dogs = [ {color: 'black', size: 'small'}, {color: white, size: big} ];

dogs.map( function( pup ) {
    return new Dog( pup.color, pup.size )
}); // returns new dogs equal to the number of items in the array, with the associated attributs