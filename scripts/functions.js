// function returnPositiveNumbers(numberArray) {
//     var positiveNumberArray = [];
//     for (var i = 0;i < numberArray.length ;i++) {
//        if (numberArray[i] >= 0) {
//         positiveNumberArray.push(numberArray[i]);
//      }
      
//     } 
//     return positiveNumberArray
// }
// returnPositiveNumbers([2,-1,3,-4,6,22,11])
// console.log(returnPositiveNumbers([2,-1,3,-4,6,22,11]))


// function evenNumbers(numberArray) {
//     evenNumberArray = [];
//     for (var i = 0; i < numberArray.length; i++) {
//         if (numberArray[i]%2 == 0) {
//             evenNumberArray.push(numberArray[i]);
//         }

//     }
//     return evenNumberArray

// }
// evenNumbers([1,2,3,4,5,6])
// console.log(evenNumbers([1,2,3,4,5,6]))


// function squareNumbers(numberArrays) {
//     squareNumberArray = [];
//     for (var i =0; i < numberArrays.length; i++) {
//             squareNumberArray.push(Math.pow(numberArrays[i],2));
//         }

    
//     return squareNumberArray

// }
// squareNumbers([1,2,3,4,5])
// console.log(squareNumbers([1,2,3,4,5]))



// function cityTempCooler(cityArrays) {
//    var cityTempCoolerArray = [];
//    for (var i = 0; i < cityArrays.length;i++) {
//        if (cityArrays[i].temperature <= 70) {
//        cityTempCoolerArray.push(cityArrays[i].name);
//    }

//    }
//    return cityTempCoolerArray
// }
// var cityArrays = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
//   ];


//   console.log(cityTempCooler(cityArrays))



//   function cityTempCooler(cityArrays) {
//       var cityNamesArray = [];
//       for (var i = 0; i <cityArrays.length; i++) {
//           cityNamesArray.push(cityArrays[i].name);
//     }
//     return cityNamesArray

//   }
//   var cityArrays = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];

// console.log(cityTempCooler(cityArrays))


// function eachPersonName(peopleArrays) {
//    for (var i=0; i < peopleArrays.length; i++) { 
//        console.log(`Good job, ${peopleArrays[i]}!`)
//     }
// }
// var people = [
//     'Dom',
//     'Lyn',
//     'Kirk',
//     'Autumn',
//     'Trista',
//     'Jesslyn',
//     'Kevin',
//     'John',
//     'Eli',
//     'Juan',
//     'Robert',
//     'Keyur',
//     'Jason',
//     'Che',
//     'Ben'
//   ];


// eachPersonName(people)


// function eachPersonName(peopleArrays) {
//     for (var i=0; i < peopleArrays.length; i++) {
//         console.log(peopleArrays[i])
//      }
//  }

// people.sort();

// console.log(people);

//  var people = [
//      'Dom',
//      'Lyn',
//      'Kirk',
//      'Autumn',
//      'Trista',
//      'Jesslyn',
//      'Kevin',
//      'John',
//      'Eli',
//      'Juan',
//      'Robert',
//      'Keyur',
//      'Jason',
//      'Che',
//      'Ben'
//    ];
 
 
// eachPersonName(people)



//  var people = [
//      'Dom',
//      'Lyn',
//      'Kirk',
//      'Autumn',
//      'Trista',
//      'Jesslyn',
//      'Kevin',
//      'John',
//      'Eli',
//      'Juan',
//      'Robert',
//      'Keyur',
//      'Jason',
//      'Che',
//      'Ben'
//    ];
//    people.sort();

//    console.log(people);

//    var supportfunc = function(a, b){
//     return a.length - b.length;
//   }

//    people.sort(supportfunc);
 

//    console.log(people);
// function add(a, b) {
//     return a + b;
// }

// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6]
//   ];



// function compare(a,b) {
//     if (a.reduce(add,0) < b.reduce(add,0)) {
//       return -1;
//     }
//     if (a.reduce(add,0) > b.reduce(add,0)) {
//       return 1;
//     }
//     return 0;
//   }


// arr.sort(compare);
// console.log(arr)


// function call3Times(fun) {
//     fun();
//     fun();
//     fun();
// }

// function fun() {
//     console.log("Hello World!")
// }
// call3Times(fun)


// function callNtimes(number, funFunc) {
//     for (var i = 0; i < number; i++) {
//         funFunc() 
        
//     }
   

// }
// function fun() {
//    console.log("Hello World!")

// }  
// callNtimes(5,fun)  

// function add(a, b) {
//     return a + b;
// }
// function sum(arrayOfNumbers) {
//     var x=arrayOfNumbers.reduce(add,0);
//     console.log(x);

// }
// var arrayOfNumbers = [1,2,3];
// sum(arrayOfNumbers)




function acroynm(arrayOfWords) {
    var x=arrayOfWords.reduce(function(accumulator,currentValue,currentIndex){
    return accumulator + currentValue[1] + currentIndex
    },'');
    console.log(x)
}
var arrayOfWords = ['very', 'important', 'person'];
acroynm(arrayOfWords)