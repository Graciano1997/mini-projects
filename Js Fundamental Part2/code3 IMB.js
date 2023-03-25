let obj1={  name:'Mark Miller',
            mass:78,
            height:1.69,
            bmi: function calcBMI(){ return this.mass/this.height**2;}}

let obj2={name:'John Smith',
 mass:92, 
 height:1.95,
 bmi: function calcBMI(){ return this.mass/this.height**2;}
}


if(obj2.bmi()>obj1.bmi()){
    
    console.log(`John's BMI ${obj2.bmi().toFixed(1)} is higher than Mark's ${obj1.bmi().toFixed(1)}`);
}else{

    console.log(`Mark's BMI ${obj1.bmi().toFixed(1)} is higher than John's ${obj2.bmi().toFixed(1)}`);
}


/*
if(markHigherBMI==true){
    console.log(`Mark's BMI ${markBMI.toFixed(1)} is higher than John's ${johnBMI.toFixed(1)}`);
}else{
        console.log(`John's BMI ${johnBMI.toFixed(1)} is higher than Mark's ${markBMI.toFixed(1)}`);
    }
    */
/*******************END************************/

