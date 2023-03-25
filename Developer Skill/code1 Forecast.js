

function printForecast(arr){

    console.log("\n");
    
    for(let i=0; i<arr.length;i++){
        console.log(`... ${arr[i]}[i]ºC in Day ${i}`);
    }
    console.log("\n")
    console.log("*************************");
}
//Data 1 
printForecast([17,21,33]);
//Data 2 
//12, 5, -5, 0, 4
printForecast([12,5,-5,0,4]);
