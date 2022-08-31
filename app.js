


// const section1 = document.querySelector("#first")
// const section2 = document.querySelector("#second")
// const section3 = document.querySelector("#third")

// const nav1 = document.querySelector(".first")
// const nav2 = document.querySelector(".second")
// const nav3 = document.querySelector(".third")



// section1.addEventListener('mouseover', function () {
//     console.log("1")
//     document.querySelector(".first").style.backgroundColor = "red"
// })
// section1.addEventListener('mouseout', function () {
//     console.log("1out")
//     document.querySelector(".first").style.backgroundColor = "yellow"
// })

// section2.addEventListener('mouseover', function(){
//     console.log("2")
//     document.querySelector(".second").style.backgroundColor = "red"
// })
// section3.addEventListener('mouseover', function(){
//     console.log("3")
//     document.querySelector(".third").style.backgroundColor = "red"
// })

const sections = document.querySelectorAll("section")
console.log(sections);
const navBar = document.querySelector('#nav-ul');

for (let i = 0; i < sections.length; i++){
    const newLi = document.createElement('li')
    const section = sections[i]
    newLi.textContent = section.dataset.section;
    
    newLi.addEventListener('click', function(){
        console.log(section,newLi)
        const locationSection = section.getBoundingClientRect()
        scrollBy({
            top: locationSection.top - 128, 
            behavior: "smooth"

        })
    })
    navBar.appendChild(newLi)
}