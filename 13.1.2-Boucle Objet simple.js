		/************************
		*	Objet JSON Simple	*
		************************/

const objetJson = 
{ 
  keyA: 'somestring',
  keyB: 42,
  keyC: false
};


console.log(Object.getOwnPropertyNames(objetJson));
// expected output: Array ["keyA", "keyB", "keyC"]

console.log(Object.keys(objetJson));
// expected output: Array ["keyA", "keyB", "keyC"]

		/****************************
		*	 BOUCLE for... in...	*
		****************************/

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


		/****************************************************
		*	 BOUCLE forEach + Object.getOwnPropertyNames	*
		****************************************************/

Object.getOwnPropertyNames(objetJson).forEach(function(key){
  console.log(key);	/*	"keyA"
						"keyB"
						"keyC"
					*/
  var item = objetJson[key];
  console.log(item);
});	/*	"somestring"
		42
		false
	*/

		/************************************
		*	BOUCLE forEach	+ Object.keys	*
		************************************/
		
Object.keys(objetJson).forEach(function(key){
  console.log(key);	/*	"keyA"
						"keyB"
						"keyC"
					*/
  var item = objetJson[key];
  console.log(item);
	});	/*	"somestring"
			42
			false
		*/