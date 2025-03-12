let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#rs");
let newgame=document.querySelector("#ng");
let msgcontainer=document.querySelector(".msg");
let msg=document.querySelector("#m");
let turn0=true;

const winPt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button clicked");
        box.innerText="Abcd";
        if(turn0)
            {
                box.innerText="O";
                turn0=false;
            }
            else{
                box.innerText="X";
                turn0=true;
            }
            box.disabled=true;

            check();
    });
});

const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

const enableboxes=()=>
    {
        for( let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    };

const disableboxes=()=>
    {
        for( let box of boxes)
        {
            box.disabled=true;
        }
    };

const showwinner=(winner)=>
    {
        msg.innerText=`congretulation, winner is  ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
const check=()=>
    {
        for(pattern of winPt)
            {
                let pos1=boxes[pattern[0]].innerText;
                let pos2=boxes[pattern[1]].innerText;
                let pos3=boxes[pattern[2]].innerText;
                if(pos1!=""&&pos2!=""&&pos3!=""){
                    if(pos1===pos2&&pos2===pos3)
                    {
                        console.log("winner",pos1);
                        showwinner(pos1);
                    }
                }
                
            }
    };

    newgame.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame);