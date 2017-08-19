// create variables for 

// generate and display a random number between 19-120 in the "scorebox"


$(document).ready(function() {

      $("#random-button").on("click", function() {
          var numDisplay = Math.floor(Math.random() * 120) +19;   
          $("#score-box").html(numDisplay);
      });


// give each crystal image a random number between 1-12 and make it hidden
        $("#crystal1").on("click", function() {
      		var numDisplay = Math.floor(Math.random() * 12) +1;

		$("#crystal2").on("click", function() {
      		var numDisplay = Math.floor(Math.random() * 12) +1;

      	$("#crystal3").on("click", function() {
      		var numDisplay = Math.floor(Math.random() * 12) +1;

      	$("#crystal4").on("click", function() {
      		var numDisplay = Math.floor(Math.random() * 12) +1;

      		// need to hide the value somehow??
      		});
  		});
	});
});





// give each crystal an on.click function to add its hidden value to the
// total score box

// if the player matches the displayed random number than increase wins
// by 1

// if the player goes over the random number displayed, increase losses by 1

// when either a win or a loss is recorded, reset the randomly displayed
// number and give each crystal a new hidden value but keep the win and loss
// score on the screen


    });








