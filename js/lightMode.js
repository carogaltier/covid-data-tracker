// ------------------ TOGGLE DARK / LIGHT MODE ------------------
let toggle = false;

id('btnSwitch').addEventListener('click', () => {
    document.body.classList.toggle('light');
    id('btnSwitch').classList.toggle('light-mode');

    if (toggle === true) {
        id('logoImg').src  = "img/dark-mode-covid-real-time-data-logo.svg";
    } else {
        id('logoImg').src = "img/light-mode-covid-real-time-data-logo.svg";
    }
    toggle = !toggle;     
})
