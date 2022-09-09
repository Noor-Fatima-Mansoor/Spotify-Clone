console.log('Welcome to Spotify');
//Intialize the varibales
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songs =[
  {songName:"On My Way" ,filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
  {songName:"On My Way" ,filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
  {songName:"On My Way" ,filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
  {songName:"On My Way" ,filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
  {songName:"On My Way" ,filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
  {songName:"On My Way" ,filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
  {songName:"On My Way" ,filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
  {songName:"On My Way" ,filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
  {songName:"On My Way" ,filePath:"song/1.mp3", coverPath:"covers/1.jpg"},

]
//Listen to Events
masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.current<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-cirlce')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity  = 1;

   }
   else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-cirlce')
        gif.style.opacity  = 0;
   }


})
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress  = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar = progress
    

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =  myProgressBar.value*audioElement.duration/100
})



