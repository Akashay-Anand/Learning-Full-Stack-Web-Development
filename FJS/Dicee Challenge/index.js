// alert("working")
function PlayGame(){

let randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomImages1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImages1);


// switch(randomNumber1){
//     case 1: document.querySelector("img1").setAttribute("src", "images/dice1.png");
//     case 2: document.querySelector("img1").setAttribute("src", "images/dice2.png");
//     case 3: document.querySelector("img1").setAttribute("src", "images/dice3.png");
//     case 4: document.querySelector("img1").setAttribute("src", "images/dice4.png");
//     case 5: document.querySelector("img1").setAttribute("src", "images/dice5.png");
//     case 6: document.querySelector("img1").setAttribute("src", "images/dice6.png");
// }

let randomNumber2 = Math.floor(Math.random() * 6) +1 ;
var randomImages2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImages2);

// switch(randomNumber2){
//     case 1: document.querySelector("img2").setAttribute("src", "images/dice1.png");
//     case 2: document.querySelector("img2").setAttribute("src", "images/dice2.png");
//     case 3: document.querySelector("img2").setAttribute("src", "images/dice3.png");
//     case 4: document.querySelector("img2").setAttribute("src", "images/dice4.png");
//     case 5: document.querySelector("img2").setAttribute("src", "images/dice5.png");
//     case 6: document.querySelector("img2").setAttribute("src", "images/dice6.png");
// }

if(randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML="🏆Player 1 Wins!"; 
else if(randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "Player 2 Wins!🏆";
else    document.querySelector("h1").innerHTML = "Draw!";

}