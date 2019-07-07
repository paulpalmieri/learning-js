// store path for sounds
const audio_paths = {
  65: { key: "A", src: "808-Clap01.wav" },
  66: { key: "B", src: "808-Clap01.wav" },
  67: { key: "C", src: "808-Clap01.wav" },
  68: { key: "D", src: "808-Clap01.wav" },
  69: { key: "E", src: "808-Clap01.wav" },
  70: { key: "F", src: "808-Clap01.wav" },
  71: { key: "G", src: "808-Clap01.wav" },
  72: { key: "H", src: "808-Clap01.wav" },
  73: { key: "I", src: "808-Clap01.wav" },
  74: { key: "J", src: "808-Clap01.wav" },
  75: { key: "K", src: "808-Clap01.wav" },
  76: { key: "L", src: "808-Clap01.wav" },
  77: { key: "M", src: "808-Clap01.wav" },
  78: { key: "N", src: "808-Clap01.wav" },
  79: { key: "O", src: "808-Clap01.wav" },
  80: { key: "P", src: "808-Clap01.wav" },
  81: { key: "Q", src: "808-Clap01.wav" },
  82: { key: "R", src: "808-Clap01.wav" },
  83: { key: "S", src: "808-Clap01.wav" },
  84: { key: "T", src: "808-Clap01.wav" },
  85: { key: "U", src: "808-Clap01.wav" },
  86: { key: "V", src: "808-Clap01.wav" },
  87: { key: "W", src: "808-Clap01.wav" },
  88: { key: "X", src: "808-Clap01.wav" },
  89: { key: "Y", src: "808-Clap01.wav" },
  90: { key: "Z", src: "808-Clap01.wav" }
};

function generateKeys() {
  var keys_container = document.getElementById("keys_container");
  for (var i = 65; i <= 90; i++) {
    var key_container = document.createElement("div");
    key_container.setAttribute("data-key", i);
    key_container.setAttribute("class", "key");
    var kbd_element = document.createElement("kbd");
    kbd_element.innerHTML = audio_paths[i].key;
    var span_element = document.createElement("span");
    span_element.setAttribute("class", "sound");
    span_element.innerHTML = audio_paths[i].src.slice(0, -4);
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

function playSound(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

generateKeys();
generateAudioTags();

const keys = document.querySelectorAll(".key");
window.addEventListener("keydown", playSound);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
