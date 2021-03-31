					/****************************
					*	POSITION D'UN ELÉMENT	*
					****************************/

/// Obtenir des positions d'elément
// JavaScript
var domRect = element.getBoundingClientRect()

// Jquery
positionImgTop = $(def).offset().top
positionImgLeft = $(def).offset().left

/// Modifier la position d'un Elément en fonction d'un autre
positionImgTop = $(def).offset().top;
positionImgLeft = $(def).offset().left;
console.log(positionImgTop);
console.log(positionImgLeft);

var posTop = positionImgTop + 300
var posLeft = positionImgLeft +100

$(".infoBulle").css({
top: posTop,
left: posLeft
})