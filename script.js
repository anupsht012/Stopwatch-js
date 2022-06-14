

let hour = 0;
let minute = 0;
let seconds = 0;
let timerStat = false;


const startTime = () => {
  timerStat = true;
  setInterval(runTime, 1000);
};

const stopTime = () => {
  timerStat = false;

};  

const resetTime = () => {
  timerStat = false;
  
  document.getElementById("demo").innerHTML ="00:00:00";
}


const runTime = () => {
  if (timerStat === true) {
    seconds += 1;
    if (seconds > 59) {
      seconds = 0;
      minute += 1;
    }
    if (minute > 59) {
        seconds = 0;
        minute = 0;
        hour+=1;
      }
    
    document.getElementById("demo").innerHTML= `${hour ? hour :"00"} : ${minute ? minute : "00"} : ${seconds ? seconds : "00"}`;

  }

};