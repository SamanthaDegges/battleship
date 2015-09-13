$(document).ready(init);
console.log("working.");

var myShips = [
    {name: "Carrier", length: 5, sunk: false},
    {name: "Battleship", length: 4, sunk: false},
    {name: "Cruiser", length: 3, sunk: false},
    {name: "Submarine", length: 3, sunk: false},
    {name: "Destroyer", length: 2, sunk: false},
];

function init(){
  ref.set({
    ships: myShips,
    gameState: false,
    players: []
  });
}

var ref = new Firebase("https://mywittlefirebase.firebaseio.com/");
var playersRef = ref.child("players");

$("button").on("click", addPlayer);

var p = 1;
function addPlayer(e){
  playersRef.set({count: p});
  //console.log("button event handler fired.");
  countPlayers();
  p++
}


// var lengthOfPlayers = playesrRef.length();
// console.log(lengthOfPlayers);


// Event Listeners

var countPlayers = function(){
  playersRef.on("value", function(snapshot) {
    var pCount = (snapshot.val().count);
    if (pCount === 2) {
      $("button").addClass("hidden");
    } $("#stats").text("Current Players: "+pCount);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}
