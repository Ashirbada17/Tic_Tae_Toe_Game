let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset")
let new_game_button=document.querySelector("#new_game_button")
let msg_winner=document.querySelector(".msg_winner")
let msg=document.querySelector("p")
let turnO = true;//playerX,playerO

const winptrn=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg_winner.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO) {
            box.innerText="O";//playero
            turnO=false;
            
        }else{
            box.innerText="X";//playerx
            turnO=true;
        }
        box.disabled=true;
        checkwin();
    });
});
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText=""
    }
}
const show_winner = (winner)=>{
    msg.innerText=`Congratulation , Winner is ${winner}`
    msg_winner.classList.remove("hide");
    disableBoxes();

}
const checkwin=()=>{
    for(let pattern of winptrn){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,//pos1
        //            boxes[pattern[1]].innerText,//pos2
        //            boxes[pattern[2]].innerText);//pos3
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        if (pos1 !=""&&pos2!=""&&pos3!="") {
            if(pos1==pos2&&pos2==pos3){
                // console.log("winner");
                console.log("WINNER",pos1);
                show_winner(pos1);
            }
            
        }
        
    }
    
}
new_game_button.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)

