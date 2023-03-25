let music;
let time=prompt("How Many time Do you Want to try Guess a Number?");

document.querySelector("#time").textContent=time;

let highscore=0;

let userInput;
let score=0;
let secretNumber=(Math.random()*10).toFixed(0);

document.querySelector(".again").addEventListener("click",function(){
    document.querySelector("#check").disabled=false;
    time=prompt("How Many time Do you Want to try Guess a Number?");
    document.querySelector("#time").textContent=time;

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
    if(time==0){
        document.querySelector("#check").disabled=true;
        document.querySelector("#time").textContent=0;
    }else{

        time-=1;
        document.querySelector("body").style.background="darkblue";
        userInput=Number(document.querySelector(".guess").value);
        if(userInput==secretNumber){
            
            document.getElementById("audio").src="assets/correct.mp4";
            
            document.getElementById("audio").play();
            score+=20;
            document.querySelector(".score").innerHTML=score;}else{
                document.querySelector("#audio").src="assets/wrong.mp4";

                document.getElementById("audio").play();
              }// }
            console.log(userInput);
            console.log(secretNumber);
            secretNumber=(Math.random()*10).toFixed(0);    
             document.querySelector("#time").textContent=time;
    }
})
