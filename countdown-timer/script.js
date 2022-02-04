const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '2 15 2023';

function countdown( ){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds /3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    console.log(days, hours, mins, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formalTime(hours);
    minsEl.innerHTML = formalTime(mins);
    secondsEl.innerHTML = formalTime(seconds);
}

function formalTime(time)
{
    return time < 10 ? `${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);