
const clock = document.getElementById('clock');
const main = document.querySelector('main');
const start = document.getElementById('start');
const alert = document.getElementById('alert');
let time = 60;
let qI = 0;

const runClock = () => {

    let clockId = setInterval(() => {
        time--;
        if (time < 1) {
            clearInterval(clockId);
            time = 0;
        }
        clock.innerHTML = time;
    },1000);
}

const handleAns = answer => {
    if (answer === questions[qI].C) {
        alert.innerHTML = '<h1 style="color:green">Correct!!!</h1>';

        setTimeout(() => {alert.innerHTML = ''}, 1000);
    } else {
        console.log('incorrect');
        time -= 10;
        alert.innerHTML = '<h1 style="color:red">Incorrect!!!</h1>';

        setTimeout(() => {alert.innerHTML = ''}, 1000);
    }
    qI++;
    if (qI < questions.length) {
        renderQuestion();
    } else {
        console.log('game over');
    }
};

const renderQuestion = () => {
    let {Q, A, C} = questions[qI];

    main.innerHTML = `<h1>${Q}</h1><div id="answers"></div>`;
    let answers = document.getElementById('answers');

    A.forEach(answer => {
        answers.innerHTML += `<button onclick="handleAns('${answer}')">${answer}</button>`;
    });
};

const runQuiz = () => {
    runClock();
    renderQuestion();
}

start.onclick = runQuiz;

runQuiz();
