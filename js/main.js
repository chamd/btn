var clicks = 0;
var btn = 0;


function clickbtn() {
    if (btn === 0) {
        clicks += 1;
    } else if (btn === 1) {
        clicks += 2;
    } else if (btn === 2) {
        clicks += 5;
    } else if (btn === 3) {
        clicks += 20;
    } else if (btn === 4) {
        clicks += 100;
    } else if (btn === 5) {
        clicks += 20000;
    } else if (btn === 6) {
        clicks += 999999;
    }
    document.getElementById("click").textContent = `클릭 ${clicks}`;
}

function clickbtnMouse() {
    document.getElementById("clickbtn").style.backgroundColor = "rgb(77, 77, 77)";
}

function clickbtnMouseO() {
    if (btn === 0) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(150, 74, 23)";
    } else if (btn === 1) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(118, 255, 113)";
    } else if (btn === 2) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(243, 255, 71)";
    } else if (btn === 3) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(22, 220, 255)";
    } else if (btn === 4) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(255, 22, 22)";
    } else if (btn === 5) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(192, 98, 255)";
    } else if (btn === 6) {
        document.getElementById("clickbtn").style.backgroundImage = "linear-gradient(to left, indigo, blue, green, yellow, orange, red)";
    }

}

function calert(msg) {
    document.getElementById("alert").style.transition = "0.0s";
    document.getElementById("alert").style.backgroundColor = "white";
    document.getElementById("alert").style.border = "10px solid white";
    document.getElementById("alert").style.transition = "0.2s";
    setTimeout(function () {
        document.getElementById("alert").style.backgroundColor = "rgb(159, 255, 146)";
        document.getElementById("alert").style.border = "10px solid rgb(20, 122, 28)";
        document.getElementById("alert").textContent = msg;
    }, 200);
}