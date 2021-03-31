const animals = ['pigs', 'goats', 'sheep'];

/// .push()
arr.push(élément1, ..., élémentN)

La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]


/// .splice()
supprimmer un élément d'un tableau

//////////////////////////ARRAYS

		--- ARRAY LITERAL
const hobbies = ['Coding', 'Manga', 'Sport'];

let listItem = (hobbies[0]);
console.log(listItem);		//Output: Coding

console.log(hobbies[2]);	//Output: Sport
console.log(hobbies[3]);	//Output: undefined

		--- UPDATE ELEMENTS

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

		--- The .LENGTH() property //compte le nombre d'élément

console.log(hobbies.length);		// Output: 3
console.log(seasons.length);		// Output: 4

		--- The .INDEXOF() property //compte la position de l'élément

const hobbiesIndex = hobbies.indexOf('Sport');
console.log(hobbiesIndex); 		//Output: 2

		--- The .PUSH() Method

const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

		--- The .POP() Method

const newItemTracker = ['item 0', 'item 1', 'item 2'];
newItemTracker.pop();
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]


// Here we store the returned value in a variable

const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2


		--- MORE ARRAY METHODS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Mutating
.shift(), 		//Remove the first item
.unshift(), 	//Add 'item' to the beginning

Non-Mutating	(returns a new array)
.slice(2, 5), 	//Returns a shallow copy of a portion
.splice(), 		//Remove an item by index position
.join(), 		//Specifies a separator between each elements
.concat()		//Combine two or more arrays 
.filter()		//returns an array of elements after filtering

-- NESTED ARRAYS
const hobbies = [['html', 'CSS'], 'Manga', ['Gym', 'Basket']]

console.log(hobbies);	//Output: [['html', 'CSS'], 'Manga', ['Gym', 'Basket']]
console.log(hobbies [0]);	//Output: ['Manga', 'CSS']
console.log(hobbies [1]);	//Output: ['Manga']
console.log(hobbies [2]);	//Output: ['Gym', 'Basket']
console.log(hobbies [2][0]);	//Output: ['Gym']