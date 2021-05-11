let startButton=document.getElementById('startButton');
let stopButton=document.getElementById('stopButton');
let timeArea=document.getElementById('time');

let time=0;
let timerId=null;

startButton.addEventListener('click',(event) =>{
    setButtonStateRunning();
    timerId=setInterval(() =>{
        time+=100;
        timeArea.innerText=formatTime(time);
    }, 100)
});

stopButton.addEventListener('click',(event) =>{
    setButtonStateStopped();
    clearInterval(timerId);
});

resetButton.addEventListener('click',(event) =>{
    setButtonStateInitial();
    timeArea.textContent='0:0:0:0'
    time=0;
});

function formatTime(time) {
    let msec=time%1000;
    let tempSec=Math.floor(time/1000)
    let sec=tempSec % 60
    let min=Math.floor(tempSec/60);

    let strSmin=zeroPadding(Math.floor(msec/10))
    let strSec=zeroPadding(sec);
    let strMin=zeroPadding(min);

    return strMin + ':' + strSec + '.' + strSmin;
}

function zeroPadding(value){
    if(value<10){
        return '0' + value;
    }   else{
        return value;
    }
}

function setButtonStateInitial() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
  }
  function setButtonStateRunning() {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;

  }
  function setButtonStateStopped() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;

  }

  setButtonStateInitial();
