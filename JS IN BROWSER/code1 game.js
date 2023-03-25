let secretNumber=0; let userValue=0;
//#222
document.querySelector(".again").addEventListener("click",logic);

function logic(){
    
    secretNumber=(Math.random()*10).toFixed(0);
     userValue=document.getElementById("valor").value;

    if(userValue==secretNumber){
        window.alert("You Win")
        document.getElementById("point").innerHTML=100+"%";
      
    }else{
        window.alert("You Loose")
        document.getElementById("point").innerHTML=0+"%";
    
    }

    console.log(userValue);
    console.log(secretNumber);
    document.querySelector(".container").style.background='#222';
    document.querySelector(".container").style.color='#fff';
    document.querySelector("#valor").style.width='15rem';
}
