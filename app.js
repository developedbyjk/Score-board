let homeTeamScore = 0;
let guesTeamScore = 0;

let htBtn = document.getElementById("ht");
htBtn.textContent = homeTeamScore;
let gsBtn = document.getElementById("gs");
gsBtn.textContent = guesTeamScore;


function add1(){
    homeTeamScore += 1;
    htBtn.textContent = homeTeamScore;
}

function add2(){
    homeTeamScore += 2;
    htBtn.textContent = homeTeamScore;
}

function add3(){
    homeTeamScore += 3;
    htBtn.textContent = homeTeamScore;
}


function gsadd1(){
    guesTeamScore += 1;
    gsBtn.textContent = guesTeamScore;
}

function gsadd2(){
    guesTeamScore += 2;
    gsBtn.textContent = guesTeamScore;
}

function gsadd3(){
    guesTeamScore += 3;
   gsBtn.textContent = guesTeamScore;
}


function reset(){
    homeTeamScore = 0;
    guesTeamScore = 0;
    htBtn.textContent = homeTeamScore;
    gsBtn.textContent = guesTeamScore;

}
