document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-board');
    const context = canvas.getContext('2d');
    const grid = 32;
    const tetrominoes = [
        // I
        { shape: [[1, 1, 1, 1]], color: 'cyan' },
        // J
        { shape: [[1, 0, 0], [1, 1, 1]], color: 'blue' },
        // L
        { shape: [[0, 0, 1], [1, 1, 1]], color: 'orange' },
        // O
        { shape: [[1, 1], [1, 1]], color: 'yellow' },
        // S
        { shape: [[0, 1, 1], [1, 1, 0]], color: 'green' },
        // T
        { shape: [[0, 1, 0], [1, 1, 1]], color: 'purple' },
        // Z
        { shape: [[1, 1, 0], [0, 1, 1]], color: 'red' }
    ];
    const rows = 20;
    const cols = 10;

    canvas.width = cols * grid;
    canvas.height = rows * grid;

    let board = [];
    let tetromino = null;
    let pos = { x: 0, y: 0 };
    let gameOver = false;
    let dropCounter = 0;
    let dropInterval = 1000;
    let fastDrop = false;
    let lastTime = 0;

    function initializeBoard() {
        board = Array.from({ length: rows }, () => Array(cols).fill(0));
        resetTetromino();
        gameOver = false;
        dropCounter = 0;
        lastTime = 0;
        drawBoard();
        update();
    }

    function drawCell(x, y, color) {
        context.fillStyle = color;
        context.fillRect(x * grid, y * grid, grid - 1, grid - 1);
    }

    function drawBoard() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        board.forEach((row, y) => row.forEach((cell, x) => {
            if (cell) drawCell(x, y, cell);
        }));
        tetromino.shape.forEach((row, y) => row.forEach((cell, x) => {
            if (cell) drawCell(pos.x + x, pos.y + y, tetromino.color);
        }));
    }

    function getRandomTetromino() {
        const { shape, color } = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
        return { shape, color };
    }

    function move(dir) {
        pos.x += dir;
        if (collision()) pos.x -= dir;
    }

    function collision() {
        return tetromino.shape.some((row, y) =>
            row.some((cell, x) =>
                cell && (
                    board[y + pos.y] && board[y + pos.y][x + pos.x]) !== 0));
    }

    function merge() {
        tetromino.shape.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell) {
                    board[y + pos.y][x + pos.x] = tetromino.color;
                }
            });
        });
    }

    function resetTetromino() {
        tetromino = getRandomTetromino();
        pos.y = 0;
        pos.x = Math.floor((cols - tetromino.shape[0].length) / 2);
        if (collision()) {
            gameOver = true;
        }
    }

    function clearLines() {
        board = board.filter(row => row.some(cell => cell === 0));
        while (board.length < rows) {
            board.unshift(Array(cols).fill(0));
        }
    }

    function drop() {
        pos.y++;
        if (collision()) {
            pos.y--;
            merge();
            resetTetromino();
            clearLines();
            dropInterval = Math.max(100, dropInterval - 50);
        }
        drawBoard();
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            initializeBoard();
        }
        if (gameOver) return;
        if (event.key === 'ArrowLeft') move(-1);
        if (event.key === 'ArrowRight') move(1);
        if (event.key === 'ArrowDown') fastDrop = true;
        if (event.key === 'ArrowUp') {
            tetromino = getRandomTetromino();
            drawBoard();
        }
        drawBoard();
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowDown') fastDrop = false;
    });

    function update(time = 0) {
        const deltaTime = time - lastTime;
        lastTime = time;
        dropCounter += deltaTime;
        if (dropCounter > (fastDrop ? 50 : dropInterval)) {
            if (!gameOver) {
                drop();
                dropCounter = 0;
            }
        }
        if (!gameOver) requestAnimationFrame(update);
    }

    initializeBoard();
});
