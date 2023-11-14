function game(userChoice) {
    // Computers choice (from seperate function)
    var computerChoice = getComputerChoice();
    // result 
    var result = '';
    //method (using OR to set player Win scenarios)
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }
    // Output
    document.getElementById('user').innerHTML = "You chose " + userChoice + ".";
    document.getElementById('computer').innerHTML = "Computer chose " + computerChoice + ". " + result;
}

function getComputerChoice() {
    // Generate a random number between 0 and 2
    var randomNumber = Math.floor(Math.random() * 3);
    // Assign random number to a choice
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}