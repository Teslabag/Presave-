var sections;
var currentSection;
var sectionList = [];

//Pretend Scscroll top is bottom of header instead of top of page
adjustedScroll = function(){
  vh = document.documentElement.clientHeight / 100;
  vw = document.documentElement.clientWidth / 100;
  return window.scrollY + 1.495*vw + 4.6*vh + 16;
}

//Add the activeTOC class to the apropriate class on page load
primeIndexList = function(){
  for(i=sections.length-1;i>=0;i--){ 
    //see if the current scroll height is above the top of that section title   
    if (adjustedScroll() > (sections[i].offsetTop)) {
      //if it is, store the value of the section and stop iterating
      currentSection=i;
      sectionList[currentSection].classList.add('activeTOC');
      break
    }
  }
  if(currentSection==undefined && adjustedScroll() < (sections[0].offsetTop)){
    currentSection=0;
    sectionList[currentSection].classList.add('activeTOC');
  }
}

populateIndex = function(){
  //run async to fix loading time issues
   setTimeout(function(){
    sections=document.getElementsByClassName('sectionTitle')
    toc=document.getElementsByClassName('TOC')[0];
    for(i=0;i<sections.length;i++){
      sectionList[i]=document.createElement("div");
      sectionList[i].innerHTML=sections[i].innerHTML;
      sectionList[i].index=i;
      sectionList[i].addEventListener("click", function(){
        indexElem = sections[this.index];
        //Make new invisible element shifted one header width above the section title
        //Shifting is done with css in genpage.css
        before = document.createElement("div");
        before.classList.add("sectionTitleShift");
        indexElem.insertBefore(before,indexElem.childNodes[0]);
        before.scrollIntoView({behavior:'smooth'});
        indexElem.removeChild(before);
      });
      sectionList[i].classList.add("TOCElement");
      toc.appendChild(sectionList[i]);
    }
    primeIndexList();
  },0) 
}

//called by an onScroll event listener in main.js
indexScroll = function(){
  //store old section
  oldSection=currentSection;
  //Iterate backwards through each section title
  for(i=sections.length-1;i>=0;i--){ 
    //see if the current scroll height is above the top of that section title   
    if (adjustedScroll() > (sections[i].offsetTop)) {
        //if it is, store the value of the section and stop iterating
        currentSection=i;
        break
    }
  }
  //See if the section has changed, and if it has update the index list dom elements
  if(oldSection!=currentSection){
    sectionList[oldSection].classList.remove('activeTOC');
    sectionList[currentSection].classList.add('activeTOC');
  }
}

//Call function(s) on pageload
startupFunctions.push(populateIndex);