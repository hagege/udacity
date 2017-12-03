/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(anzahl){
  var lachen = "";
  for (var i = 0; i < anzahl; i++) {
    lachen += "ha";
  }
  return lachen + "!";
};

console.log(laugh(10));

