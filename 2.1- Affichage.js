					/****************
					*	AFFICHAGE	*
					****************/

console.log()	//Permet d'afficher le résultat dans la CONSOLE de la page web (outil developpeur - Inspect Element)

console.error() // Permet d'afficher une erreur dans la CONSOLE

alert()		//Permet d'afficher le résultat dans une boite de dialogue sur la page web

prompt()	// Permet de demander des informations dans une boite de dialogue sur la page web

confirm()	// Affiche une boite de dialogue avec 2 bouttons (OK / Annuler) qui renvoi les valeur «true» et «false»


				/****************************
				*	AFFICHER DANS LE HTML	*
				****************************/
					
document.getElementById("nom de l'id").innerHTML = ``	//Permet d'insérer du texte dans la page HTML afin d'afficher le résultat sur la page web

element.insertAdjacentHTML(position, text);

position 
// représente la position relative à l'element, et doit être une des chaînes de caractères suivantes :
'beforebegin'	// Avant l'element  lui-même.
'afterbegin'	// Juste à l'intérieur de l'element , avant son premier enfant.
'beforeend'		// Juste à l'intérieur de l'element , après son dernier enfant.
'afterend'		// Après element lui-même.

text
// est la chaîne de caractères qui doit être analysée en tant qu'HTML ou XML et insérée dans l'arbre du DOM