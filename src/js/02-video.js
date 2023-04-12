import { player } from "@vimeo/player";
import { _throttle } from "lodash.throttle";

    const iframe = document.querySelector("iframe");
    const player = new Vimeo.Player(iframe);
    const currentTimeVideo = "videoplayer-current-time"




player.on('timeupdate', trottle(onPlay, 1000) );

function onPlay(event) {
    lokalStorege.setItem(currentTimeVideo, event.seconds);

}
setCurrentTime();

// function setCurrentTime() { 
//     if (!localStorage.getItem(currentTimeVideo)){
//         return;
// }
//     player.setCurrentTime(localStorage.getItem('currentTimeVideo'));
// }

// player.setCurrentTime(localStorage.getItem(currentTimeVideo) || 0);



player.on('play', onPlay);
    

