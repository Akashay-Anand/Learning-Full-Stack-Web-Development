// jQuery or $ can be use interchangabely
// jQuery('h1').css("color","rgb(123,123,223,0.9)");

// $('h1').css('fontSize','100px');

$('h1').addClass("h1style h2-style");

// alert("hello");

$('h1').removeClass("h2-style");

console.log($('h1').hasClass('h1style'));
console.log($('img').attr("src")); 
$('a').attr("href","https://google.com").attr("target","_blank");

// Event Listeners jQuery
// Note: in 

// H1
$('h1').click(function() {
    $('h1').css('color','red');
});

// button 
// with JS
for(var i = 0; i<5; i++){
    document.querySelectorAll('button')[i].addEventListener("click", function () {
        document.querySelector('h1').style.color = 'darkorange';
    });
}
// with jQuery
$('button').click(function() {
    // document.querySelector('h1').classList.toggle('h1style'); 
    // $('h1').css("color","green").toggle("color");
});

// Key Strocks
// this will target the input box only
// $("input").keypress(function(event){
//     console.log(event.key);
// }); 
$(document).keypress(function(event){
    console.log(event.key);
    // $('h1').text(event.key)
})

 