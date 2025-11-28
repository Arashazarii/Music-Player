const playBtn = document.querySelector(".play");
const tenSecForward = document.querySelector(".ten-sec-forward");
const tenSecBackForward = document.querySelector(".ten-sec-back-forward");
const changeIcon = document.querySelector(".fa-play");
const music = document.querySelector("audio");
const forward = document.querySelector(".forward");
const backForward = document.querySelector(".back-forward");
const musicImg = document.querySelector("img");
const musicTitle = document.querySelector("h1");
const volumeCard = document.querySelector(".volume-card");
const volume = document.querySelector(".volume");
const muteBtn = document.querySelector(".mute-btn");

const musics = [
  {
    id: 1,
    src: "./public/musics/Olivia-OBrien-Complicated.mp3",
    title: "Complicated",
    cover: "./public/pics/Complicated.jpg",
    singer: "Olivia OBrien",
  },
  {
    id: 2,
    src: "./public/musics/Afsaneyeh-Hasti.mp3",
    title: "Afsaneyeh Hasti",
    cover: "./public/pics/Afsaneyeh-Hasti.jpg",
    singer: "Hayedeh",
  },
  {
    id: 3,
    src: "./public/musics/Chikar-Kardi-Baam.mp3",
    title: "Chikar Kardi Baam",
    cover: "./public/pics/Chikar-Kardi-Baam.jpg",
    singer: "Amin Tijay",
  },
  {
    id: 4,
    src: "./public/musics/Goriz.mp3",
    title: "Goriz",
    cover: "./public/pics/Goriz.jpg",
    singer: "Ebi",
  },
  {
    id: 5,
    src: "./public/musics/To-Dar-Masafate-Barani.mp3",
    title: "To Dar Masafate Barani",
    cover: "./public/pics/To-Dar-Masafate-Barani.jpg",
    singer: "Mohsen Chavoshi",
  },
];

let mainMusicIndex = 0;

function playMusic() {
  changeIcon.classList.remove("fa-play");
  changeIcon.classList.add("fa-pause");
  music.play();
}
function pause() {
  changeIcon.classList.remove("fa-pause");
  changeIcon.classList.add("fa-play");
  music.pause();
}

tenSecForward.addEventListener("click", function () {
  music.currentTime += 10;
});

tenSecBackForward.addEventListener("click", function () {
  music.currentTime -= 10;
});

function forwardHandler() {
  mainMusicIndex++;
  if (mainMusicIndex > 4) {
    mainMusicIndex = 0;
  }

  const mainMusic = musics[mainMusicIndex];

  musicImg.setAttribute("src", mainMusic.cover);
  music.setAttribute("src", mainMusic.src);
  musicTitle.innerHTML = `${mainMusic.singer} - ${mainMusic.title}`;

  // isPlay = true;
  // if (isPlay) {
  //   playMusic();

  //   isPlay = false;
  // }
  isPlay = true;
  if (isPlay) {
    pause();

    isPlay = true;
  }
}
function backForwardHandler() {
  mainMusicIndex--;
  if (mainMusicIndex < 0) {
    mainMusicIndex = 4;
  }

  const mainMusic = musics[mainMusicIndex];

  musicImg.setAttribute("src", mainMusic.cover);
  music.setAttribute("src", mainMusic.src);
  musicTitle.innerHTML = `${mainMusic.singer} - ${mainMusic.title}`;

  isPlay = true;
  if (isPlay) {
    pause();

    isPlay = true;
  }
}

forward.addEventListener("click", forwardHandler);
backForward.addEventListener("click", backForwardHandler);

isPlay = true;
playBtn.addEventListener("click", function () {
  if (isPlay) {
    playMusic();

    isPlay = false;
  } else {
    pause();

    isPlay = true;
  }
});

volumeCard.addEventListener("click", function (event) {
  music.volume = event.offsetX / 100;
  volume.style.width = `${event.offsetX}px`;
});
