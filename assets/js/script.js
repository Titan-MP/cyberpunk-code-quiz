
const clock = document.getElementById('clock');
const main = document.querySelector('main');
const start = document.getElementById('start');
let time = -8;

start.onclick = () => {

    let clockId = setInterval(() => {
        time--;
        if (time < 1) {
            clearInterval(clockId);
            time = 0;
        }
        clock.innerHTML = time;
    },1000);
}

