		/****************************************
		*	 OBTENIR ET MODIFIER DANS LE DOM	*
		****************************************/
		
		/************************
		*	 LE CONTENU HTML	*
		************************/
-----------
.innerHTML
-----------
// Cette propriété permet de RÉCUPÉRER et modifier tout le contenu HTML d'un élément du DOM
// Ces caractères (&) (<) (>) seront remplacé par : 
&	&amp;
<	&lt;
>	&gt;

// Récupère le contenu
document.getElementById("contenu").innerHTML

// Modifie le contenu
document.querySelector("p").innerHTML = `Je remplace le texte initial`

.value =
// Modification de la valeur d’un élément HTML de formulaire
document.getElementById("id_de_l_element").value = valeur;

----------------------
.insertAdjacentHTML()
----------------------
// Pour insérer le HTML dans le document, plutôt que de remplacer le contenu d'un élément

div1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

element.insertAdjacentHTML(position, text);
position 
// représente la position relative à l'element, et doit être une des chaînes de caractères suivantes :
'beforebegin'	// Avant l'element  lui-même.
'afterbegin'	// Juste à l'intérieur de l'element , avant son premier enfant.
'beforeend'		// Juste à l'intérieur de l'element , après son dernier enfant.
'afterend'		// Après element lui-même.

text
// est la chaîne de caractères qui doit être analysée en tant qu'HTML ou XML et insérée dans l'arbre du DOM

----------
.remove()
----------
// Supprimez l'élément sélectionné du document
var node = document.getElementById("myNode");
node.remove()

		/************************
		*	LE CONTENU TEXTUEL	*
		************************/
-------------
.textContent
-------------
// Renvoie tout le contenu textuel d'un élément entre le balisage HTML (Ne renvoi pas le balisage)
document.getElementById("contenu").textContent
// Peut être modifier
document.getElementById("contenu").textContent = "Nouveau contenu"

---------------------
insertAdjacentText()
---------------------
// Insère un noeud Texte donné à une position donnée par rapport à l'élément sur lequel elle est appelé
element.insertAdjacentText(position, element);
// fonctionne comme .insertAdjacentHTML

		/********************
		*	LES ATTRIBUTS	*
		********************/
--------------
.hasAttribute
--------------
document.querySelector("a").hasAttribute("target")
// Vérifie la présence d'un attribut target sur un élément a

--------------
.getAttribute
--------------
// Cette méthode peut être appliquée à un élément et renvoie la valeur de l'attribut passé en paramètre

// L'attribut href du premier lien
document.querySelector("a").getAttribute("href")

// Certains attributs sont directement accessibles sous la forme de propriétés: id, href, value
document.querySelector("ul").id
document.querySelector("a").href
document.querySelector("input").value

--------------
.setAttribute
--------------
// ajoute l'attribut spécifié à un élément et lui donne la valeur spécifiée
element.setAttribute("class", "democlass");

------------------
.setAttributeNode
------------------
// ajoute le nœud d'attribut spécifié à un élément. Si l'attribut spécifié existe déjà, cette méthode le remplace.
element.setAttributeNode(attributenode)

///Exemple
var h1 = document.getElementsByTagName("H1")[0];   // Get the first <h1> element in the document
var att = document.createAttribute("class");       // Create a "class" attribute
att.value = "democlass";                           // Set the value of the class attribute
h1.setAttributeNode(att);                          // Add the class attribute to <h1>

-----------------
.removeAttribute
-----------------
// supprime l'attribut spécifié d'un élément
document.getElementsByTagName("H1")[0].removeAttribute("class");
---------------------
.removeAttributeNode
---------------------
// supprime l'attribut spécifié d'un élément et renvoie l'attribut supprimé, en tant qu'objet Attr Node
var elmnt = document.getElementsByTagName("H1")[0];	// first <h1> element in the document
var attr = elmnt.getAttributeNode("class");	// class attribute node from <h1>
elmnt.removeAttributeNode(attr);	// Remove the class attribute node from <h1>

		/********************
		*	 LES CLASSES	*
		********************/
-----------
.classList
-----------
// Permet de récupérer la liste des classes d'un élément, s'utilise comme un tableau
var classes = document.getElementById("idName").classList;
classes.length	// Nombre de classe que posséde l'élément
classes[0]		// Renvoi la classe en fonction de sa position

		/********************
		*	 LES ÉLÉMENTS	*
		********************/
---------------
.createElement
---------------

		/********************
		*	 LES ENFANTS	*
		********************/
-------------
.appendChild
-------------
// ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié
var elementAjoute = element.appendChild(enfant);

var p = document.createElement("p");
document.body.appendChild(p);

--------------
.replaceChild
--------------
// remplace un nœud enfant par un nouveau nœud
var textnode = document.createTextNode("Water");
var item = document.getElementById("myList").childNodes[0];
item.replaceChild(textnode, item.childNodes[0]);

-------------
.removeChild
-------------
// supprime un nœud enfant spécifié de l'élément spécifié
element.removeChild(element.childNodes[0]);