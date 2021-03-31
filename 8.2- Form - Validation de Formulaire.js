			/****************
			*	JavaScript	*
			****************/



<form action="" name="myForm" id="IdForm">
    <select name="mySelect" id="myselect" onchange="this.form.submit()">
        <option value="1">One</option>
        <option value="2">Two</option>
    </select>
	<input type="button" id="btValider" name="btValider" value="Valider" />
</form>


var IdForm = document.getElementById("IdForm")
var myForm = document.getElementsByName("FormName")   // récupère le name du Form
var myFormShort = document.FormName                   // récupère aussi le name du Form
var mySelect = document.getElementById("mySelect")
var btValider = document.getElementById("btValider");

mySelect.onchange = () => {myFormShort.submit()}// by Name
mySelect.onchange = () => {IdForm.submit()}		// by Id

btValider.onclick = () => { document.forms["myForm"].submit()}
// btValider.onclick = () => { document.forms["IdForm"].submit()}
// btValider.onclick = () => { document.forms["0"].submit()}
btValider.onclick = () => { IdForm.submit() }
btValider.onclick = () => { myFormShort.submit() }
btValider.onclick = () => { myForm[0].submit() }

			/************
			*	JQUERY	*
			************/

$('form select').on('change', function(){
    $(this).closest('form').submit();
});

$(document).ready(function() {
  $('#cars').on('change', function() {
     document.forms[myFormName].submit();
  });
});

//soumettre un formulaire en déclenchant l'événement de clic sur le bouton d'envoi:
$(document).ready(function() {
  $('#cars').on('change', function() {
    var $form = $(this).closest('form');
    $form.find('input[type=submit]').click();
  });
});