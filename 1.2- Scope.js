SCOPE

const city = 'New York City';
function logCitySkyline () {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log (logCitySkyline());

-- GLOBAL SCOPE
let satellite  = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky () {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log (callMyNightSky());

-- BLOCK SCOPE

const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

logSkyColor(); 		// Output: blue 
console.log(color); // Output: ReferenceError

