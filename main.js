

console.log("hello we are connected to scripts!");

let rainDrops = []

function setup(){
    createCanvas(1264,600);
    for( var i =0; i<850; i++){
        rainDrops[i]= new RainDrop()
        //console.log(rainDrops)
    }
    
}


function draw() {
    background(230, 230, 250);
    for (var i= 0; i<rainDrops.length;i++){
    rainDrops[i].show()
    rainDrops[i].fall()
    }
}