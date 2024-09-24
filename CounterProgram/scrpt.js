const decreseBtn = document.getElementById("dcrBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("incrBtn");

const countlabel = document.getElementById("countlabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
    if(count > 0)
    {
        countlabel.style.color = 'green';
    }
}

decreseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
    if(count < 0){
        countlabel.style.color = 'red';
    }
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
    countlabel.style.color = 'black';
}
