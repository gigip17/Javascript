			/************************************
			*	AJOUTER / MODIFIER UN ATTRIBUT	*
			************************************/ 
			
setAttribute()
// Permet d'e modifier la valeur actuelle d'un attribut

boutton.setAttribute("value", "valider");		// modifie l'attribut «value» et lui donne la valeur «Valider»
console.log(boutton.getAttribute("value"));		// Renvoi: Valider

--

b.setAttribute("disabled", "");		// réactive un boutton

--------------------------
// Modifier directement dans le chemin de l'élément en allant jusqu'à son attribut:
// Ne fonctionne pas avec les ID et les CLASS

p[1].style.color = 'red';		// Modifie l'attribut "style" du 2ème  paragraphe "p" pour changer sa mise en forme
p[1].style.borderStyle = 'dashed';

boutton.disabled = true;		// désactive le boutton
boutton.value = "Valider";		// Le boutton affiche «Valider»
boutton.type = "text";			// Le boutton devient un champs de Texte

label.textContent = "text";		// Change le texte entre les balises du Label

			/****************************
			*	SUPPRIMER UN ATTRIBUT	*
			****************************/ 
removeAttribute()
// retire un attribut d'un élément

boutton.removeAttribute("id");
img.removeAttribute('src'); 

			/****************************
			*	 OBTENIR UN ATTRIBUT	*
			****************************/ 

.hasAttribute
document.querySelector("a").hasAttribute("target")
// Vérifie la présence d'un attribut target sur un élément a

------------------
getAttribute()
// Permet d'obtenir la valeur actuelle d'un attribut

<input type="button" id="button" name="button" value="Boutton">

var boutton = document.getElementById("button");	// Récupère la valeur de l'attribut «value» du l'élément «button»
console.log(boutton.getAttribute("value"));			// Renvoi: Boutton
