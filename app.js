let activePlayer = "PLAYER 1";

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
const foo = () => {
    console.log(activePlayer);
};

const GameCellFactory = (index) =>
{
    function getIndex()
    {
        return index;
    }
}

const GameBoardFactory = () => 
{
    let gameBoard = [];

    function render()
    {
        let gameContainer = document.querySelector(".playGrid");

        for (let i = 0; i < 9; i++) 
        {
            let gameCell = document.createElement("div");
            gameCell.classList.add("gameCell");
            gameCell.addEventListener("click", foo);
            gameContainer.append(gameCell);
            gameBoard.push(GameCellFactory(i));
        }
    }

    return {gameBoard, render};
};

let gameBoard = GameBoardFactory();
gameBoard.render();