/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name:"HG",
    friends:4,
    messages:["toll", "super", "weiter so", "na klar", "perfekt"],
    
    postMessage: function (message) {
        this.messages.push(message);
        return this.messages
    },
    
    deleteMessage: function (index) {
        this.messages.splice(index, 1);
        return this.messages
    },
    
    addFriend: function () {
      this.friends += 1;    
      return this.friends;
    },
    
    removeFriend: function () {
      if (this.friends > 1) {
          this.friends -= 1;    
          return this.friends;
      }
    },
};

console.log(facebookProfile.friends);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.postMessage("Wahnsinn");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(3);
console.log(facebookProfile.messages);
