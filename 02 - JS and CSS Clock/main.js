const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const digitalTime = document.querySelector('.digital-time')

function setTime() {
  const now = new Date;
  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 90

  const minutes = now.getMinutes()
  const minuteDegrees = (minutes / 60) * 360 + 90

  const hours = now.getHours()
  const hourDegrees = (hours / 12) * 360 + 90


  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
  hourHand.style.transform = `rotate(${hourDegrees}deg)`

  const zone = (hours > 11) ? "PM" : "AM"
  const hoursFull = timeCheck(hours)
  const minutesFull = timeCheck(minutes)
  const secondsFull = timeCheck(seconds)
  digitalTime.innerHTML = `${hoursFull} : ${minutesFull} : ${secondsFull} ${zone}`
  console.log(`${hoursFull} : ${minutesFull} : ${secondsFull} ${zone}`)
}

function timeCheck(time) {
  if (time < 10) {
    time = `0${time}`
  }
  return time
}

setInterval(setTime, 1000);
