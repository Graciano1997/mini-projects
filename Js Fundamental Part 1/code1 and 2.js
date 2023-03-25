let markMass; let markHeight;
let johnMass; let johnHeight;

/********Data 1************/
markMass=78;
markHeight=1.69;

johnMass=92;
johnHeight=1.95;
let markBMI=markMass/markHeight**2;
let johnBMI=johnMass/johnHeight**2;

let markHigherBMI=markBMI>johnBMI? true:false;

if(markHigherBMI==true){
    console.log(`Mark's BMI ${markBMI.toFixed(1)} is higher than John's ${johnBMI.toFixed(1)}`);
}else{
        console.log(`John's BMI ${johnBMI.toFixed(1)} is higher than Mark's ${markBMI.toFixed(1)}`);
    }
/*******************END************************/

/*************Data 2*************/

markMass=95;
markHeight=1.88;

johnMass=85;
johnHeight=1.76;

markBMI=markMass/markHeight**2;
johnBMI=johnMass/johnHeight**2;

markHigherBMI=markBMI>johnBMI? true:false;
if(markHigherBMI==true){
    console.log(`Mark's BMI ${markBMI.toFixed(1)} is higher than John's ${johnBMI.toFixed(1)}`);
}else{
        console.log(`John's BMI ${johnBMI.toFixed(1)} is higher than Mark's ${markBMI.toFixed(1)}`);
    }

/***************END**********************/