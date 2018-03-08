function Deck(){
    this.deck = [];
}

Deck.prototype.newDeck= function(){
    for(let  i =1 ;i<10;i++){
        var newcard = new Card(i, i.toString(),"H");
        this.deck.push(newcard);
        var newcard = new Card(i,i.toString(), "D");
        this.deck.push(newcard);
        var newcard = new Card(i, i.toString(),"S");
        this.deck.push(newcard);
        var newcard = new Card(i, i.toString(),"C");
        this.deck.push(newcard);
    }
    var newcard = new Card(10,"J","H");
    this.deck.push(newcard);
    var newcard = new Card(10, "J", "D");
    this.deck.push(newcard);
    var newcard = new Card(10, "J", "S");
    this.deck.push(newcard);
    var newcard = new Card(10, "J", "C");
    this.deck.push(newcard);

    var newcard = new Card(10,"Q","H");
    this.deck.push(newcard);
    var newcard = new Card(10, "Q", "D");
    this.deck.push(newcard);
    var newcard = new Card(10, "Q", "S");
    this.deck.push(newcard);
    var newcard = new Card(10, "Q", "C");
    this.deck.push(newcard);

    var newcard = new Card(10,"K","H");
    this.deck.push(newcard);
    var newcard = new Card(10, "K", "D");
    this.deck.push(newcard);
    var newcard = new Card(10, "K", "S");
    this.deck.push(newcard);
    var newcard = new Card(10, "K", "C");
    this.deck.push(newcard);


    var newcard = new Card(1, "A","H");
    this.deck.push(newcard);
    var newcard = new Card(1,"A", "D");
    this.deck.push(newcard);
    var newcard = new Card(1, "A","S");
    this.deck.push(newcard);
    var newcard = new Card(1, "A","C");
    this.deck.push(newcard);


}

Deck.prototype.shuffle = function(){
    var j, x, i;
    for (i = this.deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = x;
    }
}

Deck.prototype.draw = function(){
    var x =this.deck.pop();
    return x
}


function Card(point, rank,suit){
    this.point = point;
    this.suit = suit;
    this.rank = rank;
}


function Hand(){
    this.card = [];
    this.sumPoint= 0;
}
Hand.prototype.addCard= function(card) {
   this.card.push(card.rank + card.suit);
   console.log(this.card)

   this.sumPoint += card.point;
   console.log(this.sumPoint, "<<< adds all points in hand")
}

Hand.prototype.getPoints= function() {
   return this.sumPoint
}

Deck.prototype.numCardsLeft = function() {
    return this.deck.length
}

//Testing our objects
Card.prototype.getURL = function(){
    return "JPEG/" + this.rank +this.suit + ".jpg"
}



var mydeck = new Deck();
mydeck.newDeck();
mydeck.shuffle();

var Playerhand = new Hand();
var Dealerhand = new Hand();

function displayCard(card) {
    var handContainer = document.getElementById("dealer-hand");
    console.log(handContainer);

    var cardImg = document.createElement("img");

    handContainer.appendChild(cardImg);
}

var hitBtn = document.getElementById("hit-button");

hitBtn.addEventListener("click" , function() {
    console.log( this.card , "<< my card") 
   displayCard(Playerhand.addCard(mydeck.draw()));
});

var dealBtn = document.getElementById("deal-button")

dealBtn.addEventListener("click", function() {
    console.log(Playerhand.addCard(mydeck.draw()) );
    console.log(Playerhand.addCard(mydeck.draw()) );
    console.log(Dealerhand.addCard(mydeck.draw()) );
    console.log(Dealerhand.addCard(mydeck.draw()) );
    

});


console.log(mydeck.deck , "<< my entire deck. ");
// console.log(mydeck.draw().getURL());
console.log ( mydeck.numCardsLeft() , " << cards left" ) 