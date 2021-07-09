//Add event listener to video and scroll arrow for finishing and clicking respectivly
primeScrollArrow = function(){
  scrollBox = document.getElementsByClassName('scrollDown')[0];
  scrollText = scrollBox.getElementsByClassName('downText')[0];
  checkpoint=document.getElementById('scrollCheckpoint');
  video = document.getElementById('mainVideo');
  //Scroll down when arrow is clicked
  scrollBox.addEventListener("click", function(){
    checkpoint.scrollIntoView({behavior: "smooth"})
  });
  //Show "see more" text when video finishes
  video.addEventListener('ended',function(){
    scrollText.classList.add('textAppear');
    scrollBox.classList.add('bob');
  },false)
}
startupFunctions.push(primeScrollArrow)


fixVideo = function(){
  //Change video file to one with a 16:9 aspect ratio if on mobile and relaod it to prevent loading issues
  if(window.mobileCheck()){
    video = document.getElementById('mainVideo');
    video.getElementsByTagName('source')[0].src = "https://2020.igem.org/wiki/images/4/4b/T--Virginia--media--Main16-9.mp4";
    video.load();
  }
}
//Run on page load, and use unshift so that it is the first function called after load
startupFunctions.unshift(fixVideo)