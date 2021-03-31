							/************
							*	STRING	*
							************/ 
							
// STRING CONCATENATION et INTERPOLATION

let myPet  = 'Yuna';

//CONCATENATION
console.log ('The name of my pet: ' + myPet + '.');

//INTERPOLATION		${}
console.log(`The name of my pet: ${myPet}.`);
//Outout: The name of my pet: Yuna.

		/****************************************
		*	TRANSFORMER UN TYPE EN STRING		*
		****************************************/

String()	
// String convertit n'importe quelle valeur en chaîne
			// peut convertir null et undefined en chaîne, mais ne peut pas convertir une chaîne
var str = String(null);
typeof str === string

String(24) === "24"


.toString () 
// peut convertir toutes les données en une chaîne, mais exclut null et indéfini

var str = false.toString();
console.log(str, typeof str);

.toString () entre parenthèses peut écrire un nombre, représentant la base des nombres (binaire, octet, décimal, hexadécimal, etc..), et le convertir à ce format (on peut écrire la base que l'on veut)
var string = 1000;
console.log(string, typeof string)		//	renvoi: 1000 number
var string = string.toString(2);
console.log(string, typeof string)		//	renvoi: 1111101000 string

var string = 1000;
console.log(string, typeof string)		//	renvoi: 1000 number
var string = string.toString(16);
console.log(string, typeof string)		//	renvoi: 3e8 string

		/****************************
		*	AGIR SUR LE STRING		*
		*****************************/
		
///----------------------	.split()

// permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes
/// Syntaxe
str.split([séparateur[, qtéMax]])

///Exemple
dataString.split('\n') // split sur le retour à la ligne
dataString.split(',') // split sur chaque virgule

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"
const chars = str.split('');
console.log(chars[8]);
// expected output: "k"
const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]


///----------------------	substr()

//retourne la partie d'une chaîne de caractères comprise entre l'indice de départ et un certain nombre de caractères après celui-ci
/// Syntaxe
chn.substr(début[, longueur])
///Paramètres
début: L'indice du premier caractère à inclure dans la sous-chaîne retournée.
longueur: Optionnel. Le nombre de caractères à extraire.

const str = 'Mozilla';
console.log(str.substr(1, 2)); // expected output: "oz"
console.log(str.substr(2)); // expected output: "zilla"


///----------------------	substring()

// retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.
/// Syntaxe
str.substring(indiceA[, indiceB])
/// Paramètres
indiceA:Un entier compris entre 0 et la longueur de la chaîne.
indiceB: Paramètre optionnel : un entier compris entre 0 et la longueur de la chaine.

const str = 'Mozilla';
console.log(str.substring(1, 3));
// expected output: "oz"
console.log(str.substring(2));
// expected output: "zilla"


///----------------------	slice()

// extrait une section d'une chaine de caractères et la retourne comme une nouvelle chaine de caractères. La chaîne de caractères courante n'est pas modifiée
/// Syntaxe
chn.slice(indiceDebut[, indiceFin])

console.log(str.slice(-4));
// expected output: "dog."
console.log(str.slice(-9, -5));
// expected output: "lazy"