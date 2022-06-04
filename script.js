const options = ["rock","paper","scissor"];
function computerPlays() {
    return options[Math.floor(Math.random()*4)];
}
console.log("Hi");
let computer = computerPlays();
console.log(computer);