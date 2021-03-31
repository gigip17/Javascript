					/************************
					*	TYPE DES VALEURS	*
					************************/ 

// BOOLEAN
true / false

// NUMBER
nombre entier:	23	
nombre décimal:	12.3467
nombre négatif:	-6

// STRING
"noté entre guillemet double" 'ou entre guillemet simple'

// UNDEFINED
Le type n'est pas définis
==>		dans une variable non déclaré

//*********** 	TYPE COMPOSITE
array []
objet ()
function () => {}

//*********** 	PROPRIÉTÉ GLOBAL
Elles renvoient une valeur simple. Elles n'ont ni propriétés ni méthodes.

Infinity
NaN
undefined
globalThis

		/************************************
		*	RÉCUPÉRER LE TYPE DE DONNÉE		*
		************************************/ 

typeof	
//Renvoi le type de donnée d'une valeur

const inconnu = 'foo' / 9 / true;
console.log(typeof inconnu); 
// Output: string / number / boolean

typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Bien que littéralement ce soit "Not-A-Number"…
typeof Number('1') === 'number'; // Number essaie de convertir l'argument en nombre

typeof "" === 'string';
typeof "bla" === 'string';
typeof "1" === 'string'; // on a ici un nombre écrit sous forme d'une chaîne
typeof (typeof 1) === 'string'; // typeof renvoie toujours une chaîne
typeof String(1) === 'string'; // String convertit n'importe quelle valeur en chaîne

typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean convertit n'importe quelle valeur en son équivalent logique
typeof !!(1) === 'boolean'; // deux appels à l'opérateur ! (le NON logique) sont équivalents à Boolean()

typeof undefined === 'undefined';
typeof blabla === 'undefined'; // pour une variable indéfinie

typeof [1, 2, 4] === 'object';
typeof new Date() === 'object';
typeof new String("abc") === 'object';

typeof function(){} === 'function';
typeof Math.sin === 'function';


