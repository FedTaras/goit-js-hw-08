import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const onPlay = function (time) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(time.seconds)
  );
};
player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(savedTime);
