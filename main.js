let minSpan = document.querySelector(".min");
let secSpan = document.querySelector(".sec");
let msecSpan = document.querySelector(".msec");
let timerDisplay = document.querySelector(".timer")
let startBtn = document.querySelector(".start");
let restartBtn = document.querySelector(".restart");
let pauseBtn = document.querySelector(".pause");
let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null; 


function startTimer(){
   msec++;
//    console.log(msec);
   if(msec == 100){
    msec = 0;
    secs++;
// console.log(secs)
    if(secs == 60){
        secs = 0;
        mins++;
        // console.log('mins is ', mins)
    }

   }
let msecString = msec < 10 ? `0${msec}` : msec;
let secString = secs < 10 ? `0${secs}` : secs;
let minString = mins < 10 ? `0${mins}`: mins;

// timerDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`;
minSpan.innerHTML = minString;
secSpan.innerHTML = secString;
msecSpan.innerHTML = msecString;

}
  startBtn.addEventListener('click',function(){
    if(timerId !== null){
    clearInterval(timerId);
    }
   timerId = setInterval(startTimer,10);
  });


  pauseBtn.addEventListener('click',function(){
   
    clearInterval(timerId);
    
  });
  
  restartBtn.addEventListener('click',function(){
   clearInterval(timerId);
//    timerDisplay.innerHTML = `00 : 00 : 00`;
minSpan.innerHTML = '00';
secSpan.innerHTML = '00';
msecSpan.innerHTML = '00';

   msec = 0;
   secs = 0;
   mins = 0;
  });