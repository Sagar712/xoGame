if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(
        registration => {
            console.log("SW registered");
            console.log(registration);
        }
    ).catch(error => {
        console.log("SW failed");
    })
}



let allcells = [];
allcells.push(document.getElementById("b1"));
allcells.push(document.getElementById("b2"));
allcells.push(document.getElementById("b3"));
allcells.push(document.getElementById("b4"));
allcells.push(document.getElementById("b5"));
allcells.push(document.getElementById("b6"));
allcells.push(document.getElementById("b7"));
allcells.push(document.getElementById("b8"));
allcells.push(document.getElementById("b9"));

let oddeven = 1;

let xokeep=[];
function boxcall(id){
    let random = Math.floor(Math.random() * (9));
    
    
    if(oddeven%2!=0){
        
        let temp = allcells[id];
        temp.innerText="x";
        oddeven++;
        xokeep[id]="x";
    }
    else{

        let temp = allcells[id];
        temp.innerText="o";

        oddeven++;
        xokeep[id]="o";
    }
    checkcondition("x");
      
    checkcondition("o");
    if(oddeven==10){
        document.getElementById("winnis").innerHTML="";
        showscore("Drawn!");
    }
    console.log(xokeep);
        
}

function checkcondition(namw){
    let varr = namw;
    if(xokeep[0]===namw && xokeep[1]===namw && xokeep[2]===namw){
        console.log(varr+" wins");
        showscore(varr);
    }
    else if(xokeep[0]===namw && xokeep[3]===namw && xokeep[6]===namw){
        console.log(varr+" wins");
        showscore(varr);
    }
    else if(xokeep[2]===namw && xokeep[5]===namw && xokeep[8]===namw){
        console.log(varr+" wins");
        showscore(varr);
    }
    else if(xokeep[6]===namw && xokeep[7]===namw && xokeep[8]===namw){
        console.log(varr+" wins");
        showscore(varr);
    }
    else if(xokeep[0]===namw && xokeep[4]===namw && xokeep[8]===namw){
        console.log(varr+" wins");
        showscore(varr);
    }
    else if(xokeep[2]===namw && xokeep[4]===namw && xokeep[6]===namw){
        console.log(varr+" wins");
        showscore(varr);
    }
    else if(xokeep[1]===namw && xokeep[4]===namw && xokeep[7]===namw){
        console.log(varr+" wins");
        showscore(varr);
    }
    else if(xokeep[3]===namw && xokeep[4]===namw && xokeep[5]===namw){
        console.log(varr+" wins");
        showscore(varr);
    }
    else if(oddeven==10){
        document.getElementById("winnis").innerHTML="";
        showscore("Drawn!");
    }
    else{
        console.log("Computing...");
        return;
    }
    
}

function showscore(winn){
    let popup = document.querySelector(".winnerwindow");
    let overlay = document.querySelector(".overlay");
    document.getElementById("winnname").innerHTML=winn;
    popup.classList.toggle("active");
    overlay.classList.toggle("active");
}

function resetall(){
    location.reload();
}