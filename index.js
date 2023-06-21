const player = document.querySelector('.player');
const playButton = document.querySelector('.play-pause-button');
const imgSrc = document.querySelector('.img-src');
const artist = document.querySelector('.song-artist');
const songTitle = document.querySelector('.song-title');
const backgroundImg = document.querySelector('.background-img');
const imgPlayer = document.querySelector('.img-player');
const forwardButton = document.querySelector('.forward-button');
const backwardButton = document.querySelector('.backward-button');
const audio = document.querySelector('.audio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const timeThis = document.querySelector('.current-time');
const allTime = document.querySelector('.all-time');
const controls = document.querySelector('.controls');


const songs = ["Don't Hurt Yourself", "Don't Start Now"];
let songIndex = 0;

const artists = ["Beyonce", "Dua Lupo"];




//init

function loadSong(song) {
    songTitle.innerHTML = song;
    artist.innerHTML = artists[songIndex];  //проверить
    audio.src = `assets/audio/${song}.mp3`;
    backgroundImg.src = `assets/img/background-image/bg-image${songIndex + 1}.png`;
    imgPlayer.src = `assets/img/image-small/image-small${songIndex + 1}.png`;

}

loadSong(songs[songIndex]);


// предзагрузка метаданных

audio.onloadedmetadata = function () {
    allTime.innerHTML = (audio.duration / 60).toFixed(2);
};


//play-pause function 

let isPlay = false;

function playAudio() {

    audio.currentTime = 0;

    if (!isPlay) {

        audio.play();
        isPlay = true;
        playButton.classList.add('pause');
        imgSrc.src = './assets/svg/pause.png';


    } else if (isPlay) {
        audio.pause();
        isPlay = false;
        playButton.classList.remove('pause');
        imgSrc.src = './assets/svg/play.png';

    }
}

playButton.addEventListener('click', playAudio);


//nextSong

function nextSong() {
    songIndex++;

    if (songIndex > 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    audio.play();
}

forwardButton.addEventListener('click', nextSong);

//previousSong

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 1;
    }
    loadSong(songs[songIndex]);
    audio.play();
}

backwardButton.addEventListener('click', prevSong);



//progress bar

function updateProgress(event) {

    let currentTime = event.target.currentTime;

    progress.value = currentTime;
    timeThis.innerHTML = (audio.currentTime / 60).toFixed(2); //мое
    allTime.innerHTML = (audio.duration / 60).toFixed(2); //мое   
}

audio.addEventListener('timeupdate', updateProgress);


function setProgress(event) {

    let clickX = event.offsetX;  // место, где кликнул

    audio.currentTime = clickX;
}
progressContainer.addEventListener('click', setProgress);

//autoplay

audio.addEventListener('ended', nextSong);

(console.log('Выполнены все требования к работе. Дополнительный функционал отсутсвует:\n 1.Вёрстка аудиоплеера: есть кнопка Play/Pause, кнопки "Вперёд" и "Назад" для пролистывания аудиотреков, прогресс-бар, отображается название и автор трека +5\n 2.В футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n 3.Есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание аудиотрека +5\n 4.Внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент аудиотрек +5\n 5.При кликах по кнопкам "Вперёд" и "Назад" переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый +10.\n 6.При смене аудиотрека меняется изображение - обложка аудиотрека +10\n 7.Прогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека +10\n Отображается продолжительность аудиотрека и его текущее время проигрывания +10\n Оценка: 60 баллов'));