			/********************
			*	setTimeout()	*
			********************/
			
// appelle une fonction ou évalue une expression après un nombre spécifié de millisecondes.

/// Structure
setTimeout(function, milliseconds, param1, param2, ...)

// function	
Required. The function that will be executed
// milliseconds	
Optional. The number of milliseconds to wait before executing the code. If omitted, the value 0 is used
// param1, param2, ...	
Optional. Additional parameters to pass to the function (Not supported in IE9 and earlier)

/// Exemple:
setTimeout(function(){ alert("Hello"); }, 3000);
// ou
function alertFunc() {
  alert("Hello!");
}
var myVar;
function myFunction() {
  myVar = setTimeout(alertFunc, 3000);
}

			/********************
			*	setInterval()	*
			********************/

// appelle une fonction ou évalue une expression à des intervalles spécifiés (en millisecondes)
/* continuera d'appeler la fonction jusqu'à ce que clearInterval () soit appelée ou que la fenêtre soit fermée.
La valeur d'ID renvoyée par setInterval () est utilisée comme paramètre de la méthode clearInterval (). */

/// Structure
setInterval(function, milliseconds, param1, param2, ...)

/// Exemple:
setInterval(function(){ alert("Hello"); }, 3000);
// ou
function alertFunc() {
  alert("Hello!");
}
var myVar;
function myFunction() {
  myVar = setInterval(alertFunc, 3000);
}

			/********************
			*	clearInterval()	*
			********************/
			
// efface une minuterie définie avec la méthode setInterval ()
/* pouvoir utiliser la méthode clearInterval (), vous devez utiliser une variable lors de la création de la méthode d'intervalle */

/// Structure
myVar = setInterval("javascript function", milliseconds);
clearInterval(myVar);


/// Exemple1:
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
}

/// Exemple 2:
var myVar = setInterval(setColor, 300);

function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

function stopColor() {
  clearInterval(myVar);
}

/// Exemple 3:
function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

			/********************
			*	clearTimeout()	*
			********************/
			
// efface un minuteur défini avec la méthode setTimeout ()

/// Structure
clearTimeout(id_of_settimeout)

// id_of_settimeout	
(Required) The ID value of the timer returned by the setTimeout() method


/// Exemples:
myVar = setTimeout("javascript function", milliseconds);
clearTimeout(myVar);

var myVar;
function myFunction() {
  myVar = setTimeout(function(){ alert("Hello"); }, 3000);
}
function myStopFunction() {
  clearTimeout(myVar);
}