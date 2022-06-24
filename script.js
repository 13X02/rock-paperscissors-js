let ps = 0;
let count =0;
let cs = 0;
const options = ["rock","paper","scissor"];
    function play(computer,player) {
        if(count==5){
            ps=0;
            cs=0;
            if(ps<cs){
                showResult("You lost the fight ");
            }else{
                showResult("You defeated the computer");
            }
        }
        count++;
        console.log(computer);
        console.log(player);
        if (computer==player) {
            showResult("Its a Tie");
            return;
        }else if(computer==="rock"){
            if (player==="paper") {
                showResult("You won");
                ps++;
            }else{
                showResult("Computer won");
                cs++;
            }
        }else if(computer==="paper"){
            if (player==="scissor") {
                showResult("You won");
                ps++
            }else{
                showResult("Computer won");
                cs++;
            }
        }else if(computer==="scissor"){
            if (player==="rock") {
                showResult("You won");
                ps++;
            }else{
                showResult("Computer won");
                cs++;
            }
        }
    }
    function computerPlays() {
    return options[Math.floor(Math.random()*4)];
    }
    function game(){
        for (let i = 0; i < 5; i++) {
            let player=prompt("rock , paper or scissors ?").toLowerCase();
            let computer = computerPlays();
            play(computer,player);
            
        }
    }
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click',function (e) {
    console.log(e.target.className);
    if(e.target.className!="rock"||e.target.className!="paper"||e.target.className||"scissor"){
        const player = e.target.className;
        let computer=computerPlays();
        play(computer,player);
    } else return;
    
});
function showResult(a){
    const result = document.querySelector('#result');
    const score = document.querySelector('.score');
    result.textContent = a;
    score.textContent=ps + " : "+cs;
    
}