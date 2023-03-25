let bills=[22,295,176,440,37,105,10,1100,86,52];
 let tips=[]; let total=[];
let sum=0;

 function calcAvarage(arr){
arr.forEach(element => {
    sum+=element
});
return (sum/arr.length);

 }

function calcTip(bills){
for(let i=0; i<bills.length; i++){
    if(bills[i]>=50 && bills[i]<=300){
         tips.push(15);
 total.push(bills[i] + bills[i]*15/100);
        }else{            
            tips.push(20);
               total.push(bills[i] + bills[i]*20/100);
        }
}
}
calcTip(bills);
for(let i=0; i<total.length; i++){    
    console.log(`the Bill was ${bills[i]}, the Tip was ${tips[i]} and the Total value ${total[i]}`);
}

console.log(`the Avarage of the total is ${calcAvarage(total)}`);
