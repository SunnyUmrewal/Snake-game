import { onSnake,expandSnake } from "./snake.js"
import { randomGridPositon } from "./grid.js"
 
let food={x:10,y:1}
const EXPANSION_RATE=1
// const foodEaten = new Audio('/02_audio/bsda_food.mp3');

export let score=0;
export function update(){
    if(onSnake(food)){
        // foodEaten.play();
        expandSnake(EXPANSION_RATE)
        score=score+1;
        food=getRandomFoodPosition();
    }

}

export function draw(gameBoard){
    const foodElement=document.createElement('div')
    
    foodElement.style.gridRowStart=food.y
    foodElement.style.gridColumnStart=food.x
    foodElement.classList.add('food')    
    gameBoard.appendChild(foodElement);
    
}
export function resetScore(){
    score = 0;
}

export function resetFood(){
    food={x:10,y:1}

}

function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition==null || onSnake(newFoodPosition)){
        newFoodPosition=randomGridPositon();
    }
    return newFoodPosition;
}




