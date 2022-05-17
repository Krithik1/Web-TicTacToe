const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cells = document.querySelectorAll(".block");


let isGamePlaying = true;
let xIsNext = true;

const handleReset = (e) => {
    isGamePlaying = true;
    xIsNext = true;
    statusDiv.innerHTML = "X is Next";
    for (const cell of cells) {
        try {
            cell.classList.remove(Array.from(cell.classList)[2]);
            cell.innerHTML = "";
        } catch (error) {
            console.log(error);
        }
    }
}

const checkGameStatus = () => {
    let grid = ["", "", "", "", "", "", "", "", ""];
    grid[0] = cells[0].classList[2];
    grid[1] = cells[1].classList[2];
    grid[2] = cells[2].classList[2];
    grid[3] = cells[3].classList[2];
    grid[4] = cells[4].classList[2];
    grid[5] = cells[5].classList[2];
    grid[6] = cells[6].classList[2];
    grid[7] = cells[7].classList[2];
    grid[8] = cells[8].classList[2];
    console.log(grid);
    if ((grid[0] === "x" && grid[1] === "x" && grid[2] === "x")||
        (grid[3] === "x" && grid[4] === "x" && grid[5] === "x")||
        (grid[6] === "x" && grid[7] === "x" && grid[8] === "x")||
        (grid[0] === "x" && grid[3] === "x" && grid[6] === "x")||
        (grid[1] === "x" && grid[4] === "x" && grid[7] === "x")||
        (grid[2] === "x" && grid[5] === "x" && grid[8] === "x")||
        (grid[0] === "x" && grid[4] === "x" && grid[8] === "x")||
        (grid[2] === "x" && grid[4] === "x" && grid[6] === "x")) {
            isGamePlaying = false;
            statusDiv.innerHTML = "X has Won!";
    } else if ((grid[0] === "o" && grid[1] === "o" && grid[2] === "o")||
                (grid[3] === "o" && grid[4] === "o" && grid[5] === "o")||
                (grid[6] === "o" && grid[7] === "o" && grid[8] === "o")||
                (grid[0] === "o" && grid[3] === "o" && grid[6] === "o")||
                (grid[1] === "o" && grid[4] === "o" && grid[7] === "o")||
                (grid[2] === "o" && grid[5] === "o" && grid[8] === "o")||
                (grid[0] === "o" && grid[4] === "o" && grid[8] === "o")||
                (grid[2] === "o" && grid[4] === "o" && grid[6] === "o")) {
        isGamePlaying = false;
        statusDiv.innerHTML = "O has Won!";
    } else if (!grid.includes(undefined)) {
        isGamePlaying = false;
        statusDiv.innerHTML = "Game is a DRAW!";
    }
}

const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];
    
    if (classList[2] === "x" || classList[2] === "o") {
        return;
    }

    if (!isGamePlaying) {
        return;
    }

    xIsNext = !xIsNext;
    if (!xIsNext) {
        classList.add("x");
        statusDiv.innerHTML = "O is Next";
        checkGameStatus();
    } else {
        classList.add("o");
        statusDiv.innerHTML = "X is Next";
        checkGameStatus();
    }
}

resetDiv.addEventListener('click', handleReset);

for (const cell of cells) {
    cell.addEventListener('click', handleCellClick);
}