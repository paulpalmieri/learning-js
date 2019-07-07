// store path for sounds
// all the same for now
const audio_paths = {
  65: { key: "A", src: "Stick 1.wav" },
  66: { key: "B", src: "Tom 1.wav" },
  67: { key: "C", src: "Tom 2.wav" },
  68: { key: "D", src: "Warm 808.wav" },
  69: { key: "E", src: "Bass Hit.wav" },
  70: { key: "F", src: "Clap 1.wav" },
  71: { key: "G", src: "Clap 2.wav" },
  72: { key: "H", src: "Clave 1.wav" },
  73: { key: "I", src: "Conga 1.wav" },
  74: { key: "J", src: "Conga 2.wav" },
  75: { key: "K", src: "Conga 3.wav" },
  76: { key: "L", src: "Cowbell.wav" },
  77: { key: "M", src: "Hi hats 1.wav" },
  78: { key: "N", src: "Hi hats 2.wav" },
  79: { key: "O", src: "Hi hats 3.wav" },
  80: { key: "P", src: "Kick 1.wav" },
  81: { key: "Q", src: "Maracas 1.wav" },
  82: { key: "R", src: "Ramen.wav" },
  83: { key: "S", src: "Rim 1.wav" },
  84: { key: "T", src: "Rim 2.wav" },
  85: { key: "U", src: "Rim 3.wav" },
  86: { key: "V", src: "Sci Fi Hit.wav" },
  87: { key: "W", src: "Snare 1.wav" },
  88: { key: "X", src: "Snare 2.wav" },
  89: { key: "Y", src: "Snare 3.wav" },
  90: { key: "Z", src: "Snare 4.wav" }
};

function generateKeys() {
  var keys_container = document.getElementById("keys_container");
  for (var i = 65; i <= 90; i++) {
    // create div
    var key_container = document.createElement("div");
    key_container.setAttribute("data-key", i);
    key_container.setAttribute("class", "key");

    // create kbd input
    var kbd_element = document.createElement("kbd");
    kbd_element.innerHTML = audio_paths[i].key;

    // create span
    var span_element = document.createElement("span");
    span_element.setAttribute("class", "sound");
    span_element.innerHTML = audio_paths[i].src.slice(0, -4);

    // bind everything
    key_container.appendChild(kbd_element);
    key_container.appendChild(span_element);
    keys_container.appendChild(key_container);
  }
}

function generateAudioTags() {
  var audio_container = document.getElementById("audio_container");
  for (var i = 65; i <= 90; i++) {
    var audio_element = document.createElement("audio");
    audio_element.setAttribute("data-key", i);
    audio_element.setAttribute("src", "audio/" + audio_paths[i].src);
    audio_container.appendChild(audio_element);
  }
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if not transform
  this.classList.remove("playing");
  console.log(e.propertyName);
}

function playSoundKeyboard(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  playSound(key, audio);
}

function playSoundClick(e) {
  let key, audio;
  if (e.target.tagName === "SPAN" || e.target.tagName === "KBD") {
    key = e.target.parentNode;
  } else {
    key = e.target;
  }
  audio = document.querySelector(
    `audio[data-key="${key.getAttribute("data-key")}"]`
  );
  playSound(key, audio);
}

function playSound(key, audio) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function handleDarkMode(e) {
  let container = document.getElementById("container");
  let icon_element = document.getElementsByClassName(
    "mdl-icon-toggle__label"
  )[0];
  if (this.checked) {
    container.classList.add("dark_mode");
    icon_element.innerHTML = "brightness_7";
  } else {
    container.classList.remove("dark_mode");
    icon_element.innerHTML = "brightness_1";
  }
}

// create tags
generateKeys();
generateAudioTags();

const keys = document.querySelectorAll(".key");

// bind keyboard event listener
window.addEventListener("keydown", playSoundKeyboard);

// bind transition listener event listener
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
keys.forEach(key => key.addEventListener("click", playSoundClick));

// bind dark mode
document
  .getElementById("icon-toggle-2")
  .addEventListener("change", handleDarkMode);
