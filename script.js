let hr=0;
let min=0;
let sec=0;
let timer=false;


function start(){
    timer=false;
    setInterval(stopwatch, 1000);
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    hr=0;
    sec=0;
    min=0;
}

function stopwatch(){
    if(timer==true){
        sec=sec+1;
       if(sec>59){
        sec=0;
        min=min+1;
       }
       documentgetElementById("time").innerHTML= `${hr} : $ { min ? min } : "00" ${sec}`;
    }
}
