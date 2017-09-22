$(function(){
	console.log('Up and Running');
//Define the two images as variables
//Select the images using JQuery
var blueBike = $('#blueBike');
var orangeBike = $('#orangeBike');
var blueMove = 0;
var orangeMove = 0;
var blueValue = $('#blueBike').css('padding-left');
//Set event listeners on the images for keystrokes
//When keystroke is pushed, padding-left will be placed on the image to move it accross the screen
	//Use a percentage increase to help with scaling
	//Increase the padding by 5% 
$('body').keyup(function (e) {
	if (e.keyCode == 65) {
		blueMove += 5;
		$('#blueBike').css("padding-left", blueMove + "%");
		console.log(blueValue);
	}
});

$('body').keyup(function (e) {
	if (e.keyCode == 76) {
		orangeMove += 5;
		$('#orangeBike').css("padding-left", orangeMove + "%");
	}
});
//When the image reaches a certain point, the game will display an alert that the player has won and the game will resest 
if($('#blueBike').css('padding-left')=== "100%"){
	console.log("We have a winner");
}
});