var mysong = document.getElementById("mysong1");
var mysong2 = document.getElementById("mysong2");
var mysong3 = document.getElementById("mysong3");
var mysong4 = document.getElementById("mysong4");
var mysong5 = document.getElementById("mysong5");
var mysong6 = document.getElementById("mysong6");
var mysong7 = document.getElementById("mysong7");

const pauseAll = () => {
  mysong.pause();
  mysong2.pause();
  mysong3.pause();
  mysong4.pause();
  mysong5.pause();
  mysong6.pause();
  mysong7.pause();
};

const playAodio = (song) => {
  if (song.paused) {
    pauseAll();
    song.play();
  } else {
    song.pause();
  }
};

let wBtn = document.getElementById("btn1");
wBtn.addEventListener("click", function () {
  playAodio(mysong)
});

let aBtn = document.getElementById("btn2");
aBtn.addEventListener("click", function () {
  playAodio(mysong2)
});

let dBtn = document.getElementById("btn3");
dBtn.addEventListener("click", function () {
  playAodio(mysong3)
});

let jBtn = document.getElementById("btn4");
jBtn.addEventListener("click", function () {
  playAodio(mysong4)
});

let kBtn = document.getElementById("btn5");
kBtn.addEventListener("click", function () {
  playAodio(mysong5)
});

let lBtn = document.getElementById("btn6");
lBtn.addEventListener("click", function () {
  playAodio(mysong6)
});

let mBtn = document.getElementById("btn7");
mBtn.addEventListener("click", function () {
  playAodio(mysong7)
});
