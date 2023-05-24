function vermelho(){
var body = document.querySelector("body");
var verm = parseFloat(document.getElementById('verm').value)
var verd = parseFloat(document.getElementById('verd').value)
var azu = parseFloat(document.getElementById('azu').value)

if(verm > 0){
    var red = 0 + verm;
    var green = 0 + verd;
    var blue = 0 + azu;
}

body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function verde(){
    var body = document.querySelector("body");
    var verm = parseFloat(document.getElementById('verm').value)
    var verd = parseFloat(document.getElementById('verd').value)
    var azu = parseFloat(document.getElementById('azu').value)

    if(verd > 0){
    var red = 0 + verm;
    var green = 0 + verd;
    var blue = 0 + azu;
    }
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function azul(){
    var body = document.querySelector("body");
    var verm = parseFloat(document.getElementById('verm').value)
    var verd = parseFloat(document.getElementById('verd').value)
    var azu = parseFloat(document.getElementById('azu').value)

    if(azu > 0){
        var red = 0 + verm;
        var green = 0 + verd;
        var blue = 0 + azu;
    }
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}
    