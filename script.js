let startBtn=document.getElementById("start-btn");
let lapBtn=document.getElementById("lap-btn");
let timeDisplay=document.getElementById("display-time");
let lapDisplay=document.getElementById("display-lapse");
let timer;
startBtn.addEventListener("click",function(){

  if(startBtn.innerText=="Start"){
    startBtn.innerText="Stop";
    lapBtn.innerText="Lap";

  let lst=timeDisplay.innerText.split(":");

  timer=setInterval(function(){
    lst[2]=Number(lst[2])+1;
    if(lst[2]==10){
      lst[2]='00';
      lst[1]=Number(lst[1])+1;
      if(lst[1]==60){
        lst[0]=Number(lst[0])+1;
        lst[1]='00';
      }
      if(lst[0]==60){
        lst[0]="00";
      }
    }
    if(lst[2]>0 && lst[2]<10){
      lst[2]='0'+Number(lst[2]);
    }
    if(lst[1]>0 && lst[1]<10){
      lst[1]='0'+Number(lst[1]);
    }
    if(lst[0]>0 && lst[0]<10){
      lst[0]='0'+Number(lst[0]);
    }
    let ans=lst.join(":");
    timeDisplay.innerText=ans;
  },100);
  
  }
  else{
    startBtn.innerText="Start";
    lapBtn.innerText="Reset";
    clearInterval(timer);
  }
  
});
let count=1;
function createLap(){

  let lapSection=document.createElement("div");
  let lapHeading=document.createElement("span");
  let lap=document.createElement("span");
  lapHeading.innerText="Lap "+count;
  lapHeading.setAttribute("class","lap-heading");
  lap.innerText=timeDisplay.innerText;
  lapSection.append(lapHeading);
  lapSection.append(lap);
  lapDisplay.append(lapSection);
  lapSection.setAttribute("class","lap");
  lapSection.style.borderStyle="none none solid none";
  count++;
}

lapBtn.addEventListener("click",function(){
  if(lapBtn.innerText=="Reset"){
    timeDisplay.innerText="00:00:00";
    lapBtn.innerText="Lap";
  }
  else if(timeDisplay.innerText!=="00:00:00"){
    createLap();
  }
});