/**
 * Hides / display nav depending on scroll position
 */
const nav = document.querySelector('nav')
let prevScroll = 0
window.addEventListener('scroll', function (e) {
    if(window.scrollY > prevScroll) {
        if(window.scrollY > window.innerHeight / 2) {
            nav.style.top = 0
        } else {
            nav.style.top = 'calc(-10vh - 2px)'
        }
    } else {
        nav.style.top = 'calc(-10vh - 2px)'
    }
    prevScroll = window.scrollY
});

// Animation on title hover, using perspective and transform rotate CSS properties
// Inspired et aadapted from https://codepen.io/MihaiIonescu/pen/VQWWgj
const title = document.querySelector('.title span')
function mouseMovesTitle(e) {
    let position = {
        x: e.clientX - title.getBoundingClientRect().left - title.getBoundingClientRect().width / 2,
        y: e.clientY - title.getBoundingClientRect().top - title.getBoundingClientRect().height / 2
    }

    let angle = {
        x: position.y / title.offsetHeight / 2,
        y: position.x / title.offsetWidth / 2
    }

    title.style.transform = `rotateX(${angle.x}deg) rotateY(${angle.y}deg)`
}

title && title.addEventListener('mousemove', mouseMovesTitle)
title && title.addEventListener('mouseleave', () => {
    title.style.transform = ''
})

// Custom cursor moves depending on mouse moves
const cursor = document.querySelector('.cursor')
const onMouseMove = (e) => {
    cursor.style.left = e.clientX
    cursor.style.top = e.clientY
}

const handleLinkHoverEvents = () => {
    document.querySelectorAll(".hoverable").forEach(el => {
        console.log(el)
        el.addEventListener("mouseover", () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)'
            cursor.style.borderColor = '#000'
        })
        el.addEventListener("mouseout", () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)'
            cursor.style.borderColor = '#FFF'
        })
    })
}

document.addEventListener("mousemove", onMouseMove)
handleLinkHoverEvents()
