//we can grab the element by different ways and manipulate it 
//generally done by storing the element in a variable 

let mainHead = document.getElementById('main-heading')

mainHead.textContent = "This is manipulated heading"  //has access to all the text content 
//mainHead.innerText = "This is manipulated heading"  //doesnt has access to the text if its display : none

//innerHTML can be used to inject the content along with the html tags 

//another way to grab the element is by className

let subHead = document.getElementsByClassName('sub-heading')

//another way is to 

let subHeadNew = document.querySelector('.sub-heading') // can be used same as css selector 

let allInput = document.querySelectorAll('input') //returns the NodeList => similar to array but not exactly 

allInput.forEach((item)=>{
    item.style.borderRadius = "30px";
    item.style.margin = "10px";
})