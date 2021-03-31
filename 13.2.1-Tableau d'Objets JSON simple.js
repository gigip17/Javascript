		/****************************
		*	Tableau d'Objet JSON	*
		****************************/

const tableauVilles = 
[
	{ 
		"Département": "59", 
		"Ville": "Lille", 
		"Région": "Nord" 
	},
	{ 
		"Département": "75", 
		"Ville": "Paris", 
		"Région": "IDF" 
	},
	{ 
		"Département": "13", 
		"Ville": "Marseille", 
		"Région": "PACA" 
	}
];

		/****************************
		*	Récupérer les VALEURS	*
		****************************/
		

console.log(tableauVilles.Département); // undefined
console.log(tableauVilles[0].Département); // '59'
console.log(tableauVilles[1].Ville); // 'Paris'
console.log(tableauVilles[1].Région); // 'IDF'
 
console.log(tableauVilles['Département']); // undefined
console.log(tableauVilles[0]['Département']); // '59'
console.log(tableauVilles[2]['Ville']); // 'Marseille'
console.log(tableauVilles[0]['Région']); // 'Nord'
 
console.log(tableauVilles['t']['nom']); // 'titre'
console.log(tableauVilles['p']['nom']); // 'paragraphe'
console.log(tableauVilles['l']['nom']); // 'liste'

/// Définir une variable
var key = 'Département';
console.log(tableauVilles[key]); // undefined
var key = 'Département';
console.log(tableauVilles[0][key]); // '59'

/// Fonction
function getValueForKeys(key1, key2) {
    return tableauVilles[key1][key2];
}
console.log(getValueForKeys(0, 'Département')); // "59"
console.log(getValueForKeys(2, 'Ville')); // "Marseille"

/// Object.values(objet)
console.log(Object.values(tableauVilles)); 
// Array [Object { Département: "59", Ville: "Lille", Région: "Nord" }, Object { Département: "75", Ville: "Paris", Région: "IDF" }, Object { Département: "13", Ville: "Marseille", Région: "PACA" }]
console.log(Object.values(tableauVilles[0])); // Array ["59", "Lille", "Nord"]

	
		/************************
		*	Reçupérer les KEYS	*
		************************/

/// Object.keys(nomObjet) : 

console.log(Object.keys(tableauVilles));  // Array ["0", "1", "2"]
// Object.keys renvoi la liste des objets et non le détails du contenu des objets (il y a 3 objets dans le tableau)
/* 
{ 
	"0:	Département", 
	"1:	Ville", 
	"2:	Région" 
}
*/
console.log(Object.keys(tableauVilles[0])); // Array ["Département", "Ville", "Région"]
// (dans ce cas, l'indice ne modifie rien car chaque Objects ont les même KEY)

/// Object.getOwnPropertyNames(outils)
// renvoie un tableau de toutes les propriétés propres à un objet

console.log(Object.getOwnPropertyNames(tableauVilles)); // Array ["0", "1", "2", "length"]
console.log(Object.getOwnPropertyNames(tableauVilles[0])); // Array ["Département", "Ville", "Région"]