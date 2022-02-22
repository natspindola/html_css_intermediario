var myVideo = document.getElementById('myVideo'),
logo = document.getElementById('logo'),
adTimer = null;

myVideo.addEventListener('playing', function(){
    showAds();
})

myVideo.addEventListener('pause', function(){
    stopAds();
})


function showAds(){
    stopAds();
    adTimer = setInterval(()=>{
        logo.style.display = 'block';
        setTimeout(()=>{
            logo.style.display = 'none';
        },300)
    },5000)
}

function stopAds(){
    clearInterval(adTimer);
}

function setVideoTime(position){
    myVideo.currentTime = position;
    myVideo.play();
}

function setSpeed(direction){
    if(direction === 'up'){
        myVideo.playbackRate += 0.5;
    } else if(direction === 'down'){
        myVideo.playbackRate -= 0.25;
    } else{
        myVideo.playbackRate = 1;
    }
}