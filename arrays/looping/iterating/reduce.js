/*Using reduce get the total of the following array*/
var totalArr = [1,2,3,4,5,6,7,10,20,50];

totalArr.reduce( function( sum, current ) {
    return sum + current;
}, 0 );

/*Using reduce calculate the total of only the negative numbers of this array*/
var totalArr = [1,2,-3,4,-5,6,7,-10,-20,50];

totalNegArr.reduce( function( sum, current ) {
    if( current < 0 ) return sum + current;
    else
        return sum;
}, 0);

/*Reduce the following nested array to a flat array containing all the values*/
var nestedArr = [[1, 2], [3, 4], [5, 6]];

nestedArr.reduce( function( flatArr, current ) {
    return flatArr.concat( current );
}, []);