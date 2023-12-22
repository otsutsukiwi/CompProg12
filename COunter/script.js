let counter = document.getElementById("counter");
let number = 0;
function addOne(){
    counter.innerHTML = number+=1;
}
function subOne(){
    counter.innerHTML = number-=1;
}
function addTen(){
    counter.innerHTML = number+=10;
}
function subTen(){
    counter.innerHTML = number-=10;
}

let array = [-5,-4,-3,-2,-1,1,2,3,4,5]
function ranFunc(){
    let random = Math.round(Math.random() * 9);
    let increment = array[random];
    number += increment;
    counter.innerHTML = number;
    let display = document.getElementById("display")
    if (increment < 0){
        display.innerHTML = "Number decreased by : " + increment;
    } else {
        display.innerHTML = "Number increased by : " + increment;
    }
}