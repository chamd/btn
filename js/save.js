// clicks, btn, gift, work([n])count, workfirst

function save() {
    localStorage.setItem('clicks', JSON.stringify(clicks));
    localStorage.setItem('btn', JSON.stringify(btn));
    localStorage.setItem('gift', JSON.stringify(gift));
    localStorage.setItem('workcount', JSON.stringify(workcount));
    localStorage.setItem('work1count', JSON.stringify(work1count));
    localStorage.setItem('work2count', JSON.stringify(work2count));
    localStorage.setItem('work3count', JSON.stringify(work3count));
    localStorage.setItem('work4count', JSON.stringify(work4count));
    localStorage.setItem('work5count', JSON.stringify(work5count));
    localStorage.setItem('work6count', JSON.stringify(work6count));
    localStorage.setItem('workfirst', JSON.stringify(workfirst));
    calert("데이터가 저장되었습니다");
}

function load() {
    clicks = JSON.parse(localStorage.getItem('clicks'));
    btn = JSON.parse(localStorage.getItem('btn'));
    gift = JSON.parse(localStorage.getItem('gift'));
    workcount = JSON.parse(localStorage.getItem('workcount'));
    work1count = JSON.parse(localStorage.getItem('work1count'));
    work2count = JSON.parse(localStorage.getItem('work2count'));
    work3count = JSON.parse(localStorage.getItem('work3count'));
    work4count = JSON.parse(localStorage.getItem('work4count'));
    work5count = JSON.parse(localStorage.getItem('work5count'));
    work6count = JSON.parse(localStorage.getItem('work6count'));
    workfirst = JSON.parse(localStorage.getItem('workfirst'));
    document.getElementById("click").textContent = `클릭 ${clicks}`;
    
    if (btn === 0) {
        document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco1.png\")";
        document.getElementById("btnName").textContent = "낡은 버튼";
        document.getElementById("clickbtn").style.background = "none rgb(150, 74, 23)";
    }
    if (btn === 1) {
        document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco2.png\")";
        document.getElementById("btnName").textContent = "그냥 버튼";
        document.getElementById("clickbtn").style.background = "none rgb(118, 255, 113)";
    }
    if (btn === 2) {
        document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco3.png\")";
        document.getElementById("btnName").textContent = "황금 버튼";
        document.getElementById("clickbtn").style.background = "none rgb(243, 255, 71)";
    }
    if (btn === 3) {
        document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco4.png\")";
        document.getElementById("btnName").textContent = "다이아 버튼";
        document.getElementById("clickbtn").style.background = "none rgb(22, 220, 255)";
    }
    if (btn === 4) {
        document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco5.png\")";
        document.getElementById("btnName").textContent = "루비 버튼";
        document.getElementById("clickbtn").style.background = "none rgb(255, 22, 22)";
    }
    if (btn === 5) {
        document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco6.png\")";
        document.getElementById("btnName").textContent = "레전드 버튼";
        document.getElementById("clickbtn").style.background = "none rgb(192, 98, 255)";
    }
    if (btn === 6) {
        document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco7.png\")";
        document.getElementById("btnName").textContent = "황제의 버튼";
        document.getElementById("clickbtn").style.backgroundImage = "linear-gradient(to left, indigo, blue, green, yellow, orange, red)";
    }
    document.getElementById("worker1c").textContent = `${work1count/1}명 ${work1count}c/s`;
    document.getElementById("worker2c").textContent = `${work2count/12}명 ${work2count}c/s`;
    document.getElementById("worker3c").textContent = `${work3count/130}명 ${work3count}c/s`;
    document.getElementById("worker4c").textContent = `${work4count/1400}명 ${work4count}c/s`;
    document.getElementById("worker5c").textContent = `${work5count/15000}명 ${work5count}c/s`;
    document.getElementById("worker6c").textContent = `${work6count/5}명 ${work6count}c/s`;
    document.getElementById("namesName").textContent = `c : click 클릭 | s : second 초 | ${workcount}c/s`;

    calert("데이터를 불러왔습니다");
}

        