
/* 
-=-=-=-=- plan -=-=-=-=-
    [x] create computer choice
        
    [ ] create human imput

    [ ] create scores for each player

    [ ] create a single round

    [ ] create a funtion for 5 rounds
*/

console.log(
    'Please enter the following into the prompt',
    "Enter 'rock' or 1 for rock",
    "Enter 'paper' or 2 for paper",
    "Enter 'scissors' or 3 for scissors"
);


function getAIChoice() {
    const weaponArray = ['rock', 'paper', 'scissors'];
    const randomInt = Math.floor(Math.random() * 3) + 1;

    return weaponArray[randomInt];
}

function getUsersChoice() {
    const getResponse = window.prompt('Please enter either a single number or word');

    const userResponse = parseInt(getResponse) || getResponse.toLowerCase();

    switch (userResponse) {
        case 'rock':
        case 1:
            return 'rock';
        case 'paper':
        case 2:
            return 'paper';        
        case 'scissors':
        case 3:
            return 'scissors';
        default:
            return 'losted';
    }
}


console.log(getUsersChoice());