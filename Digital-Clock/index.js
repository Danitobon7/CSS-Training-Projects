const HoursEl = document.getElementById ("Hours")
const MinutesEl = document.getElementById ("Minutes")
const SecondsEl = document.getElementById ("Seconds")
const ampmEl = document.getElementById ("ampm")

function updateClock () {
    let h = new Date ().getHours();
    let m = new Date ().getMinutes();
    let s = new Date ().getSeconds();
    let ampm = "PM";

    if(h > 12) {
        h = h - 12
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    HoursEl.innerText = h;
    MinutesEl.innerText = m;
    SecondsEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
    updateClock()
    }, 1000) 
}

updateClock();
