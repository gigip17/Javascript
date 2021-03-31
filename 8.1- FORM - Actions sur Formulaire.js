			/********************************
			*	Action sur un Formulaire	*
			********************************/
"https://www.w3schools.com/jsref/met_html_blur.asp"



reset()		
submit()	// Soumet le formulaire
click()		// déclanche le clic de souris sur un élément
focus()		// donne le focus à un élément (s'il peut l'être)
blur()		// supprime le focus d'un élément

requestFullscreen()	// ouvre un élément en mode plein écran (video, img, media...)
exitFullscreen()	// annule un élément en mode plein écran
scrollIntoView()	// fait défiler l'élément spécifié dans la zone visible de la fenêtre du navigateur

element.focus();
element.scrollIntoView();


		/****************************
		*	DÉSACTIVER UN ELEMENT	*
		****************************/

//Désactive un élément
$(input).prop(disabled, true);
//Active un élément
$('input').prop(disabled, false);

//Désactive un élément
$('input').attr(disabled,disabled);
//Active un élément
$('input').removeAttr(disabled);

//Désactive un élément
document.getElementById('identifiantDeLElement').disabled = true;
//Active un élément
document.getElementById('identifiantDeLElement').disabled = false;


		/************************************
		*	COCHER/DÉCOCHER UNE CHECKBOX	*
		************************************/
		
// Un composant simple case à cocher.
<input type="checkbox" name="checkme" id="checkme" >Check Me</input>

/// JS
document.getElementById("checkme").checked = true; //Coche la case à cocher
document.getElementById("checkme").checked = false; //Décoche la case à cocher

/// JQUERY
// Pour afficher si cette case est cochée ou non (retourne true ou false).
$('input:checkbox[name=checkme]').is(':checked');

// Pour cocher une case.
$('input:checkbox[name=checkme]').attr('checked',true);
$("#checkme").attr(checked, checked);
$("#checkme").prop(checked, true);

// Décocher une case à cocher.
$('input:checkbox[name=checkme]').attr('checked',false);
$("#checkme").removeAttr(checked);
$("#checkme").prop(checked, false);

			/************
			*	RESET	*
			************/

/// JS
HTMLFormElement.reset()

/// JQUERY		
<form id=formulaire>
 <input type=texte name=test/>
 <button id=boutonReset>Vider le formulaire</button>
</form>

$(#boutonReset).click(function() {
	$(#formulaire).reset(); //Ne fonctionne pas
	$(#formulaire)[0].reset(); //Fonctionne
	$(#formulaire).get(0).reset(); //Fonctionne
});
