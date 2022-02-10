function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
}
whisper("MARK")
function logShout(string) {
    console.log(string.toUpperCase())
}
logShout('mark')
function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) { 
    if (string===string.toLowerCase()) {
        return "I can't hear you!"
    } else if (string===string.toUpperCase()) {
        return "YES INDEED!" 
    } else if (string === "Let's have dinner together!"){
        return "I would love to!"
    }
}
    

       // if (condition1) {
            //  block of code to be executed if condition1 is true
        //  } else if (condition2) {
            //  block of code to be executed if the condition1 is false and condition2 is true
         // } else {
            //  block of code to be executed if the condition1 is false and condition2 is false
          //}