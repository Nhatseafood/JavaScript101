function lvl3exercise1() {
    // Create a "hello" and a "world", return the concatenation of the two
    
    var word1 = "hello"
    var word2 = "world"

    return word1 + word2

}

function lvl3exercise2() {
    // Create a "hello" and a 12, return the concatenation of the two
    var key = "hello"
    var number = 12
    return key + number
    console.log(key + number)

}

function lvl3exercise3() {
    // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
    var number = 12
    number+=''

    return number



}

function lvl3exercise4() {
    // Create a "hello world!" string. Return the length of the string
    var word1 = "hello world"
    return word1.length



}

function lvl3exercise5() {
    // Create a "hello world!" string. Return the index of the word "world".
    var word1 = "hello world"

    return word1.indexOf('world')
	
}

var x=lvl3exercise3()
console.log(x*2)