function shop1() {
    if (clicks >= 100) {
        if (btn === 0) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco2.png\")";
            document.getElementById("btnName").textContent = "그냥 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(118, 255, 113)";
            clicks -= 100;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            calert("[그냥 버튼]을 구입했습니다 ( - 100c )");
        }
    } else {
        calert("클릭 부족");
    }
}

function shop2() {
    if (clicks >= 400) {
        if (btn === 1) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco3.png\")";
            document.getElementById("btnName").textContent = "황금 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(243, 255, 71)";
            clicks -= 400;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            calert("[황금 버튼]을 구입했습니다 ( - 400c )");
        }
    } else {
        calert("클릭 부족");
    }
}

function shop3() {
    if (clicks >= 5000) {
        if (btn === 2) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco4.png\")";
            document.getElementById("btnName").textContent = "다이아 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(22, 220, 255)";
            clicks -= 5000;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            calert("[다이아 버튼]을 구입했습니다 ( - 5000c )");
        }
    } else {
        calert("클릭 부족");
    }
}

function shop4() {
    if (clicks >= 300000) {
        if (btn === 3) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco5.png\")";
            document.getElementById("btnName").textContent = "루비 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(255, 22, 22)";
            clicks -= 300000;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            calert("[루비 버튼]을 구입했습니다 ( - 300000c )");
        }
    } else {
        calert("클릭 부족");
    }
}

function shop5() {
    if (clicks >= 60000000) {
        if (btn === 4) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco6.png\")";
            document.getElementById("btnName").textContent = "레전드 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(192, 98, 255)";
            clicks -= 60000000;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            calert("[레전드 버튼]을 구입했습니다 ( - 60000000c )");
        }
    } else {
        calert("클릭 부족");
    }
}

function shop6() {
    if (clicks >= 15000000000) {
        if (btn === 5) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco7.png\")";
            document.getElementById("btnName").textContent = "황제의 버튼";
            document.getElementById("clickbtn").style.backgroundImage = "linear-gradient(to left, indigo, blue, green, yellow, orange, red)";
            clicks -= 15000000000;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            calert("[황제의 버튼]을 구입했습니다 ( - 15000000000c )");
        }
    } else {
        calert("클릭 부족");
    }
}




function shopcost(num) {
    document.getElementById("shop"+num+"cost").style.display = "block";
}

function shopcostO(num) {
    document.getElementById("shop"+num+"cost").style.display = "none";
}