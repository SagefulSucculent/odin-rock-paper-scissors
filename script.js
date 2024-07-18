
/* 
-=-=-=-=- plan -=-=-=-=-
    [x] create computer choice
        
    [ ] create human imput

    [ ] create scores for each player

    [ ] create a single round

    [ ] create a funtion for 5 rounds
*/

function getComputerChoice() {
    const weaponArray = ['rock', 'paper', 'scissors'];

    const randomInt = Math.floor(Math.random() * 3);

    return weaponArray[randomInt];
}

for (let i = 0; i < 10; i++ ){
    console.log(getComputerChoice());
}

console.log('hello world')