export function conway() {
  let frameId = null;
  let runSimulation = false;
  let size = 125; // the weird unit leaves lines that I think look cool
  let canvasSize = 500;
  let adjust = canvasSize / size;
  let count = 0;
  let state = null;

  let liveColor = "teal";
  let deadColor = "#1f1f1f";

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const counter = document.querySelector("#count");

  // Actions Buttons
  const resetButton = document.querySelector("#reset");
  const clearButton = document.querySelector("#clear");

  function toggle() {
    runSimulation = !runSimulation;
    if (runSimulation) {
      mainLoop();
      return true;
    } else {
      return false;
    }
  }

  function reset() {
    if (runSimulation) runSimulation = false;

    // 0 timeout? whaaaa?? we want to let that last update finish running
    // so we get a clean render
    setTimeout(() => {
      state = generateStartingState();
      drawGrid(state, ctx);
      count = 0;
      counter.innerHTML = count;
    }, 0);
  }

  function clear() {
    let gridData = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(0);
      }
      gridData.push(row);
    }

    state = gridData;
    ctx.fillStyle = deadColor;
    ctx.fillRect(0, 0, 500, 500);
    drawGrid(state, ctx);
    count = 0;
    counter.innerHTML = count;
  }

  function toggleCell(event, opts = {}) {
    // get the click position on the canvas
    const clickX = event.clientX - event.target.getBoundingClientRect().left;
    const clickY = event.clientY - event.target.getBoundingClientRect().top;

    // use the adjustment to determine what cell to update
    let row = Math.round(clickX / adjust);
    let col = Math.round(clickY / adjust);

    // either force the cell to be true of toggle its state
    let val = opts.forceTrue ? 1 : state[row][col] > 0 ? 0 : 1;
    state[row][col] = val;

    let color = val > 0 ? liveColor : deadColor;
    ctx.fillStyle = color;
    ctx.fillRect(row * adjust, col * adjust, adjust, adjust);
  }

  function giveLife(e) {
    toggleCell(e, { forceTrue: true });
  }

  function init(lc = liveColor, dc = deadColor) {
    liveColor = lc;
    deadColor = dc;

    resetButton.addEventListener("click", reset);
    clearButton.addEventListener("click", clear);
    canvas.addEventListener("mousedown", (event) => {
      let originalRunSimulation = runSimulation;
      runSimulation = false;

      toggleCell(event); //Toggle the cell we clicked
      canvas.addEventListener("mousemove", giveLife); // attach a move listener to draw
      // the one time mouse up listener to clean up and resume sim if needed
      canvas.addEventListener(
        "mouseup",
        () => {
          canvas.removeEventListener("mousemove", giveLife);
          if (originalRunSimulation) {
            runSimulation = originalRunSimulation;
            mainLoop();
          }
        },
        { once: true }
      );
    });

    state = generateStartingState();
    drawGrid(state, ctx);
  }

  function mainLoop() {
    state = updateGrid(state);
    drawGrid(state, ctx);
    if (runSimulation) {
      frameId = requestAnimationFrame(mainLoop, 5);
    } else if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
  }

  // grid functions

  function cool1(i, j) {
    let adjust = 6;
    return (i * j) % adjust === 0 ? 1 : 0;
  }

  function cool2(i, j) {
    let adjust = 3;
    return (i + j) % adjust === 0 ? 1 : 0;
  }

  function cool3(i, j) {
    let adjust = 5;
    return (i * j) % adjust === 0 ? 1 : 0;
  }

  function cool4(i, j) {
    let adjust = 7;
    return Math.pow(i, j) % adjust === 0 ? 1 : 0;
  }

  function randomGen() {
    return Math.round(Math.random() * 3) < 1 ? 1 : 0;
  }

  /**
   * Creates N x M grid of data filled with random 0s, and 1s
   */
  function generateStartingState(n = size, m = size) {
    let gridData = [];
    let patternGen = [cool1, cool2, cool3, cool4, randomGen][
      Math.round(Math.random() * 4)
    ];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
        row.push(patternGen(i, j));
      }
      gridData.push(row);
    }

    return gridData;
  }

  function drawGrid(grid, ctx) {
    grid.forEach((row, rowIndex) => {
      row.forEach((val, colIndex) => {
        let color = val > 0 ? liveColor : deadColor;
        ctx.fillStyle = color;
        ctx.fillRect(rowIndex * adjust, colIndex * adjust, adjust, adjust);
      });
    });
  }

  // update the grid based on conways rules
  function updateGrid(grid) {
    let newGrid = new Array(grid.length);

    grid.forEach((row, rowIndex) => {
      row.forEach((val, colIndex) => {
        // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
        // Any live cell with two or three live neighbours lives on to the next generation.
        // Any live cell with more than three live neighbours dies, as if by overpopulation.
        // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

        // we want to know 2 things
        // is the current cell alive or dead?
        const isAlive = val; // we'll do this and we can use if(isAlive)
        // how many living neighbors does the cell have?
        // for these we need to look at its neighbors and count

        // we offest the results by negating the value of the current cell from the counts
        let livingNeighbors = isAlive ? -1 : 0;

        // get the range of neighbors accounting for cells at the beginning or end
        const searchIStart = rowIndex === 0 ? rowIndex : rowIndex - 1;
        const searchIEnd =
          rowIndex + 1 === grid.length ? rowIndex : rowIndex + 1;
        const searchJStart = colIndex === 0 ? colIndex : colIndex - 1;
        const searchJEnd =
          colIndex + 1 === row.length ? colIndex : colIndex + 1;

        for (let i = searchIStart; i <= searchIEnd; i++) {
          for (let j = searchJStart; j <= searchJEnd; j++) {
            let neighborValue = grid[i][j];
            livingNeighbors += neighborValue;
          }
        }

        if (!Array.isArray(newGrid[rowIndex]))
          newGrid[rowIndex] = new Array(row.length);

        // if alive and not over or under populated aka 2 or 3 neighbors
        if (isAlive && (livingNeighbors === 2 || livingNeighbors === 3)) {
          newGrid[rowIndex][colIndex] = 1;
          // if dead and has 3 neighbors
        } else if (!isAlive && livingNeighbors === 3) {
          newGrid[rowIndex][colIndex] = 1;
          // all other scenarions
        } else {
          newGrid[rowIndex][colIndex] = 0;
        }
      });
    });
    count++;
    counter.innerHTML = count;
    return newGrid;
  }

  function cleanUp() {
    frameId && cancelAnimationFrame(frameId);
    frameId = null;
  }

  return {
    init,
    cleanUp,
    isRunning: runSimulation,
    toggle,
  };
}
