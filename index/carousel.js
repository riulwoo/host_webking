const imgs = document.getElementById("slide");

const img = document.querySelectorAll("#slide #item");

let idx = 0;
let runck 
function run(){
    idx++;

    if(idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 700}px)`;
}

function startrun(){
    runck = setInterval(run, 2000);
}

function stoprun(){
    clearInterval(runck);
}

if(document.addEventListener){
    imgs.addEventListener("mouseover",stoprun, false);
    imgs.addEventListener("mouseout",startrun, false);
}
else
{
    imgs.attachEvent("onmouseover",stoprun);
    imgs.attachEvent("onmouseoout",startrun);
}

startrun();