

let video = document.getElementsByClassName("video-screen")[0]

function play(){
    video.play()
}

function pause(){
    video.pause()
}

function stop(){
    video.pause()
    video.currentTime = 0
}

function inc(){
    video.playbackRate += 0.10
}

function dec(){
    video.playbackRate -= 0.10
}

function retroc(){
    video.currentTime -= 10
}

function avan(){
    video.currentTime += 10
}
 