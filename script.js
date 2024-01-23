let dayb = document.querySelector("#day")
let hoursb = document.querySelector("#hours")
let minutesb = document.querySelector("#minutes")
let secondsb = document.querySelector("#seconds")

let NewYearDate = new Date(2026, 0, 1, 00, 00)
let endTime = NewYearDate.getTime()

const countdown = () => {
    let todayDate = new Date()
    let todayTime = todayDate.getTime()
    let remTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeroes = (num) => (num < 10 ? `0${num}` : num);

    if (endTime < todayTime) {
        clearInterval(i)
        document.querySelector(
            ".countdown"
        ).innerHTML = `<h1>Countdown Has Expired</h1>`;
    } else {
        let daysLeft = Math.floor(remTime / oneDay);
        let hrsLeft = Math.floor((remTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remTime % oneMin) / 1000);

        dayb.textContent = addZeroes(daysLeft);
        hoursb.textContent = addZeroes(hrsLeft);
        minutesb.textContent = addZeroes(minsLeft);
        secondsb.textContent = addZeroes(secsLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();
