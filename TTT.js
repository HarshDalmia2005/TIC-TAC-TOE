let boxes=document.querySelectorAll(".box");
let new_game=document.querySelector(".resbtn");
let msg=document.querySelector(".msg");

let turnO=true;
let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const disable=()=>{
    msg.classList.remove("hide");
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};

const enable=()=>{
    msg.classList.add("hide");
    boxes.forEach((box)=>{
        box.disabled=false;
    });
};

const checkwinner=()=>{
    for(let pattern of winpattern){
       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;

       if(pos1val!="" && pos2val!="" && pos3val!="" && pos1val==pos2val && pos2val==pos3val)
        {
            disable();
            msg.innerText=`Congratulations!! ${pos1val} Wins`;
            
        }
    }
};

const checkTie=()=>{
    let f=0;
    for(let p of winpattern){
       let pos1val=boxes[p[0]].innerText;
       let pos2val=boxes[p[1]].innerText;
       let pos3val=boxes[p[2]].innerText;
        if(pos1val=="" || pos2val=="" || pos3val=="")f=1;
    }

    if(f==0 && msg.innerText=="Winner: ?"){
        disable();
        msg.innerText="IT's a Tie !!";
        console.log(msg.innerText);
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
        box.innerHTML="O";
        turnO=false;
       }
       else{
        box.innerHTML="X";
        turnO=true;
       }
       box.disabled=true;
       checkwinner();
       checkTie();
    });
});

new_game.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
        msg.innerText="Winner: ?"
        enable();
    });
});