var humanScore = 0;
var computerScore = 0;

document.getElementById('paper').onclick = playPaper;
document.getElementById('stone').onclick = playStone;
document.getElementById('scisscor').onclick = playScissors;

function playStone() {
    play("stone");
}

function playPaper() {
    play("paper");
}

function playScissors() {
    play("scissors");
}
document.getElementById('botDance').classList.remove('bot-animation');
document.getElementById('humanDance').classList.remove('human-animation');

function play(humanPlay) {
    var computerPlay = getComputerPlay();

    document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>";

    if (humanPlay === "stone")
     {
        if (computerPlay === "stone") 
        {
            document.getElementById('status').innerHTML += "<p>You tied. 😐</p>";
        }
         else if (computerPlay === "paper")
          {
            document.getElementById('status').innerHTML += "<p>Bot wins. 😢</p>";
            computerScore++;
            document.getElementById('botDance').classList.add('bot-animation');
            document.getElementById('humanDance').classList.remove('human-animation');
        }
         else if (computerPlay === "scissors")
          {
            document.getElementById('status').innerHTML += "<p>You win! 😊</p>";
            humanScore++;
            document.getElementById('humanDance').classList.add('human-animation');
            document.getElementById('botDance').classList.remove('bot-animation');
        }
    } 
    else if (humanPlay === "paper") 
    {
        if (computerPlay === "stone") 
        {
            document.getElementById('status').innerHTML += "<p>You win! 😊</p>";
            humanScore++;
            document.getElementById('humanDance').classList.add('human-animation');
            document.getElementById('botDance').classList.remove('bot-animation');
        } 
        else if (computerPlay === "paper")
         {
            document.getElementById('status').innerHTML += "<p>You tied. 😐</p>";
        }
         else if (computerPlay === "scissors") 
         {
            document.getElementById('status').innerHTML += "<p>Bot wins. 😢</p>";
            computerScore++;
            document.getElementById('botDance').classList.add('bot-animation');
            document.getElementById('humanDance').classList.remove('human-animation');
        }
    } 
    else if (humanPlay === "scissors")
     {
        if (computerPlay === "stone") 
        {
            document.getElementById('status').innerHTML += "<p>Bot wins. 😢</p>";
            computerScore++;
            document.getElementById('botDance').classList.add('bot-animation');
            document.getElementById('humanDance').classList.remove('human-animation');
        } 
        else if (computerPlay === "paper")
         {
            document.getElementById('status').innerHTML += "<p>You win! 😊</p>";
            humanScore++;
            document.getElementById('humanDance').classList.add('human-animation');
            document.getElementById('botDance').classList.remove('bot-animation');
        } 
        else if (computerPlay === "scissors")
         {
            document.getElementById('status').innerHTML += "<p>You tied. 😐</p>";
        }
    }

    document.getElementById('humanScore').innerHTML = humanScore;
    document.getElementById('computerScore').innerHTML = computerScore;

    if (humanScore > computerScore) {
        document.getElementById('botDance').style.visibility = "hidden";
    } else {
        document.getElementById('botDance').style.visibility = "visible";
    }

    // Hide the image when the bot wins
    if (humanScore < computerScore) {
        document.getElementById('humanDance').style.visibility = "hidden";
    } else {
        document.getElementById('humanDance').style.visibility = "visible";
    }
}

function getComputerPlay() {
    var plays = ['stone', 'paper', 'scissors'];
    var play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}
