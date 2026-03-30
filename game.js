import{update as updateSnake,draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, resetSnake as resetTheSnake} from './snake.js';
import{update as updateFood, draw as drawFood, resetFood as resetTheFood, score as score, resetScore as resetScore} from './food.js'
import { outSideGrid } from './grid.js';
import { resetInput as resetInput } from './input.js';
let lastRenderTime=0;

const gameBoard=document.getElementById('game-board');
let gameOver=false;
// const gameOverSound = new Audio('/02_audio/bsda_game_over.mp3');
const scoreElement = document.getElementById('score');

function main(currentTime){ //to make the snake keep running

    if(gameOver){
        // gameOverSound.play();


        if(confirm('Game Over! Press OK to play again')){
            // gameOverSound.pause();
            resetTheSnake();
            resetTheFood();
            resetInput();
            resetScore();
            gameOver=false;
            
        }

    }

    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
    window.requestAnimationFrame(main)

    // console.log(currentTime);
    // console.log(secondsSinceLastRender)

    if(secondsSinceLastRender<1/SNAKE_SPEED) {return;}  //


    // console.log('Render');
    lastRenderTime=currentTime;


    //to update the position of snake
    update()
    draw()

}

window.requestAnimationFrame(main);

function update(){
   updateSnake()
   updateFood()
   checkDeath();
   
}

function draw(){
    gameBoard.innerHTML='';
    drawSnake(gameBoard)
    drawFood(gameBoard)
    scoreElement.innerText = "Score: " + score;

}

function checkDeath(){

    gameOver= outSideGrid(getSnakeHead()) || snakeIntersection();
    
}

