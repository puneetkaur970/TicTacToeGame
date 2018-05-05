// FUNTIONALITY OF THE RESTART button

//grab the button
var restart= document.querySelector("#b");

//grab all the table cells
var cells= document.querySelectorAll("td");

//set all the table content blank
function setBlank(){
  for(var i=0; i<cells.length; i++){
    cells[i].textContent="";
  }
}

//add event listener to the button

restart.addEventListener("click",setBlank);

function checkRow(){
  for(var i=0;i<7;i+=3){
    if(cells[i].textContent==cells[i+1].textContent && cells[i+1].textContent==cells[i+2].textContent ){
      if(cells[i].textContent!=""){
        return true;
      }
    }
  }
  return false;
}

function checkColumn(){
  for(var i=0;i<3;i++){
    if(cells[i].textContent==cells[i+3].textContent && cells[i+3].textContent==cells[i+6].textContent ){
      if(cells[i].textContent!=""){
        return true;
      }
    }
  }
  return false;
}

function checkDiagonal(){
  if(cells[0].textContent==cells[4].textContent && cells[4].textContent==cells[8].textContent ){
    if(cells[0].textContent!=""){
      return true;
    }
  }
   else if(cells[2].textContent==cells[4].textContent && cells[4].textContent==cells[6].textContent ){
    if(cells[2].textContent!=""){
      return true;
    }
  }
  return false;
}

//Checking the status of the game
function checkStatus(){
  var status=checkRow();
  console.log(status);
  if(status==false) status = checkColumn();
  if(status==false) status = checkDiagonal();

  if (status==true)
    document.getElementById("status").textContent="You win!!";
  else
    document.getElementById("status").textContent="Keep Trying!!";
}

// Change Marker in the cell function

function changeMarker(){
  if(this.textContent===""){
    this.textContent='X';
  }
  else if(this.textContent==='X'){
    this.textContent='O';
  }
  else {
    this.textContent="";
  }
}

//Add the change Marker as the event listener for the click addEventListener

for(var i=0; i<cells.length;i++){
  cells[i].addEventListener("click",changeMarker);
  cells[i].addEventListener("click",checkStatus);
}
