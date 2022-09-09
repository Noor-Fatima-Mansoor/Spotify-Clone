console.log('Welcome to Spotify');
//Intialize the varibales
let song_Index = 0;
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

// audioElement.play();
//Hnadle-Play/Pause  Click:
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElementcurrentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    } 
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        

    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    
})
//Update Seekbar

//Listen to Events
