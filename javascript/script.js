// Dit zijn de variabelen voor de 3 main buttons van de website.
const feed = document.getElementById("btn-feed");
const work = document.getElementById("btn-work");
const music = document.getElementById("btn-music");

// Dit zijn de variabelen voor alle muziek en audio elementen in de website
const backgroundmusic = document.getElementById("btn-audio");
const backgroundAudio = document.querySelector("audio");
let song;
const songsArray = [
  "audio/elevator-music.mp3",
  "audio/jazz-music.mp3",
  "audio/rock-music.mp3",
];

// Dit zijn de variabelen voor de state waar in de coal sprite in is.
let sprite = document.querySelector(".image");
let spriteNeutral = true;

// Dit zijn de variabelen voor de candies en de hoeveelheid candies die je hebt.
let spriteCandies = 1;
let candyAmount = document.querySelector("#candy-amount");

// Dit zijn de variabelen voor de hoeveelheid keren dat de sprite heeft gewerkt.
let timesFed = 0;
let timesWorked = 0;

// Dit is het variabel van de textBubble waarin de sprite met je praat.
let textBubble = document.querySelector("p");

// Deze functie is voor het voeden van de sprite en houdt bij hoeveel candies je hebt, zorgt ervoor dat de img veranderd naar die van het voeden, houdt bij of de sprite in z'n neutral state is en veranderd de textbubble naar de bijbehoordende text.
function feeding() {
  if (spriteNeutral == true || spriteCandies >= 1) {
    sprite.src = "images/sprite-food.png";
    spriteNeutral = false;
    spriteCandies--;
    candyAmount.textContent = spriteCandies;
    textBubble.style.display = "none";
  } else if (spriteCandies < 0) {
    spriteCandies++;
    candyAmount.textContent = spriteCandies;
  } else if (spriteCandies == 0) {
    sprite.src = "images/sprite-neutral.png";
    showTextbubble();
    textBubble.textContent = "You don't have any candies.";
  } else {
    sprite.src = "images/sprite-neutral.png";
    spriteNeutral = true;
  }
}

// Deze functie is voor het werken van de sprite en houdt bij hoeveel keer er is gewerkt, zorgt ervoor dat de img veranderd naar die van het werken, geeft een random aantal candies, houdt bij of de sprite in z'n neutral state is en veranderd de textbubble naar de bijbehoordende text.
function working() {
  if (spriteNeutral == true || timesWorked <= 2) {
    sprite.src = "images/sprite-work.png";
    spriteNeutral = false;
    spriteCandies = spriteCandies + Math.ceil(Math.random() * 3);
    candyAmount.textContent = spriteCandies;
    timesWorked++;
    textBubble.style.display = "none";
  } else if (timesWorked >= 2) {
    sprite.src = "images/sprite-neutral.png";
    showTextbubble();
    textBubble.textContent = "I'm tired, you make me work too much.";
  } else {
    sprite.src = "images/sprite-neutral.png";
    spriteNeutral = true;
  }
}

// Deze functie is voor het luisteren naar muziek van de sprite en kies steeds een random nummer uit om te spelen, zorgt ervoor dat de img veranderd naar die van het muziek luisteren, houdt bij of de sprite in z'n neutral state is en veranderd de textbubble naar de bijbehoordende text.
function listening() {
  if (spriteNeutral == true) {
    sprite.src = "images/sprite-dance.png";
    spriteNeutral = false;
    timesWorked--;
    showTextbubble();
    textBubble.textContent = "I love dancing!I can work again.";
    playRandomSong();
    backgroundAudio.pause();
    backgroundmusic.src = "images/mute-icon.png";
  } else {
    sprite.src = "images/sprite-neutral.png";
    spriteNeutral = true;
    stopRandomSong();
  }
}

// Deze functie kies met Math.random steeds een random nummer uit de array van nummers om te spelen als de sprite naar muziek luistert.
function playRandomSong() {
  const randomsong = Math.floor(Math.random() * 3);
  song = new Audio(songsArray[randomsong]);
  stopRandomSong();
  song.play();
}

// Deze functie zorgt ervoor dat het random nummer stopt als de button nog een keer wordt ingedrukt en de sprite naar z'n neutral state gaat.
function stopRandomSong() {
  song.pause();
  song.currentTime = 0;
}

// Deze functie zorgt ervoor dat de textBubble verschijnt en de sprite dus wat zegt, en verdwijnt na 3 seconden.
function showTextbubble() {
  textBubble.style.display = "block";
  setTimeout(hideTextbubble, 3000);
}

// Deze functie zorgt ervoor dat de textBubble weer wordt verborgen.
function hideTextbubble() {
  textBubble.style.display = "none";
}

// Deze functie zorgt ervoor dat de textBubble meteen wordt verborgen alse de website wordt ingeladen.
window.onload = function textBubblehide() {
  hideTextbubble();
};

// Deze addEventlistener activeert op klik dat de achtergrond muziek aan en uit gaat, en dat het icoontje veranderd naar een audio icon die aan staat, en eentje die gemuted is.
backgroundmusic.addEventListener("click", () => {
  if (backgroundAudio.paused) {
    backgroundAudio.volume = 0.2;
    backgroundAudio.play();
    backgroundmusic.src = "images/audio-icon.png";
  } else {
    backgroundAudio.pause();
    backgroundmusic.src = "images/mute-icon.png";
  }
});

// Dit zijn de add eventlisteners voor de 3 main buttons, en voeren dus de bijbehorende functies uit als erop wordt geklikt.
music.addEventListener("click", listening);
work.addEventListener("click", working);
feed.addEventListener("click", feeding);
