/**********Main***************/
/****************************/


/*******Dolphins & Koala data 1************/
let calcAvarage=(score1,score2,score3)=>{
    return (score1+ score2 + score3)/3;}
    
    function checkWinner(avgDolphins,avgKoalas){
        (avgDolphins>=2*avgKoalas)?(console.log(`Dolphins win (${avgDolphins} VS. ${avgKoalas})`)):(console.log(`Koalas win (${avgKoalas} VS. ${avgDolphins})`));
    }

    /*********First Datas*******************/
    let avgDolphins=calcAvarage(44,23,71);
    let avgKoalas=calcAvarage(65,54,49);
    checkWinner(avgDolphins,avgKoalas);

    /**********Second Datas****************/
avgDolphins=calcAvarage(85,54,41);
avgKoalas=calcAvarage(23,34,27);
checkWinner(avgDolphins,avgKoalas);


/**********************************************/
