(function(){
    "use strict";

    const seeRules = document.getElementById("rulesbutton");
    const rules = document.getElementById("rules");
    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const score = document.getElementById("score");
    const actionArea = document.getElementById("actions");
    const image = document.getElementById("battle");

    const gameData = {
        dice: ["images/die1-1.svg", "images/die2-1.svg","images/die3-1.svg","images/die4-1.svg","images/die5-1.svg","images/die6-1.svg"],
        dice2: ["images/die1-2.svg", "images/die2-2.svg","images/die3-2.svg","images/die4-2.svg","images/die5-2.svg","images/die6-2.svg"],
        players: ["Player 1", "Player 2"],
        score: [50, 50],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 0
    }
    
    seeRules.addEventListener("mouseover", function(){
        rules.className="visible";
    });
    seeRules.addEventListener("mouseout", function(){
        rules.className="invisible";
    });

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>Let the battle begin!</h2>';
        gameControl.innerHTML += '<button id="quit">Restart?</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });
    
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener("click", function(){

            throwDice();

        });
           checkWinningCondition();
    }


    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.ceil(Math.random()*6);
        gameData.roll2 = Math.ceil(Math.random()*6);
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        if(gameData.players[gameData.index] == "Player 1"){
            game.innerHTML += `<div class="dice"><img src="${gameData.dice[gameData.roll1-1]}"> 
            <img src="${gameData.dice[gameData.roll2-1]}"></div>`;
        }
        else if(gameData.players[gameData.index] == "Player 2"){
            game.innerHTML += `<div class="dice"><img src="${gameData.dice2[gameData.roll1-1]}"> 
            <img src="${gameData.dice2[gameData.roll2-1]}"></div>`;
        }
        
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if two 1's are rolled...
        if( gameData.rollSum === 2 ){
            game.innerHTML += "<p>Oops! Your opponent's HP has been restored!</p>"
            gameData.score[gameData.index] = 20;
            gameData.index ? gameData.index = 0 : gameData.index = 1;
            if(gameData.players[gameData.index] == "Player 1"){
                image.src = "images/player2.svg"
            }
            else if(gameData.players[gameData.index] == "Player 2"){
                image.src = "images/player1.svg"
            }

            showCurrentScore();
            setTimeout(function(){
                setUpTurn();
            }, 2000);
        }
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? gameData.index = 0 : gameData.index = 1;
            game.innerHTML += `<p>Your attack missed! End of turn. Go ${gameData.players[gameData.index]}!</p>`
            image.src = "images/neutral.svg"
            setTimeout(function(){
                setUpTurn();
            }, 2000);
        }
        // if neither die is a 1...
        else {
            gameData.score[1-gameData.index] = gameData.score[1-gameData.index] - gameData.rollSum;
            actionArea.innerHTML = '<div id="rollbuttons"><button id="rollagain">Roll again</button><br><button id="pass">Pass</button></div>';

            if(gameData.players[gameData.index] == "Player 1"){
                image.src = "images/player1.svg"
            }
            else if(gameData.players[gameData.index] == "Player 2"){
                image.src = "images/player2.svg"
            }

            document.getElementById('rollagain').addEventListener("click", function(){ 
                throwDice();
            });

            document.getElementById('pass').addEventListener("click", function(){
                gameData.index ? gameData.index = 0 : gameData.index = 1;
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if(gameData.score[1-gameData.index] <= 0 ){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} 
            wins!`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";

            if(gameData.players[gameData.index] == "Player 1"){
                image.src = "images/win1.svg"
            }
            else if(gameData.players[gameData.index] == "Player 2"){
                image.src = "images/win2.svg"
            }

        }
        else{  
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p>${gameData.players[0]} HP: ${gameData.score[0]}/50</p><p>${gameData.players[1]} HP: ${gameData.score[1]}/50</p>`;
    }


}());