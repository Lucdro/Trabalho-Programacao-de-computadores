"use strict"
var hours = 0
var minutes = 0
var seconds = 0
var hundredth = 0
const tempo = 10
var cron;
function start() {
    cron = setInterval(timer, tempo)
}
function pause() {
    clearInterval(cron)
}
function reset() {
    pause()
    document.getElementById('contador').innerText ="00:00:00:00"
    hundredth=0
    seconds=0
    minutes=0
    hours=0
}
function timer() {
    hundredth++
    if (hundredth==100){
        hundredth=0
        seconds++
    }

    if (seconds==60){
        seconds=0
        minutes++
    }

    if(minutes==60){
        minutes=0
        hours++
    }

    const format = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}:${hundredth.padStart(2,'0')}`
    document.getElementById('contador').innerText = format
}