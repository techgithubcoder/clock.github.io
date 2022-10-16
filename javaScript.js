

let date=document.getElementById("date");
let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");

function watch(){
let mydate=new Date();
let time=mydate.toLocaleTimeString();
let myHour=mydate.getHours();
let myMinute=mydate.getMinutes()
let mySecond=mydate.getSeconds()
date.innerHTML=mydate.toString().substring(0,16);

if(myHour<10){
  myHour=`0${myHour}`
}

if(myMinute<10){
myMinute=`0${myMinute}`
}

if(mySecond<10){
mySecond=`0${mySecond}`
}

hour.innerHTML=myHour;
minute.innerHTML=myMinute;
second.innerHTML=mySecond;
}

setInterval(watch, 1000);