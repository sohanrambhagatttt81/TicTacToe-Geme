let cells = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let newGame = document.querySelector(".new-game");
let hide = document.querySelector(".hide");
let newGameBtn = document.querySelector(".new-game-btn");  // player 1 starts with 0 
let winPatterns = [
    
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]

// some functionality after winnig

let sohan = (winner) => {
    hide.setAttribute("class", "winning-msg");
    hide.innerText = `Congratulations, The Winner is ${winner}`;
}

let disabledBoxes = () => {
     for(box of  cells){
            box.disabled = true;
           }
} 

resetBtn.addEventListener("click", () =>{
     turn0 = true;
     
     for(box of cells){
        box.style.border = "2px solid transparent";
        box.disabled = false;
        box.innerText = "";
     }
})

newGameBtn.addEventListener("click", () =>{
     turn0 = true;
     for(box of cells){
        box.style.border = "2px solid transparent";
        box.disabled = false;
        box.innerText = "";
     }
     newGameBtn.style.display = "none";
     hide.setAttribute("class", "hide");
     for(box of cells){
        box.disabled = false;
        box.innerText = "";
     }
})


// click event on each cell

let turn0 = true;

cells.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(box.innerText === ""){
            if(turn0){
                box.innerText = "0";
                turn0 = false;
            }
            else{
                box.innerText = "x";
                turn0 = true;
            }
        }
        else{
            box.style.border = "2px solid red"; 
            box.disabled = true;
        }

        checkPatterns();

    })
})

  checkPatterns  = () => {
    for( let patterns of winPatterns){
      let pos1vl =   cells[patterns[0]].innerText
      let pos2vl =   cells[patterns[1]].innerText
      let pos3vl =   cells[patterns[2]].innerText
    
      if(pos1vl != "" && pos2vl != "" && pos3vl != ""){
        if( pos1vl === pos2vl && pos2vl === pos3vl){
            console.log("winner",pos1vl);
            sohan(pos1vl);
            disabledBoxes();
            newGameBtn.style.display = "block";
            
    
        }
     }
}
}






