/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "gallery") {
    weapon = "trophy"; 
    if (suspect === "Ms. Van Cleve"){
        solved = true;
    }
} else if (room === "dining room") {
    weapon = "knife";
    if (suspect === "Mr. Parkes"){
        solved = true;
    }
} else if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr"){
        solved = true;
    }
} else {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff"){
        solved = true;
    }
}


if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else {
    console.log("not solved");
}
