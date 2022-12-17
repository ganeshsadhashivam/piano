const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeslider = document.querySelector(".volume-slidebar input");
const keyscheckbox = document.querySelector(".keys-checkbox input");

//by default audio src is "a" tune
let allkeys = [];
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
  //passing audio src based on key pressed
  audio.src = `tunes/${key}.wav`;
  //playing audio
  audio.play();

  console.log(allkeys);

  //getting clicked key element
  const clickedkey = document.querySelector(`[data-key="${key}"]`);
  //adding active classes to the clicked key element
  clickedkey.classList.add("active");
  //removing active classes after 150ms
  setTimeout(() => {
    clickedkey.classList.remove("active");
  }, 150);
};

pianokeys.forEach((key) => {
  allkeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
  console.log(key.dataset.key);
});

const handleVolume = (e) => {
  //passing range slider value as an audio volume
  audio.volume = e.target.value;
};

const pressedKey = (e) => {
  //if  pressed   key available in the allkeys array only call the playTune function
  if (allkeys.includes(e.key)) playTune(e.key);
};

const showHideKeys = () => {
  //toggling hide class from each key on the checkbox click
  pianokeys.forEach((keys) => keys.classList.toggle("hide"));
};

keyscheckbox.addEventListener("click", showHideKeys);
volumeslider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
