let elementList;
let icon='';

function camelTransformer (word){
    icon+='✅';
    word=word.toLowerCase(); //First convert all to lower_case
    let i=0; 
    let wordInitial='';let wordFinal='';
    
    if(word.includes("_")){
        i=word.indexOf("_");
        wordInitial=word.slice(0,i);
        wordFinal=word.slice(i+1,word.length);
        wordFinal=wordFinal.charAt(0).toUpperCase()+wordFinal.slice(1,wordFinal.length)  
        return wordInitial.concat(wordFinal.concat(icon));
    
    }
    return;
}

document.querySelector(".again").addEventListener("click",function(){
    elementList=document.getElementById("text").value.split("\n");
  
    elementList.forEach(element => {
        console.log(camelTransformer(element))
    });
icon='';
})