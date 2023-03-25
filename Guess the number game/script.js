let highscore=0;

let userInput;
let score=0;
let secretNumber=(Math.random()*10).toFixed(0);

document.querySelector(".again").addEventListener("click",function(){
    //updating the HighScore...
    if(score>highscore){
        highscore=score;
        document.querySelector(".highscore").innerHTML=highscore;
    }
    //end the HighScore...

    score=0;
    document.querySelector(".score").innerHTML=score;
    secretNumber=Number((Math.random()*10).toFixed(0));
    document.querySelector("body").style.background="#222";


})


document.querySelector("#check").addEventListener("click",function(){
    
    document.querySelector("body").style.background="darkblue";
    userInput=Number(document.querySelector(".guess").value);
    if(userInput==secretNumber){
        score+=20;
        document.querySelector(".score").innerHTML=score;}
   // }
    console.log(userInput);
    console.log(secretNumber);
    secretNumber=(Math.random()*10).toFixed(0);


    
})
