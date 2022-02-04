const text = '안녕하세요 이근우입니다. 웹 고수에요 😋'

let index = 0;

function writeText(){
    document.body.innerText = text.slice(0,index);

    index++;


    if(index > text.length){
        index = 0;
    }
}

setInterval(writeText, 100);