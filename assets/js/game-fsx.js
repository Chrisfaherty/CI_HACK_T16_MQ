
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
           '../assets/sfx/game/btn-hover.mp3',
        ]
    })
  }

// Add sound effect to the start game button
  document.querySelector(".start-game-btn").addEventListener("mouseover", () => {
    sfx.btnSFX.play();
  })

