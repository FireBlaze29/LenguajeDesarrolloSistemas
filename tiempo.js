
const starlightMinutes = 30;
let time= starlightMinutes * 60;

const contratiempoEL = document.getElementById("cronometro");

setInterval(updatecronometro, 1000);

function updatecronometro() {

    const minutes= Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    contratiempoEL.textContent = `${minutes}: ${seconds}`;
    time--;
}