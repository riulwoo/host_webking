const chnbtn = document.getElementById("btn1");

chnbtn.addEventListener("click", () => {
    document.body.style.background = randomBg()
});

function randomBg(){
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}