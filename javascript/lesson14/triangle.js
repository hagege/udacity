/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length

// das komplette Muster wird auf einmal ausgegeben und nicht zeilenweise !!
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(zeilen) {
    var triangle = "";
    for (var i = 1; i <= zeilen; i++) {
        triangle += makeLine(i);
    }
    return triangle;
}



// test your code by uncommenting the following line
console.log(buildTriangle(10));
// console.log(makeLine(10));
