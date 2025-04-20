console.log("Welcome to Tic Tac Toe")
    
let turn="X"

//function to change the turn
const changeTurn=()=>{
    return turn=="X"?"0":"X"
}

//function to check for win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,4,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===box[e[1]].innerText)&&(boxtext[e[0]].innerText !==""))
            {
            document.querySelector('.info').innerText= boxtext[e[0]].innerText + "Won"
        }
    })

}

//game logic
let boxes=document.getElemnentByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext= document.querySelector('.boxtext');
    boxtext.addEventListener('click',()=>{
      if(boxtext.inner===''){
        changeTurn();
        
        checkWin();
        document.getElementsByClassName("info")[0].ineerText="Turn for" + turn;
        }
    })
})
