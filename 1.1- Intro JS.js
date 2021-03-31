JAVASCRIPT

		----	DÉCLARATION		----
-- DANS HTML:
<script>
	on écrit le code JS entre ces balises
</script>

-- DANS UN FICHIER.JS EXTERNE:
<script src="monFichier.js">
</script>

		----	COMMENTAIRE		----
//commentaire sur une ligne

/*commentaire écris
sur plusieurs lignes*/	

		----	DECLARER UNE VARIABLE	----
-- VAR			//Value CAN'T be Reassigned but can be Undefined
Sa portée est la fonction (FUNCTION LEVEL)
Pas obligatoire de déclarer une variable avec sa valeur initiale (UNDEFINED)	
Obligatoire de déclarer une variable avec sa valeur initiale (DEFINED) On peut la déclarer plus tard
On NE PEUT PLUS modifier sa valeur après sa déclaration (NOT REASSIGNED)

var myValue = 'Value';
console.log(myValue);	// Output: Value
var myValue;
console.log(myValue);	// Output: undefined


-- LET	
Sa portée est limité à celle du bloc courant (BLOCK LEVEL)
Pas obligatoire de déclarer une variable avec sa valeur initiale (UNDEFINED)	
On peut modifier sa valeur après sa déclaration (REASSIGNED)

let myValue = 'Value';
console.log(myValue);	// Output: Value
myValue = 'New Value';
console.log(myValue);	// Output: New Value

-- CONST
Sa portée est limité à celle du bloc courant (BLOCK LEVEL)
Obligatoire de déclarer une variable avec sa valeur initiale (DEFINED)
On NE PEUT PAS modifier sa valeur après sa déclaration (NOT REASSIGNED)/*c’est la référence à la valeur qui ne peut pas être changée. On peut très bien ajouter un élément à un tableau déclaré via const (dans ce cas, on ne fait que changer la valeur référencée)*/

const myValue = 'Value';
console.log(myValue);	// Output: Value