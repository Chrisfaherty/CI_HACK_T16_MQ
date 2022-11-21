// Audio control
audioControl = document.getElementById("audio-control");
playMusic = document.getElementById("play");
stopMusic = document.getElementById("stop");

audioControl.addEventListener('click', () => {
   var myAudio = document.getElementById('audio');
   myAudio.muted = !myAudio.muted;
   playMusic.classList.toggle('active');
   stopMusic.classList.toggle('active');

});