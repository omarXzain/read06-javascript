<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ice cream Station</title>
    <style>
        h1{
            margin-top: 10px;
            color: purple;
            text-align: center;
            font-size: 60px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            
        }


        #Class1Lab{
            background-color: darkgrey;

            color: crimson;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }

        ul li{
           display: inline-block;
           text-decoration: none;
           padding: 15px;
           font-size: 20px;
           color: blue;
           border: black solid 1px;
           border-radius: 20px;
           background-color: rgb(143, 211, 88);
           margin: 15px;
           cursor: pointer;
           -webkit-text-stroke:black 0.8px;
           font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
           
        }

        body{
            background-image: url("https://img.freepik.com/free-photo/ice-cream-background-with-copyspace_23-2147811016.jpg?size=626&ext=jpg");
            background-size: cover;
            background-repeat: no-repeat;
        }

        hr{
            border: purple solid 3px;
        }
        
        main ol  {

            font-size: 25px;
            color: chocolate;
            text-decoration: underline;  
            margin: 7px;
           
        }

        p{
            font-size: 20px;
        }

        #icecar{

            position: absolute;
            top: 93px;
            left: 73%;
            height: 152px;
        }
        #icecar:hover{
            transition: 5s;
            left: 47%;
        }

        #mylogo{

            float: right;
            margin-top: -15%;
            width: 13%;
        }

        #finger{
            position: absolute;
         left: 73%;
         top: 27%;
         width: 8%;
        }

        #stickman{
            width: 3%;
        position: absolute;
        top: 25%;
        left: 45%;


        }

    

    </style>
</head>
<body>
    <header>

        <h1 >Ice Cream Station </h1>
        <nav>

            <ul>

                <li>Home</li>
                <li>IceCream Products</li>
                <li>About Us</li>
                <li>Contact Us</li>

            </ul>


        </nav>
        <hr>
        <img id="icecar" src="https://cdn3.iconfinder.com/data/icons/summer-vol-2-5/512/summer_set-25-512.png" alt="ice cream car">
        <img id="mylogo" src="https://visittrivalley.com/wp-content/uploads/2018/06/ice-cream-cone-flat.png" alt="mylogo">  
        <img id="finger" src="https://dimars.com.mx/assets/images/swipe.gif" alt="curserleft">
        <img id="stickman" src="https://images.vexels.com/media/users/3/189928/isolated/preview/5a8623fc09b4e1bd711b402cafe7299b-stickman-vector-pose-by-vexels.png" alt="stickman">



    </header>



<main>

    <h1 id=Class1Lab  >Class 1 Lab</h1>

    <p>Choose Your Favorite Flavor From The List Below:</p>
<ol id="olp">
    <li>Strawberry</li>
    <li>Cookies & Cream</li>
    <li>Chocolate</li>
    <li>Vanilla</li>



</ol>

      <p>Thanks For Choosing IceCream Staion</p>






<h3>About The Questions:</h3>
<ol>
<p style="color: rgba(102, 255, 0, 0.986); background-color: rgb(208, 27, 214); width: 34%;">Tell Me Your Name And I Will Stop Calling You a Stranger</p>
<p style="color: rgb(255, 255, 255); background-color: rgb(255, 0, 85); width: 54%;"  >Please Put Your Phone Number So You Can Enter The Draw In Our Weekly Competitions Prizes</p>
<p style="color: rgb(255, 9, 91); background-color: rgb(241, 245, 125); width: 31%;" >Chocolate Or CookiesCream Or Vanilla Or Strawberry?</p>
<p style="color: blue; background-color: chartreuse; width: 28%;">No one Can Resist Our Ice Cream Taste, can You </p>
</ol>
</main>





<footer>


</footer>


<script>
// 1
alert ("Welcome To Our IceCream Website, Stranger!!")
var username = prompt('Tell Me Your Name And I Will Stop Calling You a Stranger ;)' )
console.log(' What a Nice Name '  + username )
alert('What a Nice Name! ' + username);
// 2
var phonenum = prompt('Please Put Your Phone Number So You Can Enter The Draw In Our Weekly Competitions Prizes. ')
console.log('So Your Number is ' + phonenum + '!! WoW a Golden Number!' )
    alert('So Your Number is ' + phonenum + '!! WoW a Golden Number hah!');

// 3
    var favflavor = prompt('Chocolate Or CookiesCream Or Vanilla Or Strawberry? ');
    console.log(' Hmm!! You Picked ' + favflavor + ' It is My Favorite Too :)' );
    alert(' Hmm!! You Picked ' + favflavor + ' It is My Favorite Too :)' );

// 4
var age = prompt(' Please Tell Me Your Age?')
   
   alert ('Thanks! You Are Now Registered! Here is Your Details:' ) 
   console.log(' Your name: ' + username + ' Your Number: ' + phonenum + ' Your Age: ' + age )
   alert (' Your name: ' + username + '  Your Number: ' + phonenum + '  Your Age: ' + age ) 


 // 5
    for(var i=0; i<100; i++){
  var love = prompt('Say I Love You And I will Give You A Gift!!? ');

  if ( love === 'I Love You' || love === 'i love you' || love === 'I LOVE YOU' ){
    console.log('I Love You Too ' + username + ' Here is Your Gift!' );
    love = alert('I Love You Too '+ username + ' Here is Your Gift!' );
    break;
  }
  else {
    love = alert('You didn\'t Say I Love You !! ' + username );
  }
}
alert (' A Gift Has Been Sent To You With The IceCream Car ');





</script>


</body>
</html>
