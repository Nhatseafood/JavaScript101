var song = " , take one down, pass it around, "
var song2 = " on the wall."

for (var i = 99; i > 0; i--) {


if (i % 7 === 0) {
    var beerName = "Miller";
}
else if (i % 5 === 0) {
    var beerName = "Lite Beer";
}
else if (i % 5 ===0 || i % 7 === 0) {
    var beerName = "Miller Lite"
}
console.log(i + ' bottles of '+ beerName + song + (i-1) + ' bottles of ' + beerName + song2)
}
