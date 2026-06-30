let speed = 0;
let battery = 87;
let autopilotOn = true;

const speedEl = document.getElementById("speed");
const batteryEl = document.getElementById("battery");
const batteryFill = document.getElementById("batteryFill");
const roadItems = document.querySelectorAll(".lane, .road-dash, .traffic");
const apBtn = document.getElementById("apBtn");
const visual = document.querySelector(".autopilot-visual");

function updateDisplay() {
  speedEl.innerText = speed;
  batteryEl.innerText = Math.max(0, Math.floor(battery));
  batteryFill.style.width = Math.max(0, battery) + "%";

  const duration = Math.max(0.35, 1.35 - speed * 0.008);
  roadItems.forEach((item) => {
    item.style.animationDuration = duration + "s";
  });
}

function accelerate() {
  speed = Math.min(120, speed + 8);
  battery = Math.max(0, battery - 0.7);
  updateDisplay();
}

function slowDown() {
  speed = Math.max(0, speed - 8);
  updateDisplay();
}

function toggleAutopilot() {
  autopilotOn = !autopilotOn;
  visual.classList.toggle("autopilot-off", !autopilotOn);
  apBtn.innerText = autopilotOn ? "🔵 Autopilot On" : "⚪ Autopilot Off";
}

function resetDrive() {
  speed = 0;
  battery = 87;
  autopilotOn = true;
  visual.classList.remove("autopilot-off");
  apBtn.innerText = "🔵 Autopilot On";
  updateDisplay();
}

updateDisplay();
