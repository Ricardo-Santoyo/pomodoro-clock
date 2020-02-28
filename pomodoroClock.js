const clock = document.querySelector("#clock");
let time = 1500
let interval;
let minute;
let second;

clock.addEventListener('click', startTimer);
function startTimer(e) {
    interval = setInterval(timer, 1000);
};

function timer() {
    if (time == 0) {
        return clearInterval(interval);
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