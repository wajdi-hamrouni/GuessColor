// create a function that generate random rgb color 

function generateRgb(){
	var firstColor = Math.floor(Math.random() * 256);
	var secondColor = Math.floor(Math.random() * 256);
	var thirdColor = Math.floor(Math.random() * 256);
	return '('+firstColor + ' ,' + secondColor + ' ,' +thirdColor+')';
}


//$('body').css('background', 'rgb' + test);
function fillArrayOfColors(difficulity){
	var acc = 0;
	var arrayOfColors = [];
	if(difficulity === 'easy'){
		acc = 3;
	}
	else if (difficulity === 'medium') {
		acc = 6;
	} else {
		acc = 9;
	} 
	for(i = 0; i < acc; i++){
		arrayOfColors[i] = generateRgb();
	}
    return arrayOfColors;
}

var arrayOfColors = fillArrayOfColors('hard');
console.log(arrayOfColors);

function fillTheDivs(arrayOfColors){
	for(i = 0; i < arrayOfColors.length; i++){
		$('.'+i).css('background', 'rgb'+ arrayOfColors[i]);
	}
}

fillTheDivs(arrayOfColors);
var correctIndex = Math.floor(Math.random() * 10);
var correctOne  = arrayOfColors[correctIndex];
console.log(correctOne);

function win(){
	$('.' + correctIndex).on('click', function(){
		for(i = 0; i < arrayOfColors.length; i++){
			$('.'+i).css('background', 'rgb'+ arrayOfColors[correctIndex]);
		};
		window.setTimeout( function(){
			var $winnerDiv = $('<div id = "win"> <p id = "win-message">Congratulation You Won !</p> </div>');
			$('.grid-container').replaceWith($winnerDiv);
		} , 1000);		
	});		
}

win();

function lose(){
	var clicks = 0;
	var arrayOfWrongColors = arrayOfColors.splice(correctIndex, 1); 
	console.log(arrayOfColors);
	console.log(correctIndex);
	console.log(arrayOfWrongColors);
}

lose();



