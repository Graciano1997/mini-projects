const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1:1.33,
    x:3.25,
    team2:6.5,
    },};
    
    
    let players1=game.players[0];   
    let players2=game.players[1];
    let allPlayer=players1+players2; 
    
    let scorers={} //the Scorers Object...
    let goals=0;
    
    
/*******For Bayern Munich*****************/
let gkBayern=players1[0];
let fieldPlayersBayern=players1;
fieldPlayersBayern.shift();

/*******For Borussia Dortmundo*****************/
let gkDortmund=players2[0];
let fieldPlayersDortmund=players2;
 fieldPlayersDortmund.shift();
// console.log(fieldPlayers);

let players1Final=players1;

players1Final.push('Thiago');
players1Final.push('Coutinho');
players1Final.push('Perisic');

let team1=game.odds.team1;
let team2=game.odds.team2;
let draw=game.odds.x;

let possibleWinner=(team2>team1);

function printGoals(...player){
    (Array)(...player).forEach(element => {
        goals=game.scored.filter(el=>el===element).length;
console.log(`The Player ${element} scored ${goals} goals`);
    });
    
   // console.log(goals);
    
}


switch(possibleWinner){
    case true:
        console.log(`${game.team1} FC is more likely to win ⚽`);
        break;
    case false:
        console.log(`${game.team2} FC is more likely to win`);
        break;
}
printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');

//Goal lists....

console.log("===================================");
for(let i=0; i<game.scored.length;i++){
    console.log(`Goal ${i+1} : ${game.scored[i]}`);
}

let sumOdds=0;
for(let x in game.odds){
sumOdds+=game.odds[x]/3;
}


console.log(`The Avarage Odd is ${sumOdds}`);
console.log("\n **************ODDS************* ")

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

(game.scored).forEach(element => {
    goals=game.scored.filter(el=>el===element).length;
 if(goals>0){scorers[element]=goals;}   
});


console.log(scorers);


/***********************************************/

const gameEvents = new Map([
[17, '⚽ GOAL'],
[36, '� Substitution'],
[47, '⚽ GOAL'],
[61, '� Substitution'],
[64, '� Yellow card'],
[69, '� Red card'],
[70, '� Substitution'],
[72, '� Substitution'],
[76, '⚽ GOAL'],
[80, '⚽ GOAL'],
[92, '� Yellow card'],
]);

const events=new Map([
    [17, '� Substitution'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [64, '� Yellow card'],
    [67, '⚽ GOAL'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [69, '� Red card'],
    [90, '� Yellow card'],
])

console.log("The yellow card in the 64 was removed because it was unfair:",gameEvents.delete(64));

for(let i=1; i<=90;i++){
    if(i%9==0){
        console.log("An event happened, on Average, every 9 minutes",i);
    }
}

/**************************/

gameEvents.forEach(function(value,key){
    if(key<45){
        console.log(`[FIRST HALF] ${key}: ${value}`);
    }else{
        console.log(`[SECOND HALF] ${key}: ${value}`);

    }
})
