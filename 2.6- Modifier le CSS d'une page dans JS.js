					/****************************
					*	MODIFIER LE CSS DANS JS	*
					****************************/

/// Passer par l'attribut style de l'élément HTML que l'on souhaite modifier. 
/*Dans ce cas on utilise le DOM HTML de la même manière qu'on l'utilise pour tout attribut d'un élément HTML. De plus avec cette façon de procéder on est sûr d'arriver à modifier le style car c'est une méthode qui est très spécifique au sens de la cascade CSS (* Si vous ne voyez pas ce que je veux dire revoyez le tuto qui traite de la cascade CSS).*/

var p = document.getElementsByTagName('p');

// Modifier l'attribut "style" du 2ème  paragraphe "p" pour changer sa mise en forme
p[1].style.color = 'red';
p[1].style.borderColor = 'orange';
p[1].style.borderStyle = 'dashed';
p[1].style.borderWidth = '20px';

// Remarque: 
/* bien qu'il soit possible d'ajouter l'attribut style avec une valeur à un élément avec cette méthode, il est recommandé d'utiliser les propriétés de l'objet Style à la place pour le style en ligne, car cela n'écrasera pas les autres propriétés CSS qui peuvent être spécifiées dans l'attribut style: */

// Pas Bien:
element.setAttribute("style", "background-color: red;");

// Bien:
element.style.backgroundColor = "red";


/// Passer par une modification de la feuille de style. 
/* Pour cela il faudra utiliser la partie CSS du DOM qui a été ajouté à partir du Level 2 de la spécification. */


/// Écrire à l'avance une class dans la feuille de style puis d'appliquer cette classe à un élément HTML au moyen de Javascript. 
/* On modifie l'attribut "class" afin que le css lui corresponde et aggissent sur l'élément. Encore faut-il pouvoir le faire car cela suppose que le programmeur connaisse son besoin à l'avance. */

element.setAttribute("class", "bouttonRouge");

