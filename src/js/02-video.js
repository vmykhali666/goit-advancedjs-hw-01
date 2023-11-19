import Player from "@vimeo/player"
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const storageKey = "videoplayer-current-time";

player.on('timeupdate', throttle((data) => {
    localStorage.setItem(storageKey, data.seconds);
}, 1000));

addEventListener("load", (e) => {
    let playerTime = localStorage.getItem(storageKey);
    player.setCurrentTime(playerTime ?? 0);
});