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
//new Firebase("https://docs-examples.firebaseio.com/web/data/users/mchen/name");
var playersRef = ref.child("players");

$("button").on("click", addPlayer);

function addPlayer(e){
  //ref.addChild({"players": "test"});
  playersRef.push({name: "Sam"});
  console.log("appended object players with a object of player 1.");
}

playersRef.on("update", function(snapshot) {
  //var players = JSON.parse(playerCount.players);
  console.log("players are at: " + snapshot.key(), snapshot.val());
});

// function buildShip(val) {
//   console.log(val.length);
//   var i = 0;
//   if (i<val.length){
//     $('#playerBoard td').on('click', function(e){
//       console.log('clicked');
//       $(this).addClass('ship');
//       i++;
//     });
//   }
//   return;
// }


//   myShips.forEach(function(val, index){
//     buildShip(val);
//   });
// }
  // $("td").on("click", buildShip);
  // $("#playerBoard td").on("click", function(){
  // });
