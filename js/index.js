var clock = document.getElementById('clockdiv');
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');
var running = false;
var timeinterval;
var time = 25; 
var deadline = new Date(Date.now() + time * 60 * 1000);

function getTimeRemaining() {
  var t = Date.parse(deadline) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function updateClock() {
  var t = getTimeRemaining();

  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

  if (t.total <= 0 || running === false) {
    clearInterval(timeinterval);
    if (timeinterval !== undefined && running === true)
      {
        startBreak();
      }
  }
  console.log("clock updating")
}

function initializeClock() {
  updateClock();
  timeinterval = setInterval(updateClock, 1000);
}

function addMinute() {
  time += 1;
  deadline = new Date(Date.now() + time * 60 * 1000);
  updateClock();
  console.log(deadline)
}

function removeMinute() {
  time -= 1;
  deadline = new Date(Date.now() + time * 60 * 1000);
  updateClock();
  console.log(deadline)
}

function startTimer() {
  running = true;
  initializeClock();
  document.getElementById('status').innerHTML = "WORK!";
}

function resetTimer() {
  time = 25;
  deadline = new Date(Date.now() + time * 60 * 1000);
  running = false;
  updateClock();
  document.getElementById('status').innerHTML = "";
}

function startBreak() {
    time = 5;
    deadline = new Date(Date.now() + time * 60 * 1000);
    running = true;
    initializeClock();
    document.getElementById('status').innerHTML = "BREAK!";
  } 