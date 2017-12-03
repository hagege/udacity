/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

var laugh = function(anzahl){
  var lachen = "";
  for (var i = 0; i < anzahl; i++) {
    lachen += "ha";
  }
  return lachen + "!";
};

emotions("happy",  laugh); // don't use `()` not needed.

