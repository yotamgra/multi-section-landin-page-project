


const section1 = document.querySelector("#first")
const section2 = document.querySelector("#second")
const section3 = document.querySelector("#third")

const nav1 = document.querySelector(".first")
const nav2 = document.querySelector(".second")
const nav3 = document.querySelector(".third")



section1.addEventListener('mouseover', function () {
    console.log("1")
    document.querySelector(".first").style.backgroundColor = "red"
})
section1.addEventListener('mouseout', function () {
    console.log("1out")
    document.querySelector(".first").style.backgroundColor = "yellow"
})

section2.addEventListener('mouseover', function(){
    console.log("2")
    document.querySelector(".second").style.backgroundColor = "red"
})
section3.addEventListener('mouseover', function(){
    console.log("3")
    document.querySelector(".third").style.backgroundColor = "red"
})

