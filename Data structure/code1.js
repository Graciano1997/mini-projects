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
let goals=0;
    (Array)(...player).forEach(element => {
        goals=game.scored.filter(el=>el===element).length;
console.log(`The Player ${element} scored ${goals} goals`);
    });
    
   // console.log(goals);
    
}


switch(possibleWinner){
    case true:
        console.log(`${game.team1} FC is more likely to win `);
        break;
    case false:
        console.log(`${game.team2} FC is more likely to win`);
        break;
}


printGoals('Davies', 'Muller', 'Lewandowski','Kimmich','Hummels');