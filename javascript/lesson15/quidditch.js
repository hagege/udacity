/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

function hasEnoughPlayers(team){
    var player=team.length;
    if (player >= 7){
        return (true);
    }
    else
    {
        return (false);
    }
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));