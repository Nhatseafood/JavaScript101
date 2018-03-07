function Deck(){
    this.deck = [];
}

Deck.prototype.newDeck= function(){
    for(let  i =2 ;i<10;i++){
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
    return this.deck.pop();
}


function Card(point, face,suite){
    this.point = point;
    this.suite = suite;
    this.face = face;
}


function myHand(){
    this.card = [];
    this.point= 0;
}

function dealerHand() {
    this.card = [];
    this.point= 0;

}


//Testing our objects
Card.prototype.getURL = function(){
    return "JPEG/" + this.face+this.suite+".jpg"
}
var mydeck = new Deck();
mydeck.newDeck();
mydeck.shuffle();
var Playerhand = new Hand();
var Dealerhand = new Hand();



console.log(mydeck.deck);
console.log(mydeck.draw().getURL());