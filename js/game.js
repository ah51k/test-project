

let turnSignal = document.getElementById("turnSignal");
let squers = document.querySelectorAll(".squer");
let turns = document.getElementById("turn");

let squer = [];

function end(num1){
    turnSignal.style.width = "250px"
    turnSignal.innerHTML = `the winer is [${num1}]`
    document.querySelector(".waiting").style = `
    display : block
    `
    setInterval(function(){location.reload()},3000)
    setInterval(function(){
        document.querySelector(".waiting").style = `
        display : none
        `;
    },3100)
}

function winer(){
    for( let i = 1 ; i < 10 ; i++ ){
        squer[i] = document.getElementById("item"+ i).innerHTML;
    }
    if (squer[1] == squer[2] && squer[2] == squer[3] && squer[1] != "" && squer[3] != ""){
        end(squer[1])
    }else if (squer[4] == squer[5] && squer[5] == squer[6] && squer[4] != "" && squer[6] != ""){
        end(squer[4])
    }else if (squer[7] == squer[8] && squer[8] == squer[9] && squer[7] != "" && squer[9] != ""){
        end(squer[7])
    }else if (squer[1] == squer[5] && squer[5] == squer[9] && squer[1] != "" && squer[9] != ""){
        end(squer[1])
    }else if (squer[3] == squer[5] && squer[5] == squer[7] && squer[1] != "" && squer[7] != ""){
        end(squer[3])
    }else if (squer[3] == squer[6] && squer[6] == squer[9] && squer[3] != "" && squer[9] != ""){
        end(squer[3])
    }else if (squer[2] == squer[5] && squer[5] == squer[8] && squer[2] != "" && squer[8] != ""){
        end(squer[2])
    }else if (squer[1] == squer[4] && squer[4] == squer[7] && squer[1] != "" && squer[7] != ""){
        end(squer[1])
    }
    
}


// start game
let turn = "o";
function addSign(num){
    let sq = document.getElementById(num);

    if( turn == "o" && sq.innerHTML === "" ){
        sq.innerHTML = "O";
        turn = "x";
        turns.style = ` left : 4px`;
    }else if( turn == "x" && sq.innerHTML === "" ) {
        sq.innerHTML = "X";
        turn = "o";
        turns.style = ` right : 4px`;
    }
        
    winer()
}

// win