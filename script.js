// let hr=0;
// let min=0;
// let sec=0;
// let timer=false;


// function start(){
//     timer=true;
//     setInterval(stopWatch, 1000);
// }

// function stop(){
//     timer=false;
// }

// function reset(){
//     timer=false;
//     hr=0;
//     sec=0;
//     min=0;
// }

// function stopWatch(){
//     if(timer===true){
//         sec=sec+1;
//        if(sec>59){
//         sec=0;
//         min=min+1;
//        }
//        documentgetElementById("time").innerHTML= `${hr} : $ { min ? min : "00"} : ${sec}`;
//     }
// }



// let i=0;
// let j=0;
// let arr=[22,59,5,17,68,88];

//  function bubbleSort(arr){
//      for(i=0; i<(arr.length); i++){
//          for(j=0;j<(arr.length-i-1); j++){
//              if(arr[j]>arr[i]){

//                 let temp=arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j+1] = temp

                
//              }

//          }

//      }
//     //  console.log(arr);
//  }
//  bubbleSort(arr);


 // Bubble sort Implementation using Javascript


// // Creating the bblSort function
// function bblSort(arr){
	
//     for(var i = 0; i < arr.length; i++){
        
//     // Last i elements are already in place
//     for(var j = 0; j < ( arr.length - i -1 ); j++){
        
//         // Checking if the item at present iteration
//         // is greater than the next iteration
//         if(arr[j] > arr[j+1]){
            
//         // If the condition is true then swap them
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j+1] = temp
//         }
//     }
//     }
//     // Print the sorted array
//     console.log(arr);
//     }
    
    
//     // This is our unsorted array
//     var arr = [234, 43, 55, 63, 5, 6, 235, 547];
    
    
//     // Now pass this array to the bblSort() function
//     bblSort(arr);


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