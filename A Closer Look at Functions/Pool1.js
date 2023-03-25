const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    displayResults:function(type){
        if(typeof(type)=="object"){
            console.log(poll.answers.toString());
        }
        if(typeof(type)=="string"){
            console.log(`Poll results are ${poll.answers.toString()}`);
        }
       },
    registerNewAnswer:function(){
      
        let n=window.prompt(`    
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)`);

        if(n>=0 && n<=3){
        this.answers[n]+=1;    
    }else{
        alert("Wrong Option!, Please try to answer again");
    }

    return poll.displayResults([5, 2, 3]);
}


};

document.querySelector("#poll").addEventListener("click",()=>{poll.registerNewAnswer()});

