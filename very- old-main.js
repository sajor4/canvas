

// const canvas = document.getElementById('canvas1');
// console.log(canvas)


// const canvasCollection = document.getElementsByClassName('my-canvas');
// // ti restituisce un array con tutti elementi con la stessa classe
// const canvasA = canvasCollection[0];
// // dopo ti prendi l'elemento che ti serve dell'array, in questo caso il primo (0)

// const canvasC = document.querySelector('.my-canvas')
// // la query ti da il primo che trova nell'HTML anche se ci sono altri elementi con la stessa classe


const canvas = document.getElementById('canvas1');
// console.log(canvas.width)
// console.log(canvas.height)

const ctx = canvas.getContext("2d");


// ctx.rect(10,10,100,100);
// ctx.rect(790,670,100,100);
// ctx.rect(canvas.width-110,10,100,100);
// ctx.rect(10,canvas.height-110,100,100);
// ctx.fill();

// ctx.fillStyle = 'orange';

// ctx.strokeStyle = 'violet';

// ctx.lineWidth = 15;

// ctx.fillRect(10,10,100,100);

// ctx.strokeRect(200,200,100,100);

// ctx.clearRect(50,50,20,20)

// ctx.beginPath()

// ctx.arc(canvas.width/2, canvas.height/2, 200,0,2, Math.PI)

ctx.beginPath();

ctx.moveTo(50,50);
ctx.lineTo(100,100);
ctx.lineTo(50,150);
ctx.lineTo(50,50);

ctx.fill();

