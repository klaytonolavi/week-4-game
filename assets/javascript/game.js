// create variables for 


// generate and display a random number between 19-120 in the "scorebox"

// function randomNumber(min, max) {
// 	return Math.floor((Math.random() * max) + min);
// }
// var crystals = [];

// function crystalArray() {
// 	crystals = [];	
// 	for (var i = 0; i < 4; i++) {
// 		crystals.push();
// 		}
// 	}		




$(document).ready(function() {
	var wins = 0;
	var losses = 0;
	var totalScore = 0;
	var targetScore = Math.floor(Math.random() * 120) +19; 
	var numDisplayC1 = Math.floor(Math.random() * 12) +1;
	var numDisplayC2 = Math.floor(Math.random() * 12) +1;
	var numDisplayC3 = Math.floor(Math.random() * 12) +1;
	var numDisplayC4 = Math.floor(Math.random() * 12) +1;

	function resetHtml() {

	$("#targetScore").text(targetScore);
	$("#wins").text("Wins " + wins);
	$("#losses").text("Losses " + losses);
	$("#total-score").text(totalScore);
	}



      $("#random-button").on("click", function() {
          targetScore = Math.floor(Math.random() * (120-19)) +19;   
          totalScore = 0;
          $("#score-box").html(targetScore);
          resetHtml();
      });


// give each crystal an on.click function to add its hidden value to the
// total score box
// give each crystal image a random number between 1-12 and make it hidden
        $("#crystal1").on("click", function() {
        	totalScore = numDisplayC1 + totalScore;
      		$("#total-score").html(totalScore);
  			
 			check();
		});			
  			    		
		$("#crystal2").on("click", function() {
			totalScore = numDisplayC2 + totalScore;
      		$("#total-score").html(totalScore);
      		
      		check();
      	});

      	$("#crystal3").on("click", function() {
      		totalScore = numDisplayC3 + totalScore;
      		$("#total-score").html(totalScore);
      		
      		check();
  		});

      	$("#crystal4").on("click", function() {
      		totalScore = numDisplayC4 + totalScore;
      		$("#total-score").html(totalScore);
      		
      		check();
  		});
      		
      	

// if the player matches the displayed random number than increase wins
// by 1
	var check = function() {
		console.log(totalScore);
		console.log(targetScore);
		if (totalScore === targetScore) {
			wins++;
			$("#wins").html("Wins " + wins);
			alert("You win!");



		} else if (totalScore > targetScore) {
			losses++;
			$("#losses").html("Losses " + losses);
			alert("You lose!");
		}


}
	
// if the player goes over the random number displayed, increase losses by 1

// when either a win or a loss is recorded, reset the randomly displayed
// number and give each crystal a new hidden value but keep the win and loss
// score on the screen


    });








