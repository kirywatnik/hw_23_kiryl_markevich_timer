// const id = setTimeout(() => {
//     console.log(1111);
// }, 2000);
// const id2 = setInterval(() => {
//     console.log(2221);
// }, 2000);
// console.log(id);
// console.log(id2);
// clearInterval(id2);
// function printNumbers(from, to) {
//     let current = from;
//     let care = setInterval(() => {
//         if(current===to){
//             clearInterval(care);
//         }
//         console.log(current);
//         current++;


//     },1000);


// }
// printNumbers(1, 15);

// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };

// let a = JSON.stringify(user);
// console.log(a);
// let b = JSON.parse(a);
// console.log(b);

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
let str = secundomer.textContent;
let strReverse = '99:59:59:99';
let array = str.split(':');
let arrayReverse = strReverse.split(':');
let time;

start.addEventListener('click', () => {
    if (timeReverse === false) {
        time = setInterval(() => {
            array[3] = Number(array[3]) + 1;
            if (array[3] === 99) {
                array[2] = Number(array[2]) + 1;
                array[3] = 0;
            }
            if (array[2] === 60) {
                array[1] = Number(array[1]) + 1;
                array[2] = 0;
            }
            if (array[1] === 60) {
                array[0] = Number(array[0] + 1);
                array[1] = 0;
            }
            if (array[0] === 99 && array[1] === 59 && array[2] === 59 && array[3] === 99) {
                clearInterval(time);
            }
            if(array[3]<10){
                array[3]= String(array[3]).padStart(2, '0');
            }
            if(array[2]<10){
                array[2]= String(array[2]).padStart(2, '0');
            }
            if(array[1]<10){
                array[1]= String(array[1]).padStart(2, '0');
            }
            if(array[0]<10){
                array[0]= String(array[0]).padStart(2, '0');
            }
            secundomer.textContent = array.join(':');
            
        }, 10);
        start.style.display = 'none';
        stop.style.display = 'block';
        stop.style.margin = '0 auto';
    } else {
        time = setInterval(() => {
            arrayReverse[3] = Number(arrayReverse[3]) - 1;
            if (arrayReverse[3] === 0) {
                arrayReverse[2] = Number(arrayReverse[2]) - 1;
                arrayReverse[3] = 99;
            }
            if (arrayReverse[2] === 0) {
                arrayReverse[1] = Number(arrayReverse[1]) - 1;
                arrayReverse[2] = 59;
            }
            if (arrayReverse[1] === 0) {
                arrayReverse[0] = Number(arrayReverse[0] - 1);
                arrayReverse[1] = 59;
            }
            if (arrayReverse[0] === 0 && arrayReverse[1] === 0 && arrayReverse[2] === 0 && arrayReverse[3] === 0) {
                clearInterval(time);
            }
            if(arrayReverse[3]<10){
                arrayReverse[3]= String(arrayReverse[3]).padStart(2, '0');
            }
            if(arrayReverse[2]<10){
                arrayReverse[2]= String(arrayReverse[2]).padStart(2, '0');
            }
            if(arrayReverse[1]<10){
                arrayReverse[1]= String(arrayReverse[1]).padStart(2, '0');
            }
            if(arrayReverse[0]<10){
                arrayReverse[0]= String(arrayReverse[0]).padStart(2, '0');
            }
            secundomer.textContent = arrayReverse.join(':');
        }, 10);
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
    secundomer.textContent = strReverse;
    timeReverse = true;
    reverse.style.display = 'none';
    reverseAgain.style.display = 'inline-block';
});
reverseAgain.addEventListener('click', () => {
    secundomer.textContent = str;
    timeReverse = false;
    reverse.style.display = 'inline-block';
    reverseAgain.style.display = 'none';
});

save.addEventListener('click', () => {
    list.innerHTML = list.innerHTML + '<li>' + secundomer.textContent + '</li>';
});
reset.addEventListener('click', () => {
    if(timeReverse===false){
    
    array = ['00', '00', '00', '00'];
    secundomer.textContent = '00:00:00:00';
    } else {
        arrayReverse = ['99', '59', '59', '99'];
        secundomer.textContent = '99:59:59:99';
    }
});

clearAll.addEventListener('click', () => {
    if(timeReverse===false){
        array = ['00', '00', '00', '00'];
        secundomer.textContent = '00:00:00:00';
        } else {
            arrayReverse = ['99', '59', '59', '99'];
            secundomer.textContent = '99:59:59:99';
        }
    list.innerHTML = "";
});
clear.addEventListener('click', () => {
    list.innerHTML = "";
});

