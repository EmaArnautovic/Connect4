player1 = true;
matrix = []


var botX;
var botY;



  
var gameStart = false;
var first = true;
var end = false;
var oneplayer = false;
var twoPlayers = false;
var submit=false;


for(var i=0; i<=6; i++) {
  matrix[i] = [];
  for(var j=0; j<=7; j++) {
      matrix[i][j]=0;
  }
}


function getPlayerName() {
   player1name=document.getElementById("first").value;
   if(player1name=='') {
    player1name="Rick";
   }
   player2name=document.getElementById("second").value;
   if(player2name=='') {
    player2name="Morty";
   }
   document.getElementById("ni").style.visibility = "hidden";
   submit=true;
}	

function singlePlayer(singlePlayer) {
  first = true;
  player1 = true;
  oneplayer = true;
  document.getElementById("ni").style.visibility = "visible";
  document.getElementById("player1").innerHTML="Enter Your Name: ";
  document.getElementById("player2").style.visibility="hidden";
  document.getElementById("second").style.visibility="hidden";
  document.getElementById("submit").style.visibility = "hidden";
}

function multiplayer(multiplayer) {
  twoPlayers = true;
  document.getElementById("ni").style.visibility = "visible";
  document.getElementById("submit_singleplayer").style.visibility = "hidden";
  document.getElementById("submit_singleplayer").style.width="0px";
  document.getElementById("submit_singleplayer").style.height="0px";
  document.getElementById("submit_singleplayer").style.margin="0px";
  document.getElementById("submit_singleplayer").style.padding="0px";
}

function startGame(startGame) {
  gameStart = true;

  
}

function remi() {

  var count=0;

    for(var j=0;j<7;j++) {
        if(matrix[0][j]!=0)
          count++;
    }

  if(count==7)
      return true;

}

function getRandomNumber(low, high) {
  var r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}

function restartGame(restartGame) {

  if (end == true || remi()==true) {

  for(var i=0; i<=6; i++) {
    matrix[i] = [];
    for(var j=0; j<=7; j++) {
      matrix[i][j] = 0;
    }
  }

  for(var  i=0; i<=5; i++) {
    for(var j=0; j<=6; j++) {
      document.getElementById("d" + i + j).style.backgroundColor="white";
  }
  
  gameStart=false;
}

document.getElementById('tekst').innerHTML="";

if (first==true) {
  player1=false
  first = false;
}else {
  player1=true
  first = true;
}
gameStart = true;
end = false;
oneplayer = false;
twoPlayers = false;
takenSpaces = 0;
}}

function canPlay(x,y) {

if (matrix[x][y]==0 && (matrix[x+1][y]!=0 || x == 5)) {
    return true;
  }

}

function isWinner(x,y) {

////vertical
if(x<3) {
if (matrix[x][y]==1) {
    if (matrix[x+1][y]==1) {
      if (matrix[x+2][y]==1) {
        if (matrix[x+3][y]==1) {
            return 1;  }   }  }}

if (matrix[x][y]==2) {
    if (matrix[x+1][y]==2) {
      if (matrix[x+2][y]==2) {
          if (matrix[x+3][y]==2) {
              return 2;   }   }   }}
}

////horizontal
  if (matrix[x][y]==1) {
      if (matrix[x][y+1]==1) {
        if (matrix[x][y+2]==1) {
          if (matrix[x][y+3]==1) {

                return 1;
            } else if (matrix[x][y-1]==1) {
                return 1;}
        }else if (matrix[x][y-2]==1 && matrix[x][y-1]==1) {
              return 1;}
      }else if (matrix[x][y-3]==1 && matrix[x][y-2]==1 && matrix[x][y-1]==1) {
          return 1;}}

        if (matrix[x][y]==2) {
          if (matrix[x][y+1]==2) {
            if (matrix[x][y+2]==2) {
              if (matrix[x][y+3]==2) {

                    return 2;
                } else if (matrix[x][y-1]==2) {
                    return 2;}
            }else if (matrix[x][y-2]==2 && matrix[x][y-1]==2) {
                  return 2;}
          }else if (matrix[x][y-3]==2 && matrix[x][y-2]==2 && matrix[x][y-1]==2) {
              return 2;}}


////diagonal
if(x<3) {
if (matrix[x][y]==1) {
  if (matrix[x-1][y+1]==1) {
    if (matrix[x-2][y+2]==1) {
      if (matrix[x-3][y+3]==1) {

            return 1;
        } else if (matrix[x+1][y-1]==1) {
            return 1;}
    }else if (matrix[x+2][y-2]==1 && matrix[x+1][y-1]==1) {
          return 1;}
  }else if (matrix[x+3][y-3]==1 && matrix[x+2][y-2]==1 && matrix[x+1][y-1]==1) {
        return 1;}}


      if (matrix[x][y]==2) {
        if (matrix[x-1][y+1]==2) {
          if (matrix[x-2][y+2]==2) {
            if (matrix[x-3][y+3]==2) {

                  return 2;
              } else if (matrix[x+1][y-1]==2) {
                  return 2;}
          }else if (matrix[x+2][y-2]==2 && matrix[x+1][y-1]==2) {
                return 2;}
        }else if (matrix[x+3][y-3]==2 && matrix[x+2][y-2]==2 && matrix[x+1][y-1]==2) {
            return 2;}}
}

if(x<3) {
  if (matrix[x][y]==1) {
    if (matrix[x-1][y-1]==1) {
      if (matrix[x-2][y-2]==1) {
        if (matrix[x-3][y-3]==1) {

            return 1;
      } else if (matrix[x+1][y+1]==1) {
          return 1;}
  }else if (matrix[x+2][y+2]==1 && matrix[x+1][y+1]==1) {
        return 1;}
}else if (matrix[x+3][y+3]==1 && matrix[x+2][y+2]==1 && matrix[x+1][y+1]==1) {
    return 1;}}


      if (matrix[x][y]==2) {
        if (matrix[x-1][y-1]==2) {
          if (matrix[x-2][y-2]==2) {
            if (matrix[x-3][y-3]==2) {

                return 2;
          } else if (matrix[x+1][y+1]==2) {
              return 2;}
      }else if (matrix[x+2][y+2]==2 && matrix[x+1][y+1]==2) {
          return 2;}
    }else if (matrix[x+3][y+3]==2 && matrix[x+2][y+2]==2 && matrix[x+1][y+1]==2) {
      return 2;}}
}

return 0;
}

function playerCanWinColumns(x,y) {
  
  if (matrix[x + 1][y] == 1 && matrix[x + 2][y] == 1) {
    botX=x-1;
    botY=y;
    return 1;
   }
   return 0;
}

function playerCanWinRows(x,y){
  
  var count=0;
  var start=0;
  var spot=0;
  
  start=y-3;

  if(start<0)
    start=0;

    
    for(var i=start;i<start+4;i++) {
          if(matrix[x][i]==0) 
            spot=i;
          if(matrix[x][i]==1)
            count++;
          if(matrix[x][i]==2)
            start++;
   }
   
   
   if(count==3 && canPlay(x,spot)==true) {
     botX=x;
     botY=spot;
     return 1;
   } 
return 0;
}

function playerCanWinMainDiagonal(x,y){


  if (matrix[x+1][y+1]==1) {
    if (matrix[x+2][y+2]==1) { 
       if(canPlay(x+1,y-1)==true) { 
        botX=x-1;
        botY=y-1;
        return 1;
        }
      }
    }  

return 0;
}

function playerCanWinSideDiagonal(x,y) {
  
  
  if (matrix[x-1][y+1]==1) {
    if (matrix[x-2][y+2]==1) {
      if(canPlay(x+1,y-1)==true) { 
        botX=x+1;
        botY=y-1;
      return 1;
    }
  }
  }   
    return 0;
}


function playerCanWin(x, y) {

//// COLUMNS

if(playerCanWinColumns(x,y)==1)
  return 1;
  
//// ROWS

else if(playerCanWinRows(x,y)==1)
  return 1;

//// DIAGONAL 

else if(playerCanWinMainDiagonal(x,y)==1)
  return 1;

//// SIDE DIAGONAL 

if(playerCanWinSideDiagonal(x,y)==1)
  return 1;

return 0;
}

function botPlay(x,y) {
  

if(playerCanWin(x,y)==0)  {
  
  do {
    botX = getRandomNumber(0,5);
    botY = getRandomNumber(0,6);
  } while (canPlay(botX,botY)!=true);
}


botchip = document.getElementById("d" + botX + botY);

botchip.style.backgroundColor = "rgb(124,252,0)";
matrix[botX][botY] = 2;

if (isWinner(botX,botY)==2) {
  document.getElementById('tekst').innerHTML='Bot won'
  gameStart = false;
  end = true;
  }

}

function colorField(x,y) {


if(canPlay(x,y)==true && gameStart==true && twoPlayers==true && submit==true) {

    chip = document.getElementById("d" + x + y);

  if (player1 == true) {
    document.getElementById('tekst').innerHTML=player2name+"'s Turn"
    chip.style.backgroundColor = "rgb(105,105,105)";
    matrix[x][y] = 1;
  }

  else if (player1 == false){
    document.getElementById('tekst').innerHTML=player1name+"'s Turn"
    chip.style.backgroundColor = "rgb(124,252,0)";
    matrix[x][y] = 2;
  }

  player1 =! player1

  if (remi()==true) {
    document.getElementById('tekst').innerHTML='Remi'
  }

  if(isWinner(x,y)==1){
    document.getElementById('tekst').innerHTML=player1name+" won!"
    gameStart = false;
    end = true;
  } else if (isWinner(x,y)==2) {
    document.getElementById('tekst').innerHTML=player2name+" won !"
    gameStart=false;
    end = true;}

    }

else if (canPlay(x,y)==true && gameStart==true && oneplayer==true && submit==true) {

  chip = document.getElementById("d" + x + y);

  if (player1 == true) {
    chip.style.backgroundColor = "rgb(105,105,105)";
    matrix[x][y] = 1;
  }


if (remi()==true) {
  document.getElementById('tekst').innerHTML='Remi'
}



if(isWinner(x,y)==1) {
    document.getElementById('tekst').innerHTML=player1name+" won!"
    gameStart = false;
    end = true;
}

else
  botPlay(x,y);

  }

}