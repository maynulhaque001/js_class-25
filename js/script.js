// show and hide text
function textShow() {
    document.getElementById('text_sh').style.display = "block";
}
function textHide() {
    document.getElementById('text_sh').style.display = "none";
}
// creat border
function creatBorder() {
    document.getElementById('bangladesh').style.border = "1px solid black"
}

// change size
function changeFontSize() {
    document.getElementById('name').style.fontSize = ("30px");
}

// change style
function changeStyle() {
    document.getElementById('cs').style.color = ("red");
} 

// On off the bulb
function bulbOn() {
    document.getElementById('bulb').src = "images/on.gif";
}
function bulbOff() {
    document.getElementById('bulb').src = "images/off.gif";
}

// show the date ex-3
function showDate() {
    document.getElementById('sd').innerHTML = Date();
}

// show the text ex-2
function changeText() {
    document.getElementById('ct').innerHTML = ("Hello There");
}

// show text ex-1
function showText() {
    document.getElementById('st').innerHTML = "Hello World";
}

// repeat text
function repeatText() {
    var data = "Welcome to Dhaka, ";
    document.getElementById('rtext').innerHTML=data.repeat(3);
}

// manipulate data
var number1 = 5;
var number2 = 4;
var result = number1 + number2

function mdata() {
    document.getElementById("m").innerHTML = result;
}

let number3, number4

number3 = 3;
number4 = 4;

number3 *= number4

function gundata() {
    document.getElementById("msecond").innerHTML = number3;
}

// ex 12
let number5, number6, result2

number5 = 8;
number6 = 6;

result2 = number5 > number6

function guncom() {
    document.getElementById("compare").innerHTML = result2;
}

// ex 13
function paraGrap() {
    document.getElementsByClassName("p")[2].innerHTML = "Hello class";
}

// ex 14
function classExa() {
    let data = document.getElementsByTagName('p');
    alert(data.length);
}