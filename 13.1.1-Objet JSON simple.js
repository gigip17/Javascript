		/************************
		*	Objet JSON Simple	*
		************************/

const objetJson = 
{ 
  keyA: 'somestring',
  keyB: 42,
  keyC: false
};

		/****************************
		*	Récupérer les VALEURS	*
		****************************/

console.log(Object.values(objetJson)); // Array ["somestring", 42, false]

console.log(objetJson.keyA); // 'somestring'
console.log(objetJson.keyB); // 42
console.log(objetJson.keyC); // false
 
console.log(objetJson['keyA']); // 'somestring'
console.log(objetJson['keyB']); // 42
console.log(objetJson['keyC']); // false

/// Définir une variable
var key = 'keyA';
console.log(objetJson[key]); // 'somestring'
key = 'keyB';
console.log(objetJson[key]); // 42
key = 'keyC';
console.log(objetJson[key]); // false

/// Fonction
function getValueForKeys(key) {
    return objetJson[key];
}
console.log(getValueForKeys('keyA')); // somestring		


		/************************
		*	Reçupérer les KEYS	*
		************************/
		
/// Object.keys(nomObjet)
// Méthode qui renvoie un tableau contenant les noms des propriétés propres à un objet (qui ne sont pas héritées via la chaîne de prototypes) et qui sont énumérables

console.log(Object.keys(objetJson));
// expected output: Array ["keyA", "keyB", "keyC"]


/// Object.getOwnPropertyNames(outils)
// renvoie un tableau de toutes les propriétés propres à un objet

console.log(Object.getOwnPropertyNames(objetJson));
// expected output: Array ["keyA", "keyB", "keyC"]

Object.keys(object1).forEach(function(key){
  console.log(key);	/*	"keyA"
						"keyB"
						"keyC"
					*/
  var item = object1[key];
  console.log(item);
	});	/*	"somestring"
			42
			false
		*/