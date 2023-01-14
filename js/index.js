import resetControls from "./controls.js";
import { Timer } from "./timer.js";

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let minutesDisplay = document.querySelector('#minutes');
let secondsDisplay = document.querySelector('#seconds');
let minutes = minutesDisplay.textContent;
let timerTimeOut

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls,
})

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');

    timer.countdown()
})

buttonPause.addEventListener('click', () => {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', () => {
    resetControls()
    timer.resetTimer()
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
    let newMinutes = prompt('Quantos Minutos?');
    if (!newMinutes) {
        timer.resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})