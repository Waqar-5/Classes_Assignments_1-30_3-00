//  method 2

// let btn = document.getElementById("btn").onclick = function(){
//     alert("Button Clicked Again")
// }
// or 
// let btn = document.getElementById("btn")
// .onclick = function(){
//     alert("Button Clicked Again")
// }


// Method 3 (Recommended)
let btn = document.getElementById("btn")



btn.addEventListener("click", function(){
    alert("Hello, from addEventListener.")
})



//  for mouse use them
let box = document.getElementById("box")
box.addEventListener("click",function(){
    box.style.backgroundColor = "Red"
})

// double click
let doubleClick = document.getElementById("box")
doubleClick.addEventListener("dblclick",function(){
    doubleClick.style.backgroundColor = "brown"
})


// On Mouse Enter Event
let mouseEnter = document.getElementById("box")
mouseEnter.addEventListener("mouseenter",function(){
    mouseEnter.style.backgroundColor = "blue"
    mouseEnter.style.color = "white"
    mouseEnter.innerText = "Mouse Enter !"
    mouseEnter.style.width = "500px"
})

// On Mouse Leave Event
let mouseleft = document.getElementById("box")
mouseleft.addEventListener("mouseleave",function(){
    // mouseEnter.style.backgroundColor = "brown"
    mouseleft.innerText = "Mouse Leave !"
    // mouseleft.style.width = "500px"
    mouseleft.style.backgroundColor = "lightgreen"
      mouseleft.style.color = "black"
})


// contextMenu
let contextMenu = document.getElementById("box")
contextMenu.addEventListener("contextmenu",function(e){
    e.preventDefault();
    alert("Right Click Disabled!!!")
})




// keyboards event (trigger)
// keydwon trigger
let input = document.getElementById("inputbox")
let output = document.getElementById("output")

input.addEventListener("keydown", function(event){
    // event.key here key will be dedecited
    output.innerText = "Keydwon is pressed! " + event.key;

})

// keyup
let input1 = document.getElementById("inputbox")
let output1 = document.getElementById("output")

input1.addEventListener("keyup", function(event){
    // event.key here key will be dedecited
    // output1.innerText = "Keyup is pressed! " + event.key;
    output1.innerText = "Key is Released! " + event.key;

})


