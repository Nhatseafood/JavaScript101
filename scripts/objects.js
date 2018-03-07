//   function Person(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//   }
  
//   Person.prototype.greet = function(other) {
//     console.log('Hello ' + other.name + ', I am ' + this.name + '!');
//   };

//   sonny = new Person('Sonny','sonny@hotmail.com','483-485-4948');
//   jordan = new Person('Jordan','jordan@aol.com','495-586-3456');
//   sonny.greet(jordan)
//   jordan.greet(sonny)
//   console.log(`Email: ${sonny.email}, Phone: ${sonny.phone}`)
//   console.log(`Name: ${jordan.name}, Email: ${jordan.email}, Phone: ${jordan.phone}`)

function Card(point,suit) {
this.point = point;
this.suit = suit;
}

var card1 = new Card('2','hearts');
var card2 = new Card('3','diamonds');

Card.prototype.GetImageUrl = function() {
   console.log("JPEG/" + this.point+this.suit+".jpg")
}

card1.GetImageUrl()

