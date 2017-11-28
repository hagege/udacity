/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

var num = 60;

while (num > 0) {
    if (num != 50){
        console.log("T-" + num + " seconds"); 
    }
    else {
        console.log("Orbiter transfers from ground to internal power"); 
    }    
    num = num - 1;    
}
console.log("Solid rocket booster ignition and liftoff!");