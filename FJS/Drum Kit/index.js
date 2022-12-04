
// document.addEventListener("click", myFun);
// document.querySelector("button").addEventListener("click", myFun);
// document.querySelector("button").addEventListener("click", function () {
//     alert("Anonymous function colled");
//}); // Anonymous functio... function without any name

// var audio = new Audio("sounds/crash.mp3"); // puting it heare create delay so decleared inside the function so that function can access it directly..
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++ ){
    // document.querySelectorAll(".drum")[i].addEventListener("click",myFun);
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        // 'this' will return the curent object which trigered event
        var audio;
        var text = this.innerHTML;
        console.log(text);
        switch (text) {
            case 'w':
                audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case 'a':
                audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case 's':
                audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case 'd':
                audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case 'j':
                audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case 'k':
                audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case 'l':
                audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            default:
                break;
        }

    });
    
}
// document.querySelector(".a").style.color ="Green";
// document.querySelector(".a").innerHTML;
// var audio = new Audio("sounds/crash.mp3");
//         audio.play();

