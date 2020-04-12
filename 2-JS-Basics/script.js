/*console.log("Hello World!!!");
var firstName = 'Mahima';
console.log(firstName);

 var lastName = "Srivastava";
console.log(lastName);

var age = 26;
console.log(age);
age = "abc";
console.log(age);
age = true;
console.log(age);
age = null;
console.log(age);
var sum = age + 21;
console.log(sum);
var nothing;
console.log(nothing);
var nullVar = null;
if (nullVar === nothing) {
    console.log("null = nothing")
} else {
    console.log("null != nothing")
}
age = 26
console.log(firstName + ' ' + age)
var a, b, c = 5;
a = 2
b = 3
console.log(a + " " +  b + " " + c);
alert(a + " " +  b + " " + c)
var lastName = prompt("What is his last name?")
console.log(lastName);
*/
/*
 var year = 2020
var gappuAge = year - 1993;
console.log(gappuAge);
var sappuAge = year - 1991;

//logical operator
var mahimaOlder = gappuAge > sappuAge
console.log(mahimaOlder)

//typeOf operator

console.log(typeof mahimaOlder)

//operator precedence

var now = 2020;
var yearMahima = 1993
var fullAge = 50
var isFullAge = now - yearMahima >= fullAge
console.log(isFullAge)
var ageMahima = now - yearMahima
var ageMark = 25
var average = ageMahima + ageMark/2 
console.log(average)


//Multiple Assignments

var x, y;
x = y = (3+5) * 4 - 6;
console.log(x, y)
x *= 10
console.log(x)

x += 10
console.log(x)
x--
console.log(x)*/
/*
var johnMass = 100
var markMass = 70
var johnHeight = 1.45
var markHeight = 1.80

var johnBMI = johnMass / (johnHeight * johnHeight)
var markBMI = markMass / (markHeight * markHeight)
var johnHigher = johnBMI > markBMI 
if (johnHigher) {
    console.log("John's BMI is higher")
} else {
    console.log("Mark's BMI is higher")
}
console.log(johnBMI, markBMI)
console.log("John's BMI is higher? " + johnHigher)

*/

//Ther ternary Operator and Switch Statements

/*var firstName = "Mahima"
var age = 26

age >= 18 ? console.log("Greater than 18") : console.log("Less than 18")

var drink = age >= 18 ? "Coffee" : "Horlicks"
console.log(drink)

var a = 5
switch (true) {
    case a == 5: 
    case 1, 2, 3: console.log("1,2,3,5")
        
    case 10: console.log("yayy")
        
    case a < 7: console.log("a < 7")
    
    default: console.log("Default")
        
        break
}*/


//Truthy and falsy values and Equality Operators

//falsy value - undefined , null, 0 , '', NaN
//truthy value - Not falsy values
/* 
var height;
height = '23'
if (height || height === 0) { 
    console.log("Variable is defined")
} else {
    console.log("Variable is not defined")
}

if (height == 23) {
    console.log("Variable is 23")
}*/

//Coding Challenge 2
/*
var john1, john2, john3, mike1, mike2, mike3, mary1, mary2, mary3, johnAvg, mikeAvg, maryAvg
john1 = 200
john2 = 120
john3 = 103

mike1 = 116
mike2 = 94
mike3 = 123

mary1 = 97
mary2 = 131
mary3 = 105

johnAvg = (john1 + john2 + john3) / 3
mikeAvg = (mike1 + mike2 + mike3) / 3
maryAvg = (mary1 + mary2 + mary3) / 3
console.log("John's Average = " + johnAvg + " Mary's Avg = " + maryAvg + " Mike's Avergae = " + mikeAvg )
switch (true) {
    case ((johnAvg > mikeAvg) && (johnAvg > maryAvg)):  
        console.log("John's team is the winner")
        break;
    case ((mikeAvg > johnAvg) && (mikeAvg > maryAvg)): 
        console.log("Mike's team is the winner");
        break;
    case ((maryAvg > johnAvg) && (maryAvg > mikeAvg)): 
        console.log("Mary's team is the winner");
        break;
    default: console.log("It's a Draw!!!")
}
//if ((johnAvg > mikeAvg) && (johnAvg > maryAvg)){
//    console.log("John's team is the winner")
//} else if ((mikeAvg > johnAvg) && (mikeAvg > maryAvg)){
//    console.log("Mike's team is the winner")
//} else if ((maryAvg > johnAvg) && (maryAvg > mikeAvg)) {
//    console.log("Mary's team is the winner")
//} else {
//    console.log("It's a Draw!!!")
//}
*/
/*
function calculateAge(birthYear) {
 return 2020 - birthYear
}


console.log(calculateAge(1993))



var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case "teacher": 
            return firstName + " Teaches kids how to code";
        case "dirver":
            return firstName + " Drives a car"
        case "designer": 
            return firstName + " Designs a website"
            default : return firstName + " Does something else"
    }
}
console.log(whatDoYouDo("developer", "Mahima"))
*/



//Arrays
/*
var numbers = [1, 2, 3,8,7,9,4,5]
var names = new Array("Mahima", "sappu", "mika", "as")
console.log(names)
console.log(numbers)
console.log(names[1])
names[names.length] = "gappu"
console.log(names)

//different data types

var john = ["John", false, 1990]
john.push(180)
john.unshift("Mr.")
john.pop()
console.log(john)
console.log(john.indexOf(1990))

*/

//Coding challenge 3
/*
function tipCalculator(bills) {
    var tips = [];
    var totalBills = [];
    for(var bill of bills) {
        var tip = 0
        if (bill < 50) {
            tip = 0.2 * bill
        } else if ((bill > 50) && (bill < 200)) {
            tip = 0.15 * bill
        } else {
            tip = 0.1 * bill
        }
        tips[tips.length] = tip
        totalBills[totalBills.length] = tip + bill
    }
    console.log("tips " + tips)
    console.log("totalBills" + totalBills)
    return (tips, totalBills)
}

console.log(tipCalculator([124, 48, 268]))

*/

//Object and Properties









