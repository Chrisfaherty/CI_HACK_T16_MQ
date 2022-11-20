// Howler game sounds fsx array
var sfx = {
   right: new Howl({
      src: [
         '../assets/sfx/game/correct.mp3',
      ]
   }),
   wrong: new Howl({
      src: [
         '../assets/sfx/game/wronganswer.mp3',
      ],
   }),
   btnSFX: new Howl({
      src: [
         './assets/sfx/game/btn-hover.mp3',
      ]
   }),
   btnGameSFX: new Howl({
      src: [
         '../assets/sfx/game/btn-hover.mp3',
      ]
   })
}

// Control the audio in the game
gameAudio = document.getElementById("audio");

window.addEventListener('load', () => {
   gameAudio.volume = 0.2;
})

// Add sound effect to the start game button
document.querySelector(".game-btn").addEventListener("mouseover", () => {
   sfx.btnGameSFX.play();
})

// Mute audio
function toggleMute() {
   var myAudio = document.getElementById('audio');
   myAudio.muted = !myAudio.muted;
}
