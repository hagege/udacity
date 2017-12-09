/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name: "HG",
    friends: 4,
    messages: ["toll", "super", "weiter so", "na klar", "perfekt"],
    postMessage: function addMessage(messages) {
        messages.push("neue message");
    },
    deleteMessage: function delMessage(index) {
        messages.splice(index, 1);
    },
    addFriend: function addF() {
      messages.friends += 1;    
    },
    removeFriend: function remF() {
      if (messages.friend > 1) {
        messages.friends -= 1;    
      }
    },
};