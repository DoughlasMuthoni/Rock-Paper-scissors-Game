


let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties : 0,  
 }; 
  
 /*if(score === null)/*(!score) is a shortcut)(is called default operator)
  {
    wins : 0,
    losses : 0,
    ties : 0,  
 };
 */
 updateScoreElement();

  let isAutoPlaying = false;
  let intervalTd;

 function autoPlay(){
 if(!isAutoPlaying){
   intervalTd = setInterval (function()
    {
        const playerMove = pickComputerMove();
        playGame(playerMove);
    }, 1000);
   isAutoPlaying = true;
 } else{
    clearInterval(intervalTd);
    isAutoPlaying = false;
 }
}
  document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock');
  });

  document.querySelector('.js-paper-button')
  .addEventListener('click', () =>{
    playGame('Paper');
  });

  document.querySelector('.js-scissors-button').addEventListener('click', () =>{
    playGame('scissors');
  });

  document.body.addEventListener('keydown', (event) =>{
    if(event.key === 'r'){
    playGame('Rock');
    }else if(event.key === 'p'){
     playGame('Paper');
    } else if(event.key === 's')
    {
     playGame('scissors');
    }

  })

   function playGame(playerMove)
    {
        const computerMove = pickComputerMove();

        let result = '';


        if (playerMove === 'scissors'){
            if( computerMove === 'Rock'){
           result = ('You lose.');
           } else if(computerMove === 'Paper'){
           result = ('You win.');
           }else if(computerMove === 'scissors'){
          result = ('Is a Tie.');
           }
        }  

    else if (playerMove === 'Rock' ){
      if ( computerMove === 'Rock'){
        result = ('Is a Tie.');
        } else if(computerMove === 'Paper'){
        result = ('You lose.');
        }else if(computerMove === 'scissors'){
        result = ('You win.');
        }
    }  

    else if (playerMove === 'Paper'){
      if ( computerMove === 'Rock'){
        result = ('You win.');
        } else if(computerMove === 'Paper'){
        result = ('Is a Tie.');
       }else if(computerMove === 'scissors'){
        result = ('You lose.');
       } 
    }
    /*we update the scores on the pop up*/
    if (result === 'You win.'){
        score.wins += 1;
    } else if(result === 'Is a Tie.')
    { 
       score.ties += 1;
    }else if(result === 'You lose.')
    {
        score.losses += 1;
    }
    /*we update the scores below*/
    updateScoreElement();

localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-result').innerHTML = result;

   document.querySelector('.js-moves').innerHTML = `You
    <img src="../Rock-Paper-Scissors-Fina/images/${playerMove}.png">
    <img src="../Rock-Paper-Scissors-Fina/images/${computerMove}.png">
    Computer.`;
};

  
    function updateScoreElement(){
        document.querySelector('.js-score').
        innerHTML = `Wins : ${score.wins} Losses : ${score.losses} Ties: ${score.ties}`;
    }
    function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';
      
        if (randomNumber < 1 / 3) {
          computerMove = 'Rock';
        } else if (randomNumber < 2 / 3) {
          computerMove = 'Paper';
        } else {
          computerMove = 'scissors';
        }
      
        return computerMove;
      }