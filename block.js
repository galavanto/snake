let Block = {
    first: false,
    last: false,
    width: 10,
    height: 5,

    drawBlock: function (x, y, last = false) {

        Core.gameCanvasContext.beginPath();
        Core.gameCanvasContext.rect(x, y, this.width, this.height);
        Core.gameCanvasContext.fillStyle = "green";
        Core.gameCanvasContext.fill();

        this.last = last;

        return this;
    }
};