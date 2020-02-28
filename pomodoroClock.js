const clock = document.querySelector("#clock");
let time = 20
let interval;

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
    clock.textContent = time;
};