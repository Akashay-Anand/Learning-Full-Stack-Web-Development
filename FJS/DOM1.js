{
    document.getElementById('h1t').classList;  // this return class name related to that element
    document.getElementById('h1t').classList.add('hide','sty'); // add 'hide' class to that list
    document.getElementById('h1t').classList.remove('hide'); // this will remove particular method
    document.querySelector('button').attributes;    // this will return array of all attribute use in taht particular element... // note use queryselector and target element
    document.querySelector("a").setAttribute("href", "https://www.bing.com");
}

function modifyClass(){
    document.getElementById('h1t').classList.toggle('sty');
    console.log(document.getElementById('btn').attributes)
    
}

// inerHTMl gives what ever html/text present inside that tag
// textContent gives only text content... it will ignore if any html come in between 

