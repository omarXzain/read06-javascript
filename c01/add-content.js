
   
var today = new Date();
 var hourNow = today.getHours();
//  var greeting = getGreeting(hourNow);




   for (var i=0; i<100; i++){

   var sumx = prompt("What is the sum of 34 + 19?")
   
   if (sumx == 53) {
      alert ('correct answer!');
      break;
   }else{
     sumx = alert("You didn\'t enter the correct number!");
   }
   }

   for (var i=0; i<100; i++){
   var sea = prompt('What is the color of the sea?.... Hint: SKY color');
   if (sea === 'blue' || sea === 'Blue' || sea === 'BLUE') {
      alert ('WOW!! You are a Genius!');
      break;
   }else{
     sea = alert("You didn\'t enter the correct color!");
   }
}




function getGreeting(){
   var hour = prompt('Now.. What is the hour!');
   var greeting;

   if (hour > 24) {greeting= 'Welcome!';}
   else if ( hour > 18) { greeting = 'Good evening!';}
   else if (hour > 12) { greeting = 'Good afternoon!';}
   else if (hour > 0) { greeting = 'Good morning!';}
   
   return greeting;
}

document.write( '<h3>' + getGreeting() + '</h3>'); 