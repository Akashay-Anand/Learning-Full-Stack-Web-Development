
// document.addEventListener("click", myFun);
// document.querySelector("button").addEventListener("click", myFun);
document.querySelector("button").addEventListener("click", function () {
    alert("Anonymous function colled");
});

for(var i = 0; i < document.querySelectorAll(".drum").length ; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click",myFun);   
}

function myFun(){
    alert("hello world");
}