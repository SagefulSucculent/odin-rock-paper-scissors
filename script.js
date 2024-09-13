
/* 
-=-=-=-=- plan -=-=-=-=-
    [x] create computer choice
        
    [x] create human imput

    [x] create scores for each player

    [ ] create a single round

    [ ] create a funtion for 5 rounds
*/

console.log(
    'Please enter the following into the prompt',
    "Enter 'rock' or 1 for rock",
    "Enter 'paper' or 2 for paper",
    "Enter 'scissors' or 3 for scissors"
);

const weaponArray = ['undefined', 'rock', 'paper', 'scissors']

let userScore = 0;
let aiScore = 0;
function getAIChoice() {
    const randomInt = Math.floor(Math.random() * 3) + 1;

    return randomInt;
}

function getUsersChoice() {
    const getResponse = window.prompt('Please enter either a single number or word');

    const userResponse = parseInt(getResponse) || getResponse.toLowerCase();

    switch (userResponse) {
        case 'rock':
        case 1:
            return 1;
        case 'paper':
        case 2:
            return 2;        
        case 'scissors':
        case 3:
            return 3;
        default:
            return 0;
    }
}

function playRound() {
    const aiChoice = getAIChoice();
    const userChoice = getUsersChoice();
    console.log('AI choice:', weaponArray[aiChoice] )
    console.log('User choice:', weaponArray[userChoice] )
    if(aiChoice === userChoice){
        console.log('tie');
    } else if (
        (aiChoice === 1 && userChoice === 2 ) ||
        (aiChoice === 2 && userChoice === 3 ) ||
        (aiChoice === 3 && userChoice === 1 ) 
    ){
        console.log('User wins!')
        userScore++;
    } else {
        console.log('AI wins! >:3')
        aiScore++;
    }
}

playRound();