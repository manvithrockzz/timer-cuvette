var start = document.getElementById("start");
var reset = document.getElementById("reset");

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

var startTimer = null; // declared value null

const alertMessage = "Time's up!";
const audio = new Audio(
  "https://drive.google.com/uc?export=download&id=12dXxPftA6qusNPQyY0j_zM_Fpg5zU5X7"
); // replace with the path to your audio file

// create the alarm
function alertSound() {
  audio.play();

  //   ! Start
  //   setTimeout(function () {
  //     audio.pause();
  //   }, 5000);
  //   ! end

  const alarm = setTimeout(function () {
    alert(alertMessage);

    // set the time to dismiss the alert automatically
    const autoDismissTime = 5000; // set to dismiss after 5 seconds
    setTimeout(function () {
      window.close(); // close the alert automatically
    }, autoDismissTime);
  }, 1);
}

// TODO : Come back early
start.addEventListener("click", function () {
  function startInterval() {
    startTimer = setInterval(function () {
      if (s.value == 0 && h.value == 0 && m.value == 0) {
        alertSound();
        clearInterval(startTimer); // stop the timer
        return;
      }

      timer();
    }, 1000);
  }

  startInterval();
});

reset.addEventListener("click", function () {
  h.value = 0;
  m.value = 0;
  s.value = 0;
  stopInterval();
});

function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    h.value = 0;
    m.value = 0;
    s.value = 0;
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  } else if (h.value != 0 && m.value == 0) {
    m.value = 60;
    h.value--;
  }
}

function stopInterval() {
  clearInterval(startTimer);
}
