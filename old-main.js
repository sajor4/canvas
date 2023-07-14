const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");

setInterval(createSingleArt, 50)

function createArt() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < 500; i++) {

        const r1 = Rect.random(canvas.width, canvas.height)
        r1.draw(ctx);

    }

}

function createSingleArt() {

        const r1 = Rect.random(canvas.width, canvas.height)
        r1.draw(ctx);

    }