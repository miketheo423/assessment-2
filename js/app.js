$(function(){
	console.log('Up and Running');
//Define the two images as variables
//Select the images using JQuery
var blueBike = $('#blueBike');
var orangeBike = $('#orangeBike');
var blueMove = 0;
var orangeMove = 0;
var playerOneWin = 0;
var playerTwoWin = 0;

//Set event listeners on the images for keystrokes
//When keystroke is pushed, padding-left will be placed on the image to move it accross the screen
	//Use a percentage increase to help with scaling
	//Increase the padding by 5% 
$('body').keyup(function (e) {
	if (e.keyCode == 65) {
		blueMove += 5;
		$('#blueBike').css("padding-left", blueMove + "%");
	}
	
	if(blueMove === 95) {
		playerOneWin += 1;
		alert("Player One Wins!");
		resetGame();
	}
});

$('body').keyup(function (e) {
	if (e.keyCode == 76) {
		orangeMove += 5;
		$('#orangeBike').css("padding-left", orangeMove + "%");
	}
	if(orangeMove === 95) {
		playerTwoWin += 1;
		alert("Player Two Wins!");
		resetGame();
	}
});

function resetGame() {
	if(blueMove === 95) {
		blueMove = 0;
		orangeMove = 0;
		$('#blueBike').css("padding-left", "0%");
		$('#orangeBike').css("padding-left", "0%");
	} else if (orangeMove === 95) {
		orangeMove = 0;
		blueMove = 0;
		$('#orangeBike').css("padding-left","0%");
		$('#blueBike').css("padding-left", "0%");
	}
}
 
});