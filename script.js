$(document).ready(function() {
var magic8ball = {};
magic8ball.listOfAnswers = ["Of course!",  "Absolutely not. Try something else.", "Only the future knows", "It may take longer than you think", "Unsure. Ask again."];
$("#answer").hide();
magic8ball.askAQuestion = function(question)
{

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
$("#answer").fadeIn(4000);

var randomNumber = Math.random ();
var randomNumberArray = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberArray);
var randomAnswers = this.listOfAnswers[randomIndex];
$("#answer").text(randomAnswers);
console.log(question)
console.log(this.listOfAnswers[randomIndex])
};
var onClick = function () {
$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
setTimeout (
	function() {
var question = prompt("Ask a YES/NO Question!");
    $("#8ball").effect("shake");
magic8ball.askAQuestion(question);
}, 500);
};
  $("#questionButton").click(onClick);
});
