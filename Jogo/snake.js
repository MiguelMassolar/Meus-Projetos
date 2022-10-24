export const SNAKE_SPEED = 1
const snakeBody = [
    {x: 10, y: 11},
    {x: 11, y: 11},
    {x: 12, y: 11}
]
export function update() {
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    //snakeBody [0].x += 0
    //snakeBody [0].y += 1
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElemnet = document.createElement('div')
        snakeElemnet.style.gridRowStart = segment.y
        snakeElemnet.style.gridColumnStart = segment.x
        snakeElemnet.classList.add('snake')
        gameBoard.appendChild(snakeElemnet)
    })
}