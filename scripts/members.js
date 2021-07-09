memebersEvents = function(){
  console.log("")
}

showPerson = function(person){
  ppl = document.getElementById(person);
  ppl.style.visibility = "visible";
  darken()
};

darken = function(){
  screen = document.getElementsByClassName('blackOut')[0];
  screen.style.visibility = "visible";
}

lighten = function(){
  screen = document.getElementsByClassName('blackOut')[0];
  screen.style.visibility = "hidden";
}

startupFunctions.push(memebersEvents)