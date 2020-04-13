///////////////////////////////////////
// Lecture: Hoisting

//calculateAge(1983) // works as this is function declaration
//
//function calculateAge(year) {
//    console.log(2020- year)
//    console.log(this)
//}
//
//// retirement(1990) error because retirement is function expression
//var retirement = function(year) {
//    console.log(65 - (2016 - year))
//}
//
//retirement(1990)
//
//
//
////variable
//console.log(age) // undefined
//var age = 26
//console.log(age) // shows age
//
//
//function foo() {
//    var age = 65
//    console.log(age) //65
//}
//foo()
//console.log(age) //26 - takes fom global scope
//
//
//
/////////////////////////////////////////
//// Lecture: Scoping
//
//
//// First scoping example
//
//
//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//
//    function second() {
//        var c = 'Hey!';
//        console.log(a + b + c);
//    }
//}
//
//
//
//
//// Example to show the differece between execution stack and scope chain
//
//
//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//
//    function second() {
//        var c = 'Hey!';
//        third()
//    }
//}
//
//function third() {
//    var d = 'John';
////console.log(a + b + c + d); //error as b and c are not in scope
//    console.log(a + d);
//}




///////////////////////////////////////
// Lecture: The this keyword
function calculateAge(year) {
    console.log(this)
    console.log(2020 - year)
}
this.calculateAge(1993)
console.log(this)


var john = {
    name: "John",
    yearOfBirth: 1993,
    calculateAge: function() {
        console.log(this)
        console.log(2020 - this.yearOfBirth)
        /*function innerFunction() {
            console.log(this)
        }
        innerFunction()*/
    }
}
    

john.calculateAge()

var mike = {
    name: "Mike",
    yearOfBirth: 1994,
}

mike.calculateAge = john.calculateAge
mike.calculateAge()