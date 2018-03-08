
//name functions
// function March() {
//     return "Hello World";

// }
// var myMarch = March();
// console.log(myMarch);

// function add(a,b) {
//     var sum = a + b;
//     return sum;

// }
// var c = 4;
// var d = 7;
// var mySum = add(c,d);
// console.log(mySum);

// Objects have key value pairs. Key: Value
//view is a anonymous
// var course = {title: "Chemistry", 
// courseInstructor: "Veronica",
// courseNumber: 102,
// views: function(a,b){
//     return a+b;
// } };
// console.log(course.views(4,5));


//callback function - function that takes one of its arguement as another function
// function printMessage(msg) {
//     console.log(msg);
// }
// function myMessage(myName) {
//     return myName;
// }
// printMessage(myMessage("Nhat"));

// function tipAmount(billAmount,serviceLevel) {
//     var tipPercentage = 0;
//     if (serviceLevel == "good") {
//         tipPercentage = .2;
//     }
//     else if (serviceLevel == "fair") {
//         tipPercentage = .15;
//     }
//     else if (serviceLevel == "bad") {
//         tipPercentage = .1;
//     }
//     return billAmount * tipPercentage;
// }
// var results = tipAmount(150,"good");
// console.log(results);


// function madlib(name, subject){
//     return name + "'s favorite subject in schoool is " + subject;
// }
// console.log(madlib("Nhat", "Math"));

// function printNumber(start,end) {
//     for (var i = start; i <= end; i= i+2) { 
//         console.log(i);
//     }
// }
// printNumber(1,20);

function printSquare(number) {
    for(var i=0;i < number;i++)
    console.log(i);
    for(var x=0;x <number;i++) {
        console.log(x * "*");
    }
} 
var square = printSquare(5)