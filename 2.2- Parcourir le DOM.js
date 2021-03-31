PARCOURIR LE DOM (Document Object Model)

// Accéder au DOM
document

// Accéder à un Élément du DOM
document.head
document.body

		/************************
		*	PARENT ET ENFANTS	*
		************************/
		
// Accéder aux enfants d'un nœud élément
document.body.childNodes[0];

// Parcourir la liste des nœuds enfants
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

// Accéder au parent d'un nœud
document.body.childNodes[1].parentNode

var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body

console.log(document.parentNode); 
// Affiche null : document n'a aucun noeud parent

		/****************
		*	PAR BALISE	*	getElementsByTagName
		****************/

var titresElts = document.getElementsByTagName("h2"); 	// Tous les titres h2

console.log(titresElts[0]); 				// Affiche le premier titre h2
console.log(titresElts.length); 			// Affiche 3

		/****************
		*	PAR CLASSE	*	getElementsByClassName
		****************/

var merveillesElts = document.getElementsByClassName("merveilles");		// Tous les éléments ayant la classe "merveilles"

for (var i = 0; i < merveillesElts.length; i++) {			// Appeler chaque éléments 1 par 1
    console.log(merveillesElts[i]);
}

		/************
		*	PAR ID	*	getElementById
		************/

console.log(document.getElementById("nouvelles"));      // Elément portant l'identifiant "nouvelles"

		/********************
		*	sélecteur CSS	*	querySelectorAll
		********************/

// Tous les paragraphes
document.querySelectorAll("p")

// Tous les paragraphes à l'intérieur de l'ID "contenu"
document.querySelectorAll("#contenu p")

// Tous les éléments ayant la classe "existe"
document.querySelectorAll(".existe")

		/********************
		*	sélecteur CSS	*	querySelector
		********************/
		
// fonctionne comme querySelectorAll, mais renvoie uniquement le premier élément

// Le premier paragraphe
document.querySelector("p")

		/********************
		*	TYPES DE NŒUD	*
		********************/
		
// Découvrir le type d'un nœud
document.body.nodeType
document.body.childNodes[1].nodeType
document.body.childNodes[1].childNodes[0].nodeType

// nodeType 		valeur
Node.ELEMENT_NODE	  1		Élement
Node.TEXT_NODE		  3		Texte
Node.COMMENT_NODE	  8		Commentaire
Node.DOCUMENT_NODE	  9		Document

