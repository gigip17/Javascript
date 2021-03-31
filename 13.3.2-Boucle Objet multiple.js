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
		*	 BOUCLE for... in...	*
		****************************/

/// Boucle for... in...
for (const property in outils) {
	console.log(`${property}: ${outils[property]}`);
  	/* output:	"t: [object Object]"
				"p: [object Object]"
				"l: [object Object]"
	*/
	console.log(`${property}: ${outils[property].nom}`);
  	/*	"t: titre"
		"p: paragraphe"
		"l: liste"
	*/
	console.log(`${property}: ${outils[property].ss_outils}`);
	/*	"t: undefined"
		"p: strong,em,note,lien"
		"l: strong,em,note,lien"
	*/
}

/// DOUBLE BOUCLE  for... in...

for (const element in outils) {
    console.log(`${element}:`);
	const OutilsElement = outils[element]
    for (const property in OutilsElement) {
		console.log(`${property}: ${OutilsElement[property]}`);
	}
}	/*	"Objet t:"
		"nom: titre"
		"niveau: 1"
		
		"Objet p:"
		"nom: paragraphe"
		"ss_outils: strong,em,note,lien"
		
		"Objet l:"
		"nom: liste"
		"type: ul"
		"ss_outils: strong,em,note,lien"
	*/

