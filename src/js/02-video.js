import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";

const onActivePlayer = event => localStorage.setItem(CURRENT_TIME, event.seconds);

player.on('timeupdate', throttle(onActivePlayer, 1000));
player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

// .catch(function(error) {
//     console.error(error);
// });