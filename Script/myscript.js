function game(userChoice) {
    //variables
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    var result = '';
   //method
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } 
    else if ( (userChoice === 'rock' && computerChoice === 'scissors') || 
              (userChoice === 'paper' && computerChoice === 'rock') || 
              (userChoice === 'scissors' && computerChoice === 'paper')) 
    {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }
    //print statement
    document.getElementById('user').innerHTML = "You chose " + userChoice + "." ;
    document.getElementById('computer').innerHTML = "Computer chose " + computerChoice + ". " + result;
}