// @ts-nocheck
// Variables
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
let day = new Date();
console.log(day);

   setInterval(()=>{
       
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // for digital clock
    let hour = document.querySelector('#hour');
    let min = document.querySelector('#min');
    let sec = document.querySelector('#sec');
    let am_pm = document.querySelector('#am-pm');

    let h = new Date().getHours() % 12;
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    // let ampm = h >= 12 ? "Am": "PM";
    let pm = "PM";
    if(h > 12) {
        h = h - 12;
        let pm = "AM";
    }
    // Add Zero before single digit numbers
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hour.innerHTML =`${h}`;
    min.innerHTML = `${m}`;
    sec.innerHTML = `${s}`;
    am_pm.innerHTML = `${pm}`;

    const digiClock = document.querySelector('.digitalClock');
    // digiClock.innerHTML = `
    //     ${hour.textContent = h} :
    //     ${min.textContent = m} :
    //     ${sec.textContent = s} :
    //     ${am_pm.textContent = pm}
    // `;
    // digiClock.innerHTML = `${h} : ${m} : ${s} : ${pm}`;

   });