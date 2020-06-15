var gift = 0;

function shopClose() {
    document.getElementById("shopOpen").style.display = "inline";
    document.getElementById("shopClose").style.display = "none";
    document.getElementById("shop1").style.display = "none";
    document.getElementById("shop2").style.display = "none";
    document.getElementById("shop3").style.display = "none";
    document.getElementById("shop4").style.display = "none";
    document.getElementById("shop5").style.display = "none";
    document.getElementById("shop6").style.display = "none";
    document.getElementById("brshopclose").style.lineHeight = "0px";
    gift += 1;
    if (gift === 20) {
        gift == 21;
        clicks += 10000;
        calert("참드님이 [클릭 10000]를 선물했습니다!");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
    if (gift === 200) {
        gift == 201;
        clicks += 100000;
        calert("참드님이 [클릭 1000000]를 선물했습니다!");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
    if (gift === 2000) {
        gift == 2001;
        clicks += 1000000;
        calert("참드님이 [클릭 1000000]를 선물했습니다!");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
}

function shopOpen() {
    document.getElementById("shopOpen").style.display = "none";
    document.getElementById("shopClose").style.display = "inline";
    document.getElementById("shop1").style.display = "inline";
    document.getElementById("shop2").style.display = "inline";
    document.getElementById("shop3").style.display = "inline";
    document.getElementById("shop4").style.display = "inline";
    document.getElementById("shop5").style.display = "inline";
    document.getElementById("shop6").style.display = "inline";
    document.getElementById("brshopclose").style.lineHeight = "21px";
    gift += 1;
    if (gift === 20) {
        gift == 21;
        clicks += 10000;
        calert("참드님이 [클릭 10000]를 선물했습니다!");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
    if (gift === 200) {
        gift == 201;
        clicks += 100000;
        calert("참드님이 [클릭 1000000]를 선물했습니다!");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
    if (gift === 2000) {
        gift == 2001;
        clicks += 1000000;
        calert("참드님이 [클릭 1000000]를 선물했습니다!");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
}

function workClose() {
    document.getElementById("workOpen").style.display = "inline";
    document.getElementById("workClose").style.display = "none";
    document.getElementById("work1").style.display = "none";
    document.getElementById("work2").style.display = "none";
    document.getElementById("work3").style.display = "none";
    document.getElementById("work4").style.display = "none";
    document.getElementById("work5").style.display = "none";
    document.getElementById("work6").style.display = "none";
    document.getElementById("brworkclose").style.lineHeight = "0px";
}

function workOpen() {
    document.getElementById("workOpen").style.display = "none";
    document.getElementById("workClose").style.display = "inline";
    document.getElementById("work1").style.display = "inline";
    document.getElementById("work2").style.display = "inline";
    document.getElementById("work3").style.display = "inline";
    document.getElementById("work4").style.display = "inline";
    document.getElementById("work5").style.display = "inline";
    document.getElementById("work6").style.display = "inline";
    document.getElementById("brworkclose").style.lineHeight = "21px";
}

function nameClose() {
    document.getElementById("nameOpen").style.display = "inline";
    document.getElementById("nameClose").style.display = "none";
    document.getElementById("names").style.display = "none";
    document.getElementById("brnameclose").style.lineHeight = "0px";
}

function nameOpen() {
    document.getElementById("nameOpen").style.display = "none";
    document.getElementById("nameClose").style.display = "inline";
    document.getElementById("names").style.display = "block";
    document.getElementById("brnameclose").style.lineHeight = "21px";
}

function cash() {
    alert("나오는 클릭 확률\n25% | 10c\n20% | 100c\n15% | 1000c\n10% | 10000c\n9%   | 100000c\n8%   | 1000000c\n7%   | 10000000c\n6%   | 100000000c");
    if (confirm("도박을 하시겠습니까? [100000c 필요]")) {
        if (clicks >= 100000) {
            clicks -= 100000;
            cashGo();
            document.getElementById("click").textContent = `클릭 ${clicks}`;
        } else {
            calert("클릭 부족");
        }
    } else { }
}

function cashGo() {
    var cash = Math.floor(Math.random() * 100);
    console.log(cash);

    if (0 <= cash && cash <= 25) {
        calert("+ 10c ( - 100000c )");
        clicks += 10;
    } else if (26 <= cash && cash <= 45) {
        calert("+ 100c ( - 100000c )");
        clicks += 100;
    } else if (46 <= cash && cash <= 60) {
        calert("+ 1000c ( - 100000c )");
        clicks += 1000;
    } else if (61 <= cash && cash <= 70) {
        calert("+ 10000c ( - 100000c )");
        clicks += 10000;
    } else if (71 <= cash && cash <= 79) {
        calert("+ 100000c ( - 100000c )");
        clicks += 100000;
    } else if (80 <= cash && cash <= 87) {
        calert("+ 1000000c ( - 100000c )");
        clicks += 1000000;
    } else if (88 <= cash && cash <= 94) {
        calert("+ 10000000c ( - 100000c )");
        clicks += 10000000;
    } else if (95 <= cash && cash <= 100) {
        calert("+ 100000000c ( - 100000c )");
        clicks += 100000000;
    }
}

var egg = 0;

function findegg() {
    if (egg == 0) {
        calert("[이스터에그] : [헬창] x 2 를 찾았다!!!");
        work3count += 260;
        workcount += 260;
        document.getElementById("click").textContent = `클릭 ${clicks}`;
        document.getElementById("worker3c").textContent = `${work3count / 130}명 ${work3count}c/s`;
        if (workfirst == 0) {
            workstart();
            workfirst += 1;
        }
        document.getElementById("egg").textContent = "(찾음)";
        document.getElementById("egg").style.color = "red";
        egg += 1;
    }
}