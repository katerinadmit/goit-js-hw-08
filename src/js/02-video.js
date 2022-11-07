import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
console.log(Player)

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onVideoTimeupdate = function (data) {
 
  localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onVideoTimeupdate, 1000));

const timeVideoData = localStorage.getItem(LOCAL_STORAGE_KEY);

player
  .setCurrentTime(timeVideoData)
  .then(function (seconds) {
    
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':        
        break;
      default:       
        break;
    }
  });
