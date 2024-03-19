const feed = document.getElementById ("btn-feed");
const work = document.getElementById ("btn-work");
const music = document.getElementById ("btn-music");
const songs = ["Elevator-music.mp3", "Jazz-music.mp3", "Rock-music.mp3",];

let sprite = document.querySelector (".image");
let spriteNeutral = true;
let spriteCandies = 1;
let timesFed = 0;
let timesWorked = 0;
let candyAmount = document.querySelector("p")
let randomCandies = Math.random () * 3;
randomCandies = Math.round (randomCandies);

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
        spriteCandies = spriteCandies + randomCandies;
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
    } else {
        sprite.src = "images/sprite-neutral.png";
        spriteNeutral = true;
    }
}

music.addEventListener('click', listening);
work.addEventListener('click', working);
feed.addEventListener('click', feeding);