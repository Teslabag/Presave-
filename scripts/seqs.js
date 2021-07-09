var currentSeq;

function disableScroll() { 
  html=document.getElementsByTagName('html')[0];
  body=document.getElementsByTagName('body')[0];
  html.style.height = "200%";
  body.style.overflow = "hidden";
  body.style.height = "200%";  
  html.style.padding = "0px 10px 0px 0px"
} 
  
function enableScroll() { 
  html=document.getElementsByTagName('html')[0];
  body=document.getElementsByTagName('body')[0];
  html.style.height = "auto";
  body.style.overflow = "auto";
  body.style.height = "auto";
  html.style.padding = "0px"
}

fixSeqScroll = function(){
  //Remove Event Listener
  holder.removeEventListener("mouseover",fixSeqScroll);
  //Grab the plasmid viewer
  plasmidViewer = document.getElementsByClassName('la-vz-viewer-event-router')[0];
  //Disable page scroll on mouse over
  plasmidViewer.addEventListener("mouseover",disableScroll)
  //Re-Enable scroll when mouse leaves 
  plasmidViewer.addEventListener("mouseout",enableScroll)
}

//Takes a sequence object and exports it as a .gb file
downloadSeq = function(seq){
  var blob = new Blob([seq.data],{ type: "text/plain;charset=utf-8" });
  saveAs(blob, seq.name+".gb");
}

//seqType takes values "linear", "circular", "both", or "both_flip"
seqChange = function(seq){
  currentSeq = seq;
  document.getElementById("seqTitle").innerHTML = seq.name;
  seqViewer = document.getElementById('seqVizViewer');
  options =  {
    file: seq.data,
    style: {width: "100%", height: "100%"},
    copyEvent: (event => event.key === "c" && (event.metaKey || event.ctrlKey)),
    viewer: seq.seqType,
    showComplement: seq.comp
  }
  var viewer = seqviz.Viewer(seqViewer, options);
  viewer.render();
}

loadSeqViz = function(){
  pageSeq = window.location.search.split("?").pop();
  if (pageSeq in sequences){
    //Load sequence from queryString
    seqChange(sequences[pageSeq])
    //Prevent scrolling while mouse is over plasmid
    if(!mobileCheck()){
      holder = document.getElementById("seqVizViewer");
      holder.addEventListener("mouseover",fixSeqScroll);
    }
  }else{
    //Show error text
    errorText = document.getElementsByClassName('invalid')[0];
    console.log(errorText)
    errorText.style.visibility = "visible";
  }
}

mainCall = function(){
  //Add click event listener to download button
  document.getElementsByClassName('download')[0].addEventListener("click",function(){
    downloadSeq(currentSeq);
  })
  //Populate Sequence Table from sequeneces in sequences object
  table = document.getElementById("seqTable");
  Object.keys(sequences).forEach(function(key){
    seq = sequences[key];
    row = table.insertRow(-1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell1.innerHTML = seq.name;
    cell2.seqData = seq; //Pass seq info to cell element so link can see it
    cell2.innerHTML = "<a onClick='window.location.search=this.parentElement.seqData.varName'>View</a>"
    cell3.seqData = seq; //Pass seq info to cell element so link can see it
    cell3.innerHTML = "<a onClick='downloadSeq(this.parentElement.seqData)'>Download</a>"
  })
}
startupFunctions.push(mainCall)

//Make first function to run on page load
startupFunctions.unshift(loadSeqViz)