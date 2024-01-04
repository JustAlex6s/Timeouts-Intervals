let second = 1;
function times() {
  console.log(second);
  document.getElementById("test").innerHTML = second;
  second++;
}

let minute = 1;
let min = "minute est écoulée";
let minutes = 2;
let min2 = "minutes sont écoulées";

function moreTimes(){
    if (minute < 2){
        console.log(minute + " " + min);
        document.getElementById("Min").innerHTML = minute + " " + min;
        minute = minute + 1;
    }else {
        console.log(minutes + " " + min2);
        document.getElementById("Min").innerHTML = minutes + " " + min2;
        minutes = minutes + 1;
    }
    
   
}


setInterval(times, 1000);
setInterval(moreTimes, 60000);
