const daysEl=document.getElementById('days')
const hoursEl=document.getElementById('hours')
const minutesEl=document.getElementById('min')
const secondsEl=document.getElementById('seconds');

const newYears='1 jan 2024'


function countDown(){
  const newYearDate=new Date(newYears)
  const currentDate=new Date()
  const TotalSeconds=(newYearDate-currentDate) / 1000;
  const days=Math.floor(TotalSeconds/3600/24);
  const hours=Math.floor(TotalSeconds/3600) % 24
  const minutes=Math.floor(TotalSeconds/60)  %60;
  const seconds=Math.floor(TotalSeconds) %60;


  daysEl.innerHTML=days;
  hoursEl.innerHTML=hours;
  minutesEl.innerHTML=minutes;
  secondsEl.innerHTML=seconds;
  

  
}
countDown()
setInterval(countDown, 1000)