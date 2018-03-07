//  1. Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

// Example:

// madlib('Anushka', 'art');
// 'Anushka's favorite subject in school is art.'

function madlib(name,subject) {
    return name + "'s favorite subject in school is " + subject
}
x=madlib('Josh', 'Math')
console.log(x)


// 2.
// Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20%
// fair -> 15%
// bad -> 10%
// tipAmount(100, 'good')
// 20
// tipAmount(40, 'fair')
// 6

// function tipAmount() {
//     var serv = ["good", "fair", "bad"]
//     var billAmount = 100
//     var levelOfService = serv[0];
//     if (levelOfService === "good"){
//     var tip = billAmount * .2
//     billAmount = billAmount + tip
//     return billAmount
//     if (levelOfService === "fair")
//     var tip = billAmount * .15
//     billAmount = billAmount + tip
//     return billAmount
//     if (levelOfService === "bad")
//     var tip = billAmount * .1
//     billAmount =  billAmount + tip
//     return billAmount

//     }

// }
// var x=tipAmount()
// console.log(x)

//3.

// Tip Calculator 2
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

// > totalAmount(100, 'good')
// 120
// > totalAmount(40, 'fair')
// 46

function printNumber(start,end) {
    for (var i=start; i <end+1; i++) {
        console.log(i)

    };

}
//printNumber (1,10)



function printNumber1(start,end) {
    var i=start
    while (i <end+1) {
        console.log(i)
        i++

    };

}
printNumber1 (1,10)


// function printSquare(x) {
//     var size = x;
//     for (var i=0;i < size ;i++){
//         console.log("*".repeat(size))

//     }

// };

// printSquare(5)


// function printBox(height, width){
    
//     for (var i=1; i < height+1; i++){
//         if (i === 1) {
//             console.log('*'.repeat(width))
//         }
        
//         else if (i === height) {
//             console.log('*'.repeat(width))
//         } 

//         else { 
//             console.log('*' + ' '.repeat(width-2) + '*')

//         }

// }

// };
// printBox(6,4)


// function printBanner(height){

      
//             console.log('*'.repeat(height.length)+ '**')
        
        
//             console.log('*' +(height)+ '*')
        
      
//             console.log('*'.repeat(height.length+2))
        
    

// }
// printBanner('Welcome to Digital Crafts')


// function leetSpeak(string) {
//     string = string.toUpperCase();
//     var string2 = ''
// for (var i = 0; i < string.length; i++ ) {
//     if (string[i] === "A") {
//         string2 += 4;
//     }
//     else if (string[i] === "E") {
//         string2 += 3; 
//     }
//     else if (string[i] === "G") {
//         string2 += 6;
//     }
//     else if (string[i] === "I") {
//         string2 += 1;
//     }
//     else if (string[i] === "O") {
//         string2 += 0; 
//     }
//     else if (string[i] === "S") {
//         string2 += 5;
//     }
//     else if (string[i] === "T") {
//         string2 += 7;
//     }
//     else {
//         string2 += string[i]
//     }
// }

// console.log(string2)
// }
// leetSpeak("Hello how are you?")


function longvowel(string) {
    var string2 = ''
for (var i = 0; i <string.length; i++) {
    if (string[i] === string2)
    string = string [:i] + 3 * string[i] + string[i:]
    x += 4
    p = name[x]
}






}



