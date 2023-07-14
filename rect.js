class Rect {
    constructor(originX, originY, width, height, color = '#00000') {
        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocityX = (2 * Math.random()) - 1;
        this.velocityY = (2 * Math.random()) - 1;
    }

    animate() {
        //     if (Math.random()<0.999999) {
        //         this.velocityX = (2 * Math.random()) -1;
        //     }
        //    if (Math.random()<0.9999999) {
        //     this.velocityY = (2 * Math.random()) -1;
        //    }

        //     this.originX += this.velocityX;
        //     this.originY += this.velocityY;
        // }

       


        if (this.originX < 0 || this.originX + this.width) {
            this.velocityX = this.velocityX * -1;

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.originX, this.originY, this.width, this.height);
    }

    static random(canvasWidth, canvasHeight) {

        const randomRed = Math.floor(256 * Math.random());
        const randomGreen = Math.floor(256 * Math.random());
        const randomBlue = Math.floor(256 * Math.random());

        const rgbString = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${Math.random()})`

        const randomWidth = 250 * Math.random();
        const randomHeight = 250 * Math.random();

        const randomX = (canvasWidth - randomWidth) * Math.random();
        const randomY = (canvasHeight - randomHeight) * Math.random();

        const newRect = new Rect(canvasWidth / 2, canvasHeight / 2, 2, 2, rgbString);

        return newRect;
    }
}