var Lemons = 0;

function Lemonsclick(number) {
  Lemons = Lemons + number;
  document.getElementById("LemonsCount").innerHTML = Lemons
};

var number = 1

var Trees = 0;

var Savedata = {
    lemons: Lemons,
    trees: Trees
  }

function Save() {
  localStorage.setItem("Save",JSON.stringify(Savedata));
}

function Load() {
  var savegame = JSON.parse(localStorage.getItem("Save"));
  if (typeof savegame.lemons !== "undefined") lemons = savegame.lemons;
  if (typeof savegame.trees !== "undefined") trees = savegame.trees;
}

function Delete() {
  localStorage.removeItem("Save")

}

function buytree(){
    var treecost = Math.floor(10 * Math.pow(1.1,Trees));                   //works out the cost of this tree
    if(Lemons >= treecost){                                              //checks that the player can afford the tree
        Trees = Trees + 1;                                               //increases number of trees
    	  Lemons = Lemons - treecost;                                   //removes the Lemons spent
        document.getElementById('trees').innerHTML = Trees;            //updates the number of trees for the user
        document.getElementById('LemonsCount').innerHTML = Lemons;  //updates the number of Lemons for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,Trees));            //works out the cost of the next tree
    document.getElementById('treecost').innerHTML = nextCost;      //updates the tree cost for the user
};

window.setInterval (function() {
  console.log(Lemons)
  Lemonsclick(Trees*10);
}, 1000);
