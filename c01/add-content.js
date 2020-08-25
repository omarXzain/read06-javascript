var num = prompt('What is the Time now?');
var today= new Date();
 var hourNow = today.getHours();
  var greeting; 

if (num > 18) {
    greeting= 'Good evening!';}
 else if (num > 12) { greeting = ' Good afternoon!';}
  else if (num > 0) { greeting = 'Good morning!';}
   else if ( num > 24) { 
      greeting = 'Welcome!' ; }

document .write( ' <h3>' + greeting + ' </ h3>'); 