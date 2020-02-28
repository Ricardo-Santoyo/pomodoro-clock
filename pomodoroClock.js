const clock = document.querySelector("#clock");
const action = document.querySelector("#action");
let time = 1500
let interval;
let n = 0;
let minute;
let second;

clock.addEventListener('click', startTimer);
function startTimer(e) {
    action.textContent = "Work"
    interval = setInterval(timer, 1000);
};

function timer() {
    //determines whether its workTime or breakTime
    if (time == 0 && n % 2 == 0) {
        breakTime();
    };
    if (time == 0 && n % 2 == 1) {
        workTime();
    };

    time = time - 1
    showTime();
};

function showTime() {
    minute = Math.trunc(time / 60);
    second = time % 60;

    //adds a zero infront of a single digit number 
    if (minute < 10) {
        minute = "0" + minute;
    };
    if (second < 10) {
        second = "0" + second;
    };

    clock.textContent = minute + ":" + second;
};

function breakTime() {
    action.textContent = "Break"
    time = 300;
    n = n + 1;
}

function workTime() {
    action.textContent = "Work"
    time = 1500;
    n = n + 1;
}