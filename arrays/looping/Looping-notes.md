Immutability: {
    The original array is not changed
}

`.map`
    Called with a function
    The arguments to said function are:
        1. the arguement
        2. the index
        3. the array
    Returns an array of the values returned form the iterative function
    ***Map will always return an array with equal indices to the original***

    EXAMPLE {
        var arr = [1, 2, 3, 4];

        function double( input, index ) {
        console.log( index )
        return input * 2;
        }

        arr.map( double ); //[2, 4, 6, 8]
    }
}

`.filter`
The arguments to said function are:
    1. the arguement
    2. the index
    3. the array
Will remove or keep each element of an array depending
on if the iterative method returns true(thy) or false(y)

EXAMPLE {
    var tweets = [
        {user: 'Vincent', text: 'Things Ive said', likes: 4, id: 1 },
        {user: 'Vincent', text: 'More things that have been said', likes: 0, id: 2 },
        {user: 'Vincent', text: 'More things that havent not been said', likes: 3, id: 3 },
        {user: 'Vincent', text: '', likes: 7, id: 4}
    ];

    function atLeastOne( element ) {
        return element.likes > 0;
    } // returns tweets with >1 like

    tweets.filter( function( tweet ) {
        return tweet.text;
    }); // returns tweets with any text
}



`.reduce`
Reduce can do ANYTHING
Called with a function and a value
The arguments to said function are:
    1. The vale of the previous return from the iterateive function, or the starting value on first run
    2. The current element
    3. Index
    4. Element
Essentially condenses a thing down into one thing

EXAMPLE {
    var moreArr = [1, 2, 3, 4];

    arr.reduce( function( prev, current, index, array ) {
        console.log( 'prev: ' + prev );
        return prev + current;
    }, 0 ); // returns 10, being each value added together

}