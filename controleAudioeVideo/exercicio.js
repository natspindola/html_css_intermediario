var myVideo = document.getElementById('myVideo'),
logo = document.getElementById('logo')[0],
adTimer = null;

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
