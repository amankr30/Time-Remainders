const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  let now = new Date(),
    mm = String(now.getMonth()).padStart(2, "0"),
    dd = String(now.getDate()).padStart(2, "0"),
    yyyy = now.getFullYear();

  const enteredDay = prompt("Enter Day").padStart(2, "0");
 
  const enteredMonth = prompt("Enter Month").padStart(2, "0");
 

  now = `${mm}/${dd}/${yyyy}`;
  let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

// do{
//   if(enteredDay>=1 && enteredDay<=31 && enteredMonth>=1 && enteredMonth<=12){
//     let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
//   }
//   else{
//     alert("Invalid Day or Month");
//     const enteredDay = prompt("Enter Day").padStart(2, "0");
 
//     const enteredMonth = prompt("Enter Month").padStart(2, "0");
//     now = `${mm}/${dd}/${yyyy}`;
//     let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

//   }
// }while(enteredDay>=1 && enteredDay<=31 && enteredMonth>=1 && enteredMonth<=12);
  
   

    
 

  if (now > targetDate) {
    targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;
  }

  const intervalId = setInterval(() => {
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();

    const difference = timer - today;

    const leftDay = Math.floor(difference / day);

    const hourLeft = Math.floor((difference % day) / hour);

    const minuteLeft = Math.floor((difference % hour) / minute);

    const secondLeft = Math.floor((difference % minute) / second);

    daysElement.innerText = leftDay;
    hoursElement.innerText = hourLeft;
    minutesElement.innerText = minuteLeft;
    secondsElement.innerText = secondLeft;

    if (difference < 0) {
      counterTimer.style.display = "none";
      heading.innerText = "Time's up";
      clearInterval(intervalId);
    }
  }, 1000);
};

timerFunction();
