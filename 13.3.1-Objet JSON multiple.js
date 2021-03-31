		/********************************
		*	Objet JSON Multiple niveaux	*
		********************************/

var outils = 
{
	"t" : {
		"nom" : "titre",
		"niveau" : 1
	},
	"p" : {
		"nom" : "paragraphe",
		"ss_outils" : ["strong","em","note","lien"]
	},
	"l" : {
		"nom" : "liste",
		"type" : "ul",
		"ss_outils" : ["strong","em","note","lien"]
	}
};

		/****************************
		*	Récupérer les VALEURS	*
		****************************/

console.log(outils.t.nom); // 'titre'
console.log(outils.p.nom); // 'paragraphe'
console.log(outils.l.nom); // 'liste'
 
console.log(outils['t'].nom); // 'titre'
console.log(outils['p'].nom); // 'paragraphe'
console.log(outils['l'].nom); // 'liste'
 
console.log(outils['t']['nom']); // 'titre'
console.log(outils['p']['nom']); // 'paragraphe'
console.log(outils['l']['nom']); // 'liste'

/// Définir une variable
var key = 't';
console.log(outils[key].nom); // 'titre'
key = 'p';
console.log(outils[key]['nom']); // 'paragraphe'
key = 'l';
console.log(outils[key]['nom']); // 'liste'

/// Fonction
function getValueForKeys(key1, key2) {
    return outils[key1][key2];
}
console.log(getValueForKeys('t', 'nom')); //titre

/// Object.getOwnPropertyNames(nomObjet)
console.log(outils[Object.getOwnPropertyNames(outils)[0]]) // Object { nom: "titre", niveau: 1 }
console.log(outils[Object.getOwnPropertyNames(outils)[2]]) // Object { nom: "liste", type: "ul", ss_outils: Array ["strong", "em", "note", "lien"] }

Object.getOwnPropertyNames(outils).forEach(function(key){
  var outil = outils[key];
  console.log(outil.nom);
})	/* output:	"titre" 
				"paragraphe"
				"liste"
	*/



		/************************
		*	Reçupérer les KEYS	*
		************************/

/// Object.keys(nomObjet)	
console.log(Object.keys(outils)); // Array ["t", "p", "l"]
console.log(Object.keys(outils.p)); // Array ["nom", "ss_outils"]
console.log(Object.keys(outils.t.nom)); // Array ["0", "1", "2", "3", "4"]

/// Object.getOwnPropertyNames(nomObjet)
console.log(Object.getOwnPropertyNames(outils)); // Array ["t", "p", "l"]]
console.log(Object.getOwnPropertyNames(outils.p)); // Array ["nom", "ss_outils"]
console.log(Object.getOwnPropertyNames(outils).p.ss_outils); // Array ["0", "1", "2", "3", "length"]
console.log(Object.getOwnPropertyNames(object)[0]) // "t"