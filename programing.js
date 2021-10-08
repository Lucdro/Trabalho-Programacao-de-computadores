"use stritc"
var hr = 0
var min = 0
var sec = 0
var cen = 0
var tempo = 10
var cron;
function start() {
    cron = setInterval(timer, tempo)
}
function pause() {
    clearInterval(cron)
}
function reset() {
    clearInterval(cron)
    document.getElementById('contador').innerText ="00:00:00:00"
  cen=0
  sec=0
  min=0
  hr=0
}
function timer() {
    cen++
    if (cen==100){
        cen=0
        sec++
    }
    if (sec==60){
        sec=0
        min++
    }
    if(min==60){
        min=0
        hr++
    }
    var format= (hr<10?'0'+hr:hr)+":"+(min<10?'0'+min:min)+":"+(sec<10?'0'+sec:sec)+":"+(cen<10?'0'+cen: cen)
    document.getElementById('contador').innerText = format
}