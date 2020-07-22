let Snake = {
    length: 3,
    start: true,
    gameCanvas: null,
    gameCanvasContext: null,
    snakeGap: 1,
    startX: 200,  // max is 290
    startY: 100,   // max is 145, min is
    blocks: [],

    init: function () {
        this.drawSnake();
    },
    drawSnake: function () {
        for (let i = 0; i < this.length; i++) {
            this.drawBlocks();
        }
    },
    drawBlocks: function () {
        let amountOfBlocks = this.blocks.length;

        if (amountOfBlocks === 0) {
            Snake.blocks.push(Block.drawBlock(this.startX, this.startY));
        }

        if (amountOfBlocks === this.length - 1) {
            Snake.blocks.push(Block.drawBlock(this.startX, this.startY,true));
        }

        Snake.blocks.push(Block.drawBlock(this.startX, this.startY + 6));
    }

};