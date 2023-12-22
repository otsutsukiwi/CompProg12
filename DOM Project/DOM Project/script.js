alert("!!Hello, Welcome to my website!!")




// ONCLICK EVENT
bob=0;
function titleClick(obj){
    if (bob==0){
    obj.innerHTML = "DONT CLICK ME!";
    bob++;
    }else if (bob==1){
    obj.innerHTML = "I SAID STOP!";
    bob++;
    }else if (bob==2){
    obj.innerHTML = "OK ONE MORE TIME AND YOU'LL REGRET IT!";
    bob++;
    } else {
        alert("!!WARNING!!!!WARNING!!\n!!VIRUS DETECTED IN YOUR SYSTEM!!")
        document.body.style.backgroundImage = "url(https://play-lh.googleusercontent.com/qBiLTYKuDA9aecK01rKoBYMp19lLOSq3xJvLkjTxlLCOJ_blR9ZPvBUblRaKFbDQ8P29)"
        var allDivs = document.querySelectorAll("div");
        allDivs.forEach(function(div) {
            div.style.backgroundColor = "red";
        });
    }
}


document.getElementById("changeName").innerHTML = "Name Change!";

let element1 = document.getElementById("sampleElement1");
element1.innerHTML = "This text was created by getElementById.";

let elements = document.getElementsByClassName("sampleElement");
elements[1].innerHTML = "This text was created by getElementByClass.";

let counter = 0;
document.getElementById("changeName").addEventListener("click", function() {
    let colors = ["red", "green", "blue"];
    let titles = ["Document Object Model", "Model Document Object", "Object Model Document"];

    let titleElement = document.getElementById("title");
    titleElement.innerHTML = titles[counter];
    titleElement.style.color = colors[counter];
    counter = (counter + 1) % colors.length;
});

document.getElementById("changeName").addEventListener("mouseover", function() {
    document.getElementById("changeName").style.backgroundColor = 'rgb(240, 152, 0)';
});

document.getElementById("changeName").addEventListener("mouseout", function() {
    document.getElementById("changeName").style.backgroundColor = 'rgb(255, 228, 196)';
});

function mouseOn1(obj){
    obj.innerHTML = "+"
}
function mouseOn2(obj){
    obj.innerHTML = "0"
}
function mouseOn3(obj){
    obj.innerHTML = "-"
}

let numberBut = document.getElementById("numberBut");
let number = 0;
function Add(){
    numberBut.innerHTML = number++;
    numberBut.style.backgroundColor = "rgb(0, 255, 0)";
}
function addLeave(){
    numberBut.style.backgroundColor = "rgb(255, 228, 196)";
}
function Sub(){
    numberBut.innerHTML = number--;
    numberBut.style.backgroundColor = "rgb(255, 0, 0)";
}
function subLeave(){
    numberBut.style.backgroundColor = "rgb(255, 228, 196)";
}





let swi = 0;
let id = null;
let pos = 0;
let turn = 0;
document.getElementById("moveBut").addEventListener("click", function() {
    if (swi === 0) {
        document.getElementById("moveBut").innerHTML = "Reset";
        swi = 1;
        id = setInterval(frame, 1);
    } else {
        document.getElementById("moveBut").innerHTML = "Move Me!";
        swi = 0;
        clearInterval(id);
        pos = 0;
        turn = 0;
        document.getElementById("animate").style.left = "0";
    }
    function frame() {
        if (swi === 0) {
            clearInterval(id);
        }
        if (turn === 0) {
            if (pos === 1150) {
                turn = 1;
            } else {
                pos+=5;
                document.getElementById("animate").style.left = pos + "px";
            }
        } else {
            if (pos === 0) {
                turn = 0;
            } else {
                pos-=5;
                document.getElementById("animate").style.left = pos + "px";
            }
        }
    }
});









