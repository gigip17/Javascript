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
		*	 BOUCLE for... in...	*
		****************************/

/// BOUCLE for... in...
for (const property in tableauVilles[0]) {
  console.log(`${property}: ${tableauVilles[0][property]}`);
}	/*	"Département: 59"
		"Ville: Lille"
		"Région: Nord"
	*/

for (const property in tableauVilles) {
	console.log(`Objet ${property}:`);
	const tableauVilleObjet = tableauVilles[property]
	for (const property2 in tableauVilleObjet) {
		console.log(`${property2}: ${tableauVilleObjet[property2]}`);
	}
}	/*	"Objet 0:"
		"Département: 59"
		"Ville: Lille"
		"Région: Nord"
		
		"Objet 1:"
		"Département: 75"
		"Ville: Paris"
		"Région: IDF"
		
		"Objet 2:"
		"Département: 13"
		"Ville: Marseille"
		"Région: PACA"
	*/

		/****************************
		*	 BOUCLE for... of...	*
		****************************/
		
for (const element of tableauVilles) {
  console.log(element);
}	/*	Object { Département: "59", Ville: "Lille", Région: "Nord" }
		Object { Département: "75", Ville: "Paris", Région: "IDF" }
		Object { Département: "13", Ville: "Marseille", Région: "PACA" }
	*/


		/****************************
		*	 MIX for of + for in	*
		****************************/
		
for (const element of tableauVilles) {
    for (const property in element) {
  		console.log(`${property}: ${element[property]}`);
	}
}	/*	"Département: 59"
		"Ville: Lille"
		"Région: Nord"
		
		"Département: 75"
		"Ville: Paris"
		"Région: IDF"
		
		"Département: 13"
		"Ville: Marseille"
		"Région: PACA"
	*/
	
