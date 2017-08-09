/*Use map to create a new array of doubled values of numArr*/
var numArr = [1,2,3,4,5];

numArr.map( element ) {
  return element * 2;
}

/*Use map to create an array of just id's from the following array*/
var objArr = [
  {id: 1, name: "Dan"},
  {id: 2, name: "Fred"},
  {id: 3, name: "Steve"},
  {id: 4, name: "Greg"}
];

objArr.map( user ) {
  return user.id;
}