let board=Array(9).fill("");
let turn="X";
const container=document.getElementById("gameContainer");
const text=document.getElementById("turnText");
container.style.gridTemplateColumns="repeat(3,100px)";
container.style.gridTemplateRows="repeat(3,100px)";
const winLine=document.createElement("div");
winLine.className="win-line";
container.appendChild(winLine);

for(let i=0;i<9;i++){
  const cell=document.createElement("div");
  cell.className="cell";
  cell.addEventListener("click",()=>makeMove(i,cell));
  container.appendChild(cell);
}

function makeMove(i,cell){
  if(board[i]){flash(cell); return;}
  board[i]=turn;
  cell.innerText=turn;
  if(checkWin(board)){
    drawWinLine(board);
    setTimeout(()=>alert(turn+" wins!"),100);
  } else {
    turn=turn==="X"?"O":"X";
    text.innerText=turn+"'s Turn";
  }
}

function flash(cell){
  cell.classList.add("invalid");
  setTimeout(()=>cell.classList.remove("invalid"),300);
}

function checkWin(b){
  const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  return wins.some(line=>line.every(idx=>b[idx]===b[line[0]] && b[idx]));
}

function drawWinLine(b){
  const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for(let line of wins){
    if(line.every(idx=>b[idx]===b[line[0]] && b[idx])){
      const size=cellSize();
      let top=0,left=0,width=size*3,angle=0;
      if(line[0]===0 && line[1]===1){top=0;left=0;angle=0;}
      else if(line[0]===3){top=size;left=0;angle=0;}
      else if(line[0]===6){top=size*2;left=0;angle=0;}
      else if(line[0]===0 && line[1]===3){top=0;left=0;angle=90;width=size*3;}
      else if(line[0]===1){top=0;left=size;angle=90;width=size*3;}
      else if(line[0]===2){top=0;left=size*2;angle=90;width=size*3;}
      else if(line[0]===0 && line[1]===4){angle=45;}
      else if(line[0]===2 && line[1]===4){angle=-45;}
      winLine.style.top=top+"px";
      winLine.style.left=left+"px";
      winLine.style.width="0px";
      winLine.style.transform=`rotate(${angle}deg)`;
      setTimeout(()=>winLine.style.width=width+"px",50);
    }
  }
}

function cellSize(){
  return container.children[0].offsetWidth+5;
}
