//СЕКУНДОМЕР

const timer = document.getElementById('timer');
const secundomer = document.getElementById('TIMER');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reverse = document.getElementById('reverse');
const reverseAgain = document.getElementById('reverseAgain');
const clear = document.getElementById('clear');
const save = document.getElementById('save');
const reset = document.getElementById('reset');
const clearAll = document.getElementById('clearAll');
const list = document.getElementById('list');

let timeReverse = false;
let miliSec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let time;
start.addEventListener('click', () => {
    if (timeReverse === false) {
    time = setInterval(() => {
        miliSec = miliSec+1;
        if(miliSec===100){
            miliSec = 0;
            sec++;
            if(sec===60){
                sec=0;
                min++;
                if(min===60){
                    min=0;
                    hour++;
                    if(hour===99){
                        clearInterval(time);
                    }
                }
            }
        }
        secundomer.textContent = String(hour).padStart(2,'0')+':'+String(min).padStart(2,'0')+':'+String(sec).padStart(2,'0')+':'+String(miliSec).padStart(2,'0');
    },10);
    start.style.display = 'none';
    stop.style.display = 'block';
    stop.style.margin = '0 auto';
    } else {
        
        time = setInterval(() => {
            miliSec = miliSec-1;
            if(miliSec===0){
                miliSec = 99;
                sec--;
                if(sec===0){
                    sec=59;
                    min--;
                    if(min===0){
                        min=59;
                        hour--;
                        if(hour===0 && min===0 && sec===0 &&miliSec===0){
                            clearInterval(time);
                        }
                    }
                }
            }
            secundomer.textContent = String(hour).padStart(2,'0')+':'+String(min).padStart(2,'0')+':'+String(sec).padStart(2,'0')+':'+String(miliSec).padStart(2,'0');
        },10);
        start.style.display = 'none';
        stop.style.display = 'block';
        stop.style.margin = '0 auto';
    }
});

stop.addEventListener('click', () => {
    stop.style.display = 'none';
    start.style.display = 'block';
    clearInterval(time);
});

reverse.addEventListener('click', () => {
    clearInterval(time);
    resetReverse();
    timeReverse = true;
    reverse.style.display = 'none';
    reverseAgain.style.display = 'inline-block';
    stop.style.display = 'none';
    start.style.display = 'block';
});
reverseAgain.addEventListener('click', () => {
    clearInterval(time);
    resetNoReverse();
    timeReverse = false;
    reverse.style.display = 'inline-block';
    reverseAgain.style.display = 'none';
    stop.style.display = 'none';
    start.style.display = 'block';
});

save.addEventListener('click', () => {
    list.innerHTML = list.innerHTML + '<li>' + secundomer.textContent + '</li>';
});
reset.addEventListener('click', () => {
    if(timeReverse===false){
        resetNoReverse();
    } else {
        resetReverse();
    }
});
clearAll.addEventListener('click', () => {
    if(timeReverse===false){
        resetNoReverse();
        } else {
            resetReverse();
        }
    list.innerHTML = "";
});
clear.addEventListener('click', () => {
    list.innerHTML = "";
});

function resetNoReverse(){
    miliSec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    secundomer.textContent = '00:00:00:00';
}
function resetReverse(){
    miliSec = 99;
    sec = 59;
    min = 59;
    hour = 99;
    secundomer.textContent = '99:59:59:99';
}
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    let array = [];
    array.push(miliSec);
    array.push(sec);
    array.push(min);
    array.push(hour);
    localStorage.setItem('timeReverse', JSON.stringify(timeReverse));
    localStorage.setItem('currentTime', secundomer.textContent);
    localStorage.setItem('time', JSON.stringify(array));
  });

 window.addEventListener('load',() => {
    timeReverse = JSON.parse(localStorage.getItem('timeReverse'));
    secundomer.textContent = localStorage.getItem('currentTime');
    array = JSON.parse(localStorage.getItem('time'));
    miliSec = array[0];
    sec = array[1];
    min =array[2];
    hour = array[3];
 }) ;