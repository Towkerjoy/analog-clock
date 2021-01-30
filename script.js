const deg = 6; // 60 Minutes for one hours that's why 6 degree rotate.
const hr = document.querySelector("#hr"); // Call Hours id.
const mn = document.querySelector("#mn"); // Call Minute id.
const sc = document.querySelector("#sc"); // Call Second id.
setInterval(() => {
    let day= new Date(); // Day come form your device.
    let hh = day.getHours() * 30; // Hours come form your device.
    let mm = day.getMinutes() * deg; // Minutes come form your device.
    let ss = day.getSeconds() * deg; // Sceond come form your device.
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`; // For Roteted 6 degree Clockwork after 1 hour.
    mn.style.transform = `rotateZ(${mm}deg)`;  // For Roteted 6 degree Clockwork after 1 Minutes .
    sc.style.transform = `rotateZ(${ss}deg)`;  // For Roteted 6 degree Clockwork after 1 Second. 
})