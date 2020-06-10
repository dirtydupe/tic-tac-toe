const PlayerFactory = (name, player) => 
{
    function getName() 
    {
        return name;
    }

    function mark()
    {
        if(player === 1)
            return "X";
        else
            return "O";
    }

    return {getName, mark}
};

// TEST
const foo = (player) => {
    console.log("TEST");
};

const GameBoardFactory = () => 
{
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    function render()
    {
        let gameContainer = document.querySelector(".playGrid");

        for (let i = 0; i < gameBoard.length; i++) 
        {
            let gameCell = document.createElement("div");
            gameCell.classList.add("gameCell");
            gameCell.addEventListener("click", foo);
            gameContainer.append(gameCell);
        }
    }

    return {gameBoard, render};
};

let gameBoard = GameBoardFactory();
gameBoard.render();