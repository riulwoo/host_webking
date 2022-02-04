function createPoop() {
    const poop = document.createElement('div');
    poop.classList.add('poop');
    poop.style.left = Math.random() * 100 + "vw";
    poop.style.animationDuration = Math.random() * 2 + 3 + "s";
    poop.innerText = "🤍";

    document.body.appendChild(poop);

    setTimeout(() => {
       poop.remove(); 
    }, 5000);
}

setInterval(createPoop, 300);