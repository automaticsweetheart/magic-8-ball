var createPolitician = function(name, partyColor) {


var politician = {};
politician.name = name;
politician.partyColor = partyColor;
politician.electionResults = null;
politician.totalVotes = 0;


  politician.tallyUpTotalVotes = function() {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
};

return politician;
};

var marcel = createPolitician("Marcel Meows",[245, 141, 136]);
var kits = createPolitician("Baby Kittys", [132, 17, 11]);
var winner = "???";

marcel.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7];
kits.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
marcel.electionResults[9] = 1;
kits.electionResults[9] = 28;

marcel.electionResults[4] = 17;
kits.electionResults[4] = 38;

marcel.electionResults[43] = 11;
kits.electionResults[43] = 27;


marcel.tallyUpTotalVotes();
kits.tallyUpTotalVotes();


var setStateResults = function(state){

    theStates[state].winner = null;

    if (marcel.electionResults[state] > kits.electionResults[state]) {

        theStates[state].winner = marcel;

    } else if  (marcel.electionResults[state] < kits.electionResults[state]) {

        theStates[state].winner = kits;
    }

      var stateWinner = theStates[state].winner;

      if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates[state].rgbColor = [11,32,57];
}

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
candidate1Name.innerText = marcel.name;
candidate2Name.innerText = kits.name;

candidate1Results.innerText = marcel.electionResults[state];
candidate2Results.innerText = kits.electionResults[state];


  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
};

if (marcel.totalVotes > kits.totalVotes){
    winner = marcel.name;
}else if (marcel.totalVotes < kits.totalVotes){
    winner = kits.name;
}else{
    winner = "DRAW."
}

console.log(marcel.totalVotes);
console.log(kits.totalVotes);
console.log("AND THE WINNER IS..." + winner + "!!!");

console.log("Marcel's color is: " + marcel.partyColor);
console.log("Baby Kit's color is: " + kits.partyColor);


var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = marcel.name;
row.children[1].innerText = marcel.totalVotes;
row.children[2].innerText = kits.name;
row.children[3].innerText = kits.totalVotes;
row.children[5].innerText = winner;
