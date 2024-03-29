///////////////////////////////////////
// Coding Challenge #1

/* 

*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerNames) {
    console.log(
      `Players scoring goals were ${playerNames} with a total of ${game.score} goals scored`
    );
  },
};

/*
      With the above object:
      1. Create one player array for each team (variables 'players1' and 'players2')
      2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players*/

//1&2

const [gk1, ...fieldPlayers1] = game.players[0];

console.log(gk1, fieldPlayers1);

const [gk2, ...fieldPlayers2] = game.players[1];
console.log(gk2, fieldPlayers2);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [game.players[0], game.players[1]];
console.log(allPlayers);

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
game.printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
game.printGoals(game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log("team1 wins!!");

team1 > team2 && console.log("team2 wins");

//TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

//GOOD LUCK 😀
