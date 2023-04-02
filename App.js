const cell1=document.querySelector("#cell1")
const cell2=document.querySelector("#cell2")
const cell3=document.querySelector("#cell3")
const cell4=document.querySelector("#cell4")
const cell5=document.querySelector("#cell5")
const cell6=document.querySelector("#cell6")
const cell7=document.querySelector("#cell7")
const cell8=document.querySelector("#cell8")
const cell9=document.querySelector("#cell9")
const player=document.querySelector('#player')
let counter=1;

function handleClick(e){
    console.log(counter)
    if(e.target.innerHTML!==""){
        alert("This cell is taken!!! TRY ANOTHER")
    }
    
    else if(counter % 2===0){
        e.target.innerHTML="O"
        player.innerHTML="Player 1 turn"
        
        
        if(checkWin()) {
            alert("Player 2 won")
            cell1.innerHTML=""
            cell2.innerHTML=""
            cell3.innerHTML=""
            cell4.innerHTML=""
            cell5.innerHTML=""
            cell6.innerHTML=""
            cell7.innerHTML=""
            cell8.innerHTML=""
            cell9.innerHTML=""
            counter=1;
        }
        else counter=counter+1

    }
    else{
         e.target.innerHTML="X"
         player.innerHTML="Player 2 turn"
         if(checkWin()){ 
            alert("Player 1 won")
            cell1.innerHTML=""
            cell2.innerHTML=""
            cell3.innerHTML=""
            cell4.innerHTML=""
            cell5.innerHTML=""
            cell6.innerHTML=""
            cell7.innerHTML=""
            cell8.innerHTML=""
            cell9.innerHTML=""
            counter=1;
        }
         else counter=counter+1
        }
    if(counter==10 && !checkWin()) {
        alert("GAME DRAW!!! Reload")
        cell1.innerHTML=""
            cell2.innerHTML=""
            cell3.innerHTML=""
            cell4.innerHTML=""
            cell5.innerHTML=""
            cell6.innerHTML=""
            cell7.innerHTML=""
            cell8.innerHTML=""
            cell9.innerHTML=""
            player.innerHTML="Player 1 turn"
            counter=1;
    }

}
function checkWin(){
    
      if(cell1.innerHTML=="X" && cell2.innerHTML=="X" && cell3.innerHTML=="X") return true
      else if(cell6.innerHTML=="X" && cell4.innerHTML=="X" && cell5.innerHTML=="X") return true
      else if(cell7.innerHTML=="X" && cell8.innerHTML=="X" && cell9.innerHTML=="X") return true
      else if(cell1.innerHTML=="X" && cell5.innerHTML=="X" && cell9.innerHTML=="X") return true
      else if(cell1.innerHTML=="X" && cell4.innerHTML=="X" && cell7.innerHTML=="X") return true
      else if(cell2.innerHTML=="X" && cell5.innerHTML=="X" && cell8.innerHTML=="X") return true
      else if(cell3.innerHTML=="X" && cell6.innerHTML=="X" && cell9.innerHTML=="X") return true
      else if(cell3.innerHTML=="X" && cell5.innerHTML=="X" && cell7.innerHTML=="X") return true

      else if(cell1.innerHTML=="O" && cell2.innerHTML=="O" && cell3.innerHTML=="O") return true
      else if(cell6.innerHTML=="O" && cell4.innerHTML=="O" && cell5.innerHTML=="O") return true
      else if(cell7.innerHTML=="O" && cell8.innerHTML=="O" && cell9.innerHTML=="O") return true
      else if(cell1.innerHTML=="O" && cell5.innerHTML=="O" && cell9.innerHTML=="O") return true
      else if(cell1.innerHTML=="O" && cell4.innerHTML=="O" && cell7.innerHTML=="O") return true
      else if(cell2.innerHTML=="O" && cell5.innerHTML=="O" && cell8.innerHTML=="O") return true
      else if(cell3.innerHTML=="O" && cell6.innerHTML=="O" && cell9.innerHTML=="O") return true
      else if(cell3.innerHTML=="O" && cell5.innerHTML=="O" && cell7.innerHTML=="O") return true

      else return false  
    

}
cell1.addEventListener("click",(e)=>handleClick(e))
cell2.addEventListener("click",(e)=>handleClick(e))
cell3.addEventListener("click",(e)=>handleClick(e))
cell4.addEventListener("click",(e)=>handleClick(e))
cell5.addEventListener("click",(e)=>handleClick(e))
cell6.addEventListener("click",(e)=>handleClick(e))
cell7.addEventListener("click",(e)=>handleClick(e))
cell8.addEventListener("click",(e)=>handleClick(e))
cell9.addEventListener("click",(e)=>handleClick(e))
