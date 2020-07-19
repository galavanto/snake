let Snake = {
    length: 3,
    x: 0,
    y: 0,
    gameCanvas: null,
    gameCanvasContext: null,
    snakeGap: 2,
    startX: 300,
    startY: 300,

    init: function () {
        console.log('test');
        this.gameCanvas = document.getElementById('gameCanvas');
        this.gameCanvasContext = this.gameCanvas.getContext('2d');

        this.drawSnake();

    },
    drawSnake: function (startX, startY) {
        for (let i = 0; i > this.length; i++) {
            this.determinePosition();
        }
    },
    drawBlock: function (x, y) {
        this.gameCanvasContext.beginPath();
        this.gameCanvasContext.rect(5, 5, 10, 5);
        this.gameCanvasContext.fillStyle = "green";
        this.gameCanvasContext.fill();
    },
    determinePosition: function (x,y) {

    }

};