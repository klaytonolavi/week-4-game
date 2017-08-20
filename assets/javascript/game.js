// create variables for 
var wins = 0;
var losses = 0;
var totalScore = 0;

// generate and display a random number between 19-120 in the "scorebox"
function updateDom() {
    document.querySelector("#Wins").innerHTML = wins;
    document.querySelector("#Losses").innerHTML = losses
}


function reset () {
	numDisplayC1 = 0;
	numDisplayC2 = 0;
	numDisplayC3 = 0;
	numDisplayC4 = 0;

}

$(document).ready(function() {

      $("#random-button").on("click", function() {
          var targetScore = Math.floor(Math.random() * 120) +19;   
          $("#score-box").html(targetScore);
      });


// give each crystal an on.click function to add its hidden value to the
// total score box
// give each crystal image a random number between 1-12 and make it hidden
        $("#crystal1").on("click", function() {
      		var numDisplayC1 = Math.floor(Math.random() * 12) +1;
      		$("#total-score").html(numDisplayC1);
  			console.log(numDisplayC1);
 			reset(); 
		});			
  			    		
		$("#crystal2").on("click", function() {
      		var numDisplayC2 = Math.floor(Math.random() * 12) +1;
      		$("#total-score").html(numDisplayC2);
      		console.log(numDisplayC2);
      		reset();
      	});

      	$("#crystal3").on("click", function() {
      		var numDisplayC3 = Math.floor(Math.random() * 12) +1;
      		$("#total-score").html(numDisplayC3);
      		console.log(numDisplayC3);
      		reset();
  		});

      	$("#crystal4").on("click", function() {
      		var numDisplayC4 = Math.floor(Math.random() * 12) +1;
      		$("#total-score").html(numDisplayC4);
      		console.log(numDisplayC4);
      		reset();
  		});
      		
      	

// if the player matches the displayed random number than increase wins
// by 1
		if (totalScore === targetScore) {
			wins++;
		} else if (totalScore > targetScore) {
			losses++;
		}

	updateDom();

// if the player goes over the random number displayed, increase losses by 1

// when either a win or a loss is recorded, reset the randomly displayed
// number and give each crystal a new hidden value but keep the win and loss
// score on the screen


    });








