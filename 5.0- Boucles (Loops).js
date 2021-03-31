		/************************
		*	 BOUCLES (LOOPS)	*
		************************/

		/*-----------------
		-	The FOR LOOP  -
		-----------------*/

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);		//output: 0, 1, 2, 3
}

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);		//output: 3, 2, 1, 0
}

		---  Looping through Arrays  --

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for(let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}

		---  NESTED LOOPS  --

const bobsFollowers = ['Romain', 'Baptiste', 'Thomas', 'Florian'];
const tinasFollowers = ['Romain', 'Baptiste', 'Laura'];
let mutualFollowers = [];

for (let b = 0; b < bobsFollowers.length; b++) 
{
  for (let t = 0; t < tinasFollowers.length; t++)
  {
    if (bobsFollowers[b] === tinasFollowers[t]) 
    {
      mutualFollowers.push (tinasFollowers[t])
    }
  }
};
console.log(mutualFollowers);	//Output: Romain, Baptiste

		/*-------------------
		-	The WHILE LOOP  -
		-------------------*/
Exemple 1
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);		//output: 1, 2, 3
  counterTwo++;
}

Exemple 2
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = [];
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log (currentCard)
}

		/*--------------------------
		-	The DO ... WHILE LOOP  -
		--------------------------*/
Exemple 1
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);
console.log(countString);

Exemple 2
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do {
  cupsAdded++ ;
} while (cupsAdded < cupsOfSugarNeeded);

--  The BREAK Keyword  --

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Continue.');
}

console.log('Break out the loop!');

/*Output:
Continue
Continue
Continue
Break out the loop*/

Exemple 2
const name = ['Romain', 'Baptiste', 'Thomas', 'Florian'];

for (let i = 0; i < name.length; i++){
  console.log(name[i]);
  if (name[i] === 'Thomas'){
    break;
  }
};
console.log("No more person can enter");