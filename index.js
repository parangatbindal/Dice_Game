var randomnum1;                    /* declare randomvalue varibale */
var selected=0;                    /* initialise selected value 0 */
var time_remain=6;                 /* initialize time counter */


/* calling settimeinterval fucntion */
const Timeout= setInterval(roll_dice,1000);

/*function call */
function roll_dice()
{
 if(time_remain==0)
   {
     /* generate random number between 1 to 6 */

        randomnum1= Math.floor(Math.random()*6 + 1)     
        
     /* set random image at the browser window */
        var image1= 'images/dice' + randomnum1 + '.png' 
        document.getElementsByTagName('img')[0].setAttribute('src',image1); 

     /*logic part is here if no value value is selected then alert message */
        if(selected==0)
        {
          alert("you didnot make any choice");
        }

     /*if selected value matches with the random value then */
        if(selected==randomnum1)
        {
            score=score+10;
            document.getElementById("score").innerHTML=score;
            document.getElementById("result").innerHTML="Your guess was right";
            document.getElementById("result").style.backgroundColor = "Grey";

            /*set selected to 0 again*/
            selected=0;
        }
     /* in case value doesnot match */
        if(selected!=randomnum1 && selected!=0) 
        {
            document.getElementById("result").innerHTML='your guess was wrong';
            document.getElementById("result").style.backgroundColor = "Grey";
            selected=0;
        }
       
       time_remain=5;
    }

     /* show remaining time */
    else
    {
        time_remain--;
    }
    document.getElementById("tagg").innerHTML=`time remaining is ${time_remain} seconds`;    
}

/* declaring variable score=0 */
let score=0;


/* function call onclick  */
function myfunction(num){
    //document.getElementsByClassName("btns")[num].setAttribute("style", "backgroundColor: orange");
    selected= num;
    document.getElementById("variable").innerHTML=num;
    
 }





