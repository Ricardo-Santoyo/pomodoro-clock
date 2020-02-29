const clock = document.querySelector("#clock");
const action = document.querySelector("#action");
const stop = document.querySelector("#stop");
let time = 1500
let n = 0;
let interval;
let minute;
let second;

clock.addEventListener('click', startTimer);
function startTimer(e) {
    if (time < 1500 && stop.textContent == "Stop") {
        return;
    };
    action.textContent = "Work"
    stop.textContent = "Stop"
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
};

function workTime() {
    action.textContent = "Work"
    time = 1500;
    n = n + 1;
};

stop.addEventListener("click", stopTimer);
function stopTimer() {
    if (stop.textContent == "Reset") {
        return reset();
    }
    clearInterval(interval);
    action.textContent = "Click the timer to resume"
    stop.textContent = "Reset"
};

function reset() {
    time = 1500;
    n = 0;
    action.textContent = "Click the timer to start";
    stop.textContent = "Stop";
    clock.textContent = "25:00";
    clearInterval(interval);
};