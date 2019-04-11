var Lemmons = 0;

function Lemmonsclick(number) {
  Lemmons = Lemmons + number;
  document.getElementById("LemmonsCount").innerHTML = Lemmons
};

var number = 1

var Trees = 0;

function buytree(){
    var treecost = Math.floor(10 * Math.pow(1.1,Trees));                   //works out the cost of this tree
    if(Lemmons >= treecost){                                              //checks that the player can afford the tree
        Trees = Trees + 1;                                               //increases number of trees
    	  Lemmons = Lemmons - treecost;                                   //removes the lemmons spent
        document.getElementById('trees').innerHTML = Trees;            //updates the number of trees for the user
        document.getElementById('LemmonsCount').innerHTML = Lemmons;  //updates the number of lemmons for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,Trees));            //works out the cost of the next tree
    document.getElementById('treecost').innerHTML = nextCost;      //updates the tree cost for the user
};

window.setInterval (function() {
  console.log(Lemmons)
  Lemmonsclick(Trees);

}, 1000);
