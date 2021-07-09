// reset iGEM
if (RegExp('igem\\.org').test(window.location.href)) {
    var ids = ['HQ_page', 'content', 'bodyContent', 'mw-content-text']
    for (var i = 0; i < ids.length; i++)
        document.querySelector('#' + ids[i]).removeAttribute('id');
    var classes = ['mw-content-ltr']
    for (var i = 0; i < classes.length; i++)
    {
        var elements = document.querySelectorAll('.' + classes[i]);
        for (var j = 0; j < elements.length; j++)
        {
            elements[j].classList.remove(classes[i]);
        }
    }
    document.querySelectorAll('.mw-body')[0].removeAttribute('id')
}
//Used by the footer scroll up animation 
var urlary = [
	"",
  "https://2020.igem.org/wiki/images/8/81/T--Virginia--logo-up-frames--1.svg",
	"https://2020.igem.org/wiki/images/1/17/T--Virginia--logo-up-frames--2.svg",
	"https://2020.igem.org/wiki/images/9/95/T--Virginia--logo-up-frames--3.svg",
	"https://2020.igem.org/wiki/images/3/35/T--Virginia--logo-up-frames--4.svg",
	"https://2020.igem.org/wiki/images/b/bc/T--Virginia--logo-up-frames--5.svg",
	"https://2020.igem.org/wiki/images/9/9b/T--Virginia--logo-up-frames--6.svg",
	"https://2020.igem.org/wiki/images/6/65/T--Virginia--logo-up-frames--7.svg",
	"https://2020.igem.org/wiki/images/a/ab/T--Virginia--logo-up-frames--8.svg",
	"https://2020.igem.org/wiki/images/b/b4/T--Virginia--logo-up-frames--9.svg",
	"https://2020.igem.org/wiki/images/f/f4/T--Virginia--logo-up-frames--10.svg",
	"https://2020.igem.org/wiki/images/0/0e/T--Virginia--logo-up-frames--11.svg",
	"https://2020.igem.org/wiki/images/e/e0/T--Virginia--logo-up-frames--12.svg",
	"https://2020.igem.org/wiki/images/4/45/T--Virginia--logo-up-frames--13.svg",
	"https://2020.igem.org/wiki/images/f/fd/T--Virginia--logo-up-frames--14.svg",
	"https://2020.igem.org/wiki/images/2/2e/T--Virginia--logo-up-frames--15.svg",
	"https://2020.igem.org/wiki/images/8/8b/T--Virginia--logo-up-frames--16.svg",
	"https://2020.igem.org/wiki/images/7/7c/T--Virginia--logo-up-frames--17.svg",
	"https://2020.igem.org/wiki/images/2/27/T--Virginia--logo-up-frames--18.svg",
	"https://2020.igem.org/wiki/images/e/e2/T--Virginia--logo-up-frames--19.svg",
	"https://2020.igem.org/wiki/images/0/04/T--Virginia--logo-up-frames--20.svg",
	"https://2020.igem.org/wiki/images/d/d8/T--Virginia--logo-up-frames--21.svg",
	"https://2020.igem.org/wiki/images/e/e6/T--Virginia--logo-up-frames--22.svg"
]


//Functions to be run on page load get added to this array by other scripts
startupFunctions = [];

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

loadScrollAnimations = function(){
  
  //Grab logoring and image inside of it
  var footerIcon = document.getElementById("animationImg");
  var logoring = document.getElementById("logoring");
  //Change to frame 1 automatically
  //This way if JS is disabled the up arrow will be displayed by default
  footerIcon.src = urlary[1];
  logoring.removeAttribute("href");

  logoring.logotoup = function(){
    //store current frame count
    footerIcon.frame = 2;
    //change frame every 20 ms
    ticks1 = setInterval(function() {
      if (footerIcon.frame == 3){
        logoring.href = "#"
      }
      //stop animation after 21 frames
      if (footerIcon.frame > 21){
        clearInterval(ticks1)
      }else{
      //update frame
      footerIcon.src = urlary[footerIcon.frame];
      //change scale and translate during animation
      scale = 1.06*Math.floor(2.5 * (41 - footerIcon.frame));
      shift = Math.floor(0.5 * (1 - footerIcon.frame) - 50)
      footerIcon.style = "max-width:"+scale+"%;max-height:"+scale+"%;transform: translate(-50%,"+shift+"%);-ms-transform: translate(-50%,"+shift+"%);"
      //increase frame count
      footerIcon.frame++
      }
    }, 20);
  }

  logoring.uptologo = function(){
    //change frame every 20 ms
    ticks2 = setInterval(function() {
      //stop animation at frame 1
      if (footerIcon.frame < 1){
        clearInterval(ticks2)
        logoring.removeAttribute("href")
      }else{
      //update frame
      footerIcon.src = urlary[footerIcon.frame];
      
      //change scale and translate during animation
      scale = 1.06*Math.floor(2.5*(41-footerIcon.frame));
      shift = Math.floor(0.5 * (1 - footerIcon.frame) - 50)
      footerIcon.style = "max-width:"+scale+"%;max-height:"+scale+"%;transform: translate(-50%,"+shift+"%);-ms-transform: translate(-50%,"+shift+"%);"

      //decrease frame count
      footerIcon.frame--
      }
    }, 10);
  }
  //animate bottom icon on mouse over and mouse out
  logoring.addEventListener('mouseover', function(ev) {
    //Stop reverse animation if it's playing
    if (typeof(ticks2) !== "undefined"){clearInterval(ticks2)}
    //Start forward animation
    this.logotoup()
  });
  logoring.addEventListener('mouseout', function(ev) {
    //Stop forward animation if it's playing
    if (typeof(ticks1) !== "undefined"){clearInterval(ticks1)}
    //Start revrese animation
    this.uptologo()
  });
  //Also add click event listener to icon in header to turn it into a button
  document.getElementsByClassName('menuimg')[0].addEventListener('click',function(){
    window.location.href = "https://2020.igem.org/Team:Virginia";
  })
}
startupFunctions.push(loadScrollAnimations)

menuTextHide = function(){
  //Grab Logo Text
  logotext=document.getElementsByClassName('menulogo')[0];
  //If the browser is taller than it is wide, hide the logo text in the menu bar
  if(window.innerHeight > window.innerWidth){
    logotext.style.display = "none";
  }else{
    logotext.style.display = "flex";
  };
  //Then check every time the window is resized
  window.onresize = function(event) {
    if(window.innerHeight > window.innerWidth){
      logotext.style.display = "none";
    }else{
      logotext.style.display = "flex";
    };
  };
}
startupFunctions.push(menuTextHide);


//This is used to add the info icon to every dictionary pop-up
dictIcon = function(){
    //Use timeout to run async to prevent page from hanging while trying to load
  setTimeout(function(){
    popups = document.getElementsByClassName("dict");
    infoLinks = [];
    if(popups.length != 0){
      for(i=0; i < popups.length; i++){
      infoLinks[i] = document.createElement("a");
      infoLinks[i].innerHTML="i";
      infoLinks[i].href="#";
      infoLinks[i].classList.add("dictInfo");
      popups[i].children[0].appendChild(infoLinks[i]);
    }
    }
  },0)  
};
//startupFunctions.push(dictIcon); // Never implemented 

faviconPatch = function(){
  //See if we're on the actual igem wiki page
  if(RegExp('igem\\.org').test(window.location.href)){
    //change favicon if we are
    const favicon = document.querySelector('[rel="shortcut icon"]');
    favicon.href="https://2020.igem.org/wiki/images/1/12/T--Virginia--Virginia_ThickIconBlack.svg";
  }
};
startupFunctions.push(faviconPatch);

//define indexScroll as null to prevent errors if it is not defined in other scripts
indexScroll=function(){};
//run code when user scrolls
window.onscroll = function(){
  //store some values
  winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrolled = (winScroll / height) * 100;
  //call indexScroll
  indexScroll();
  document.getElementById("myBar").style.width = scrolled + "%";
}

//runs on page load and calls all functions in startupFunctions array
//Functions can be placed in this array by any script referenced below main.js in the html file
window.onload = function(){
  //call all functions placed in startupFunctions array
  for(i=0;i<startupFunctions.length;i++){
    startupFunctions[i]()
  }
}