let Core = {

    interval: 1000 / 15,
    paused: false,

    init: function () {
        window.setInterval(this.core, this.interval);
        this.drawCanvas();
        this.bindKeys();
        Snake.init();
    },
    bindKeys: function () {
        window.addEventListener("keydown", this.hitKey);
    },
    drawCanvas: function () {
        let canvas = document.createElement('canvas');
        canvas.id = 'gameCanvas';
        canvas.style.width = "500px";
        canvas.style.height = "500px";
        canvas.style.backgroundColor = "black";

        document.body.appendChild(canvas);
    },
    core: function () {
        if (this.paused) {
            this.showPauseMenu()
            console.log('paused');
            return;
        }
        console.log('tick');
    },
    hitKey: function (event) {
        if (event.defaultPrevented) {
            return;
        }

        switch (event.key) {
            case "Down":
            case "ArrowDown":

                break;
            case "Up":
            case "ArrowUp":

                break;
            case "Left":
            case "ArrowLeft":

                break;
            case "Right":
            case "ArrowRight":

                break;
            case "Enter":

                break;
            case "Esc":
            case "Escape":
                if (!this.paused) {
                    this.paused = true;
                    break;
                }

                this.paused = false;
                break;
            default:
                return;
        }

        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    },
    showPauseMenu: function () {

    }
};
