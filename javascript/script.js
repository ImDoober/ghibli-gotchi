const feed = document.getElementById ("btn-feed");
const work = document.getElementById ("btn-work");
const music = document.getElementById ("btn-music");
const backgroundmusic = document.getElementById ("btn-audio")
const backgroundAudio = document. querySelector ("audio")
const songsArray = ["elevator-music.mp3", "jazz-music.mp3", "rock-music.mp3"]

let sprite = document.querySelector (".image");
let spriteNeutral = true;
let spriteCandies = 1;
let timesFed = 0;
let timesWorked = 0;
let candyAmount = document.querySelector("p")

function feeding(){
    if (spriteNeutral == true || spriteCandies >= 1){
        sprite.src = "images/sprite-food.png";
        spriteNeutral = false;
        timesFed++;
        spriteCandies--;
        candyAmount.textContent = spriteCandies;
    } else if (spriteCandies == 0){
        console.log("You don't have enough candies.");
        sprite.src = "images/sprite-neutral.png";
    } else if (timesFed == 12) {
        sprite.src = "images/sprite-";
        spriteNeutral = false;
    } else {
        sprite.src = "images/sprite-neutral.png";
        spriteNeutral = true
    }
}

function working(){
    if ( spriteNeutral == true || timesWorked <= 2){
        sprite.src = "images/sprite-work.png";
        spriteNeutral = false;
        spriteCandies = spriteCandies + Math.ceil(Math.random () * 2);
        candyAmount.textContent = spriteCandies;
        timesWorked++;
    } else if (timesWorked >= 2) {
        console.log("Your sprite is tired.");
        sprite.src = "images/sprite-neutral.png";
    } else {
        sprite.src = "images/sprite-neutral.png";
        spriteNeutral = true
    }
}

function listening(){
    console.log("Listened");
    if ( spriteNeutral == true){
        sprite.src = "images/sprite-dance.png";
        spriteNeutral = false;
        timesWorked--;
        playRandomSong();
    } else {
        sprite.src = "images/sprite-neutral.png";
        spriteNeutral = true;
    }
}

function playRandomSong(){
    const randomsong = Math.floor(Math.random() * 3);
    const song = new Audio (songsArray[randomsong]);
    song.play();
}

music.addEventListener('click', listening);
work.addEventListener('click', working);
feed.addEventListener('click', feeding);
backgroundmusic.addEventListener('click', () => {
    if (backgroundAudio.paused) {
      backgroundAudio.volume = 0.2;
      backgroundAudio.play();
      backgroundmusic.src = "images/audio-icon.png"
    } else {
      backgroundAudio.pause();
      backgroundmusic.src = "images/mute-icon.png"
    }
  });