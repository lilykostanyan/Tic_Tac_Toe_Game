const input = require('readline-sync');

let gameBoard = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let playerID = 0;
let completedMoves = 0;

let player1 = "x";
let player2 = "o";

function printMatrix(matrix) {
    for (array of matrix) 
    console.log(array)
       //for (let i = 0; i < matrix.length; i++) {
            //for (let j = 0; j < matrix[i].length; j++) {
            //console.log(matrix[i][j] + " ");
}
function checkInt(num){
    if(isNaN(num) || num % 1 != 0)
        return false;
    
    return true;
}

while (true) {
    if(playerID === 0)
    {
        console.log("Player 1 is choosing!");
    }
    else
    {
        console.log("Player 2 is choosing!");
    }
    let row = input.question("Please enter value for the row: ");
    while(row < 1 || row > 3 || !checkInt(row))
    {
        row = input.question("Please enter a value for the row between 1 and 3: ");
    }

    let column = input.question("Please enter value for the column: ");
    while(column < 1 || column > 3 || isNaN(column) || !checkInt(column))
    {
        column = input.question("Please enter a value for the column between 1 and 3: ");
    }

    row = row - 1;
    column = column - 1;

    if (gameBoard[row][column] !== ' ') {
        console.log("You cannot do this move");
        continue;
    }


    if (playerID == 0) {
        gameBoard[row][column] = player1;
        playerID = 1;
    }
    else {
        gameBoard[row][column] = player2;
        playerID = 0;
    }

    completedMoves = completedMoves + 1;

    printMatrix(gameBoard);

    //first player win//
    if (gameBoard[0][0] === player1 && gameBoard[0][1] === player1 && gameBoard[0][2] === player1) {
        console.log("First Player Wins!!!");
        break;
    }
    if (gameBoard[1][0] === player1 && gameBoard[1][1] === player1 && gameBoard[1][2] === player1) {
        console.log("First Player Wins!!!");
        break;
    } if (gameBoard[2][0] === player1 && gameBoard[2][1] === player1 && gameBoard[2][2] === player1) {
        console.log("First Player Wins!!!");
        break;
    }
    if (gameBoard[0][0] === player1 && gameBoard[1][0] === player1 && gameBoard[2][0] === player1) {
        console.log("First Player Wins!!!");
        break;
    } if (gameBoard[0][1] === player1 && gameBoard[1][1] === player1 && gameBoard[2][1] === player1) {
        console.log("First Player Wins!!!");
        break;
    } if (gameBoard[0][2] === player1 && gameBoard[1][2] === player1 && gameBoard[2][2] === player1) {
        console.log("First Player Wins!!!");
        break;
    }
    if (gameBoard[0][0] === player1 && gameBoard[1][1] === player1 && gameBoard[2][2] === player1) {
        console.log("First Player Wins!!!");
        break;
    } if (gameBoard[2][0] === player1 && gameBoard[1][1] === player1 && gameBoard[0][2] === player1) {
        console.log("First Player Wins!!!");
        break;
    }
    //second player win//
    if (gameBoard[0][0] === player2 && gameBoard[0][1] === player2 && gameBoard[0][2] === player2) {
        console.log("Second Player Wins!!!");
        break;
    }
    if (gameBoard[1][0] === player2 && gameBoard[1][1] === player2 && gameBoard[1][2] === player2) {
        console.log("Second Player Wins!!!");
        break;
    } if (gameBoard[2][0] === player2 && gameBoard[2][1] === player2 && gameBoard[2][2] === player2) {
        console.log("Second Player Wins!!!");
        break;
    }
    if (gameBoard[0][0] === player2 && gameBoard[1][0] === player2 && gameBoard[2][0] === player2) {
        console.log("Second Player Wins!!!");
        break;
    } if (gameBoard[0][1] === player2 && gameBoard[1][1] === player2 && gameBoard[2][1] === player2) {
        console.log("Second Player Wins!!!");
        break;
    } if (gameBoard[0][2] === player2 && gameBoard[1][2] === player2 && gameBoard[2][2] === player2) {
        console.log("Second Player Wins!!!");
        break;
    }
    if (gameBoard[0][0] === player2 && gameBoard[1][1] === player2 && gameBoard[2][2] === player2) {
        console.log("Second Player Wins!!!");
        break;
    } if (gameBoard[2][0] === player2 && gameBoard[1][1] === player2 && gameBoard[0][2] === player2) {
        console.log("Second Player Wins!!!");
        break;
    }
    //no winner
    if(completedMoves >= 9)
    {
        console.log("It's a Draw!!!");
        break;
    }
}