function lvl5exercise1() {
	// Push the string "hello" into the array and return it.
    var array = [1, "adam"];
    array.push("hello")
    return array
    
}

function lvl5exercise2() {
	// Remove the last element from the array and return it
    var array = [1, "adam"];
    array.pop("adam")

}

function lvl5exercise3() {
	// Return the length of the array
    var array = [1, "adam"];
    return array.length

}

function lvl5exercise4() {
	// Return the index of "adam" in the array
    var array = [1, "adam"];
    return array.indexOf("adam")

}

var x=lvl5exercise4()
console.log(x)