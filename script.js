function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var komunikat = document.querySelector('.komunikat-js');
console.log(komunikat);
var start = document.querySelector('.start-js');
console.log(start);
var losowa = 0;

var spr = document.querySelector('.spr-js');
console.log(spr);
var input = document.querySelector('.input-js');
console.log(input);

start.onclick = function(){
    losowa = getRandomInt(100) + 1;
}

spr.onclick = function(){
    var doSpawdzenia = parseInt(input.value);
    if(doSpawdzenia === losowa){
        komunikat.innerHTML = "Wygrałeś";
    }else if(doSpawdzenia < losowa){
        komunikat.innerHTML = "Większa";
    }else if(doSpawdzenia > losowa){
        komunikat.innerHTML = "Mniejsza";
    }
}