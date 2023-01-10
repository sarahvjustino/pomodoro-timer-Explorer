const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let minutes
let minutesDisplay = document.querySelector('#minutes');
let secondsDisplay = document.querySelector('#seconds');

function contdown() {
    setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent);

        if (seconds <= 0) {
            seconds = 60;
        };

        secondsDisplay.textContent = seconds - 1;
        contdown();
    }, 1000)
}

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');

    contdown()
})

buttonPause.addEventListener('click', () => {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
})

buttonStop.addEventListener('click', () => {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonSet.classList.remove('hide');
    buttonStop.classList.add('hide');
})

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
})

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
})

buttonSet.addEventListener('click', () => {
    minutes = prompt('Quantos Minutos?');
    minutesDisplay.textContent = minutes;
})