
// Check Date
		DATE
Filtre février jusqu'au 29
Les autres jusqu'au 31 ou 30
jusqu'à 12 mois seulement
2 caractères pour les mois et les jours
4 caractères pour les années
Accepte / -  pour séparer les jours mois et années

var erBirthD = new RegExp("^((((0{1}[1-9]{1})|([1-2]{1}[0-9]{1}){1})[/-]{1}([0]{1}[2]{1}))|(((0{1}[1-9]{1})|([1-2]{1}[0-9]{1})|(3{1}[0-1]{1})){1}[/-]{1}((0{1}[1|3|5|7|8]{1})|(1{1}[0|2]{1})){1}){1}|(((0{1}[1-9]{1})|([1-2]{1}[0-9]{1})|([3]{1}[0]{1})){1}[/-]{1}((0{1}[4|6|9]{1})|([1]{2})){1}){1}){1}[/-]{1}(([1]{1}[9]{1}[0-9]{2})|([2]{1}[0]{1}(([0-1]{1}[0-9]{1})|([2]{1}[0]{1}){1}){1})){1}$");

var testBirthDate = erBirthD.test(birthDate.value);

// Check Prenom
var erPrenom = new RegExp("^[A-Z][A-Za-z '-]{1,100}$");
var testPrenom = erPrenom.test(prenom.value);

// Check Nom
var erNom = new RegExp("^[A-Z][A-Za-z '-]{1,100}$");
var testNom = erNom.test(nom.value);

// Check Pseudo
var erPseudo = new RegExp("^[A-Za-z0-9 '-_.]{6,16}$");
var testPseudo = erPseudo.test(pseudo.value);

// Check Tel
var erTel = new RegExp("^0[1-9]([ /-]?[0-9]{2}){4}$");
var testTel = erTel.test(tel.value);

// Check Email
var erEmail = new RegExp("^[a-z.-_]{1,50}[@][a-z]{1,50}[.][a-z]{2,3}$");
var testEmail = erEmail.test(email.value);

// Check PassWord
var erPassWord = new RegExp("^.{6,25}$");	// entre 6 et 25 de n'importe quel caractère
var testPassWord = erPassWord.test(password.value);


// Check Zone de texte
var erCv = new RegExp("^.{400,1500}$");
var testCv = erCv.test($("#cv").val());