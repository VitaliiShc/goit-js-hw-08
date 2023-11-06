import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(currentTime) {
  localStorage.setItem(LOCALSTORAGE_KEY, currentTime.seconds);
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);
