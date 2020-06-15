var workfirst = 0;

var workcount = 0;
var work1count = 0;
var work2count = 0;
var work3count = 0;
var work4count = 0;
var work5count = 0;
var work6count = 0;
var work1cost = 6000;
var work2cost = 60000;
var work3cost = 600000;
var work4cost = 6000000;
var work5cost = 60000000;
var work6cost = 100000000;


function work1() {
    if (clicks >= work1cost) {
        clicks -= work1cost;
        work1count += 1;
        calert(`[졸라맨] x 1 (총 ${work1count}명) 을 고용했습니다 ( - ${work1cost}c )`);
        workcount += 1;
        document.getElementById("click").textContent = `클릭 ${clicks}`;
        document.getElementById("worker1c").textContent = `${work1count/1}명 ${work1count}c/s`;
        if (workfirst == 0) {
            workstart();
            workfirst += 1;
        }
    } else {
        calert("클릭 부족");
    }
}

function work2() {
    if (clicks >= work2cost) {
        clicks -= work2cost;
        work2count += 12;
        calert(`[고인물] x 1 (총 ${work2count/12}명) 을 고용했습니다 ( -  ${work2cost}c )`);
        workcount += 12;
        document.getElementById("click").textContent = `클릭 ${clicks}`;
        document.getElementById("worker2c").textContent = `${work2count/12}명 ${work2count}c/s`;
        if (workfirst == 0) {
            workstart();
            workfirst += 1;
        }
    } else {
        calert("클릭 부족");
    }
}

function work3() {
    if (clicks >= work3cost) {
        clicks -= work3cost;
        work3count += 130;
        calert(`[헬창] x 1 (총 ${work3count/130}명) 을 고용했습니다 ( - ${work3cost}c )`);
        workcount += 130;
        document.getElementById("click").textContent = `클릭 ${clicks}`;
        document.getElementById("worker3c").textContent = `${work3count/130}명 ${work3count}c/s`;
        if (workfirst == 0) {
            workstart();
            workfirst += 1;
        }
    } else {
        calert("클릭 부족");
    }
}

function work4() {
    if (clicks >= work4cost) {
        clicks -= work4cost;
        work4count += 1400;
        calert(`[타노스] x 1 (총 ${work4count/1400}명) 을 고용했습니다 ( - ${work4cost}c )`);
        workcount += 1400;
        document.getElementById("click").textContent = `클릭 ${clicks}`;
        document.getElementById("worker4c").textContent = `${work4count/1400}명 ${work4count}c/s`;
        if (workfirst == 0) {
            workstart();
            workfirst += 1;
        }
    } else {
        calert("클릭 부족");
    }
}

function work5() {
    if (clicks >= work5cost) {
        clicks -= work5cost;
        work5count += 15000;
        calert(`[무명왕] x 1 (총 ${work5count/15000}명) 을 고용했습니다 ( - ${work5cost}c )`);
        workcount += 15000;
        document.getElementById("click").textContent = `클릭 ${clicks}`;
        document.getElementById("worker5c").textContent = `${work5count/15000}명 ${work5count}c/s`;
        if (workfirst == 0) {
            workstart();
            workfirst += 1;
        }
    } else {
        calert("클릭 부족");
    }
}

function work6() {
    if (clicks >= work6cost) {
        clicks -= work6cost;
        work6count += 5;
        calert(`[흑우] x 1 (총 ${work6count/5}명) 을 고용했습니다 ( - ${work6cost}c )`);
        workcount += 5;
        document.getElementById("click").textContent = `클릭 ${clicks}`;
        document.getElementById("worker6c").textContent = `${work6count/5}명 ${work6count}c/s`;
        if (workfirst == 0) {
            workstart();
            workfirst += 1;
        }
    } else {
        calert("클릭 부족");
    }
}


function workstart() {
    setTimeout(function () {
        clicks += workcount;
        document.getElementById("click").textContent = `클릭 ${clicks}`;
        document.getElementById("namesName").textContent = `c : click 클릭 | s : second 초 | ${workcount}c/s`;
        workstart();
    }, 1000);
}



function workcost(num) {
    document.getElementById("work"+num+"cost").style.display = "block";
}

function workcostO(num) {
    document.getElementById("work"+num+"cost").style.display = "none";
}