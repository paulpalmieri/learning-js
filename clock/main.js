const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const secondDisplay = document.querySelector(".second-display");
const minuteDisplay = document.querySelector(".minute-display");
const hourDisplay = document.querySelector(".hour-display");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const minutesDegree = (minutes / 60) * 360 + 90;
  const secondsDegree = (seconds / 60) * 360 + 90;
  const hoursDegree = (hours / 12) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  console.log(`${hours}:${minutes}:${seconds}`);
  console.log(hoursDegree);
  secondHand.innerHTML = `${seconds} s`;
  minuteHand.innerHTML = `${minutes} m`;
  hourHand.innerHTML = `${hours} h`;

  hourDisplay.innerHTML = `${hours}:`;
  minuteDisplay.innerHTML = `${minutes}:`;
  let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  secondDisplay.innerHTML = `${formattedSeconds}`;
}

setInterval(setDate, 1000);
