function updateprogressBar(progressBar, value) {
    value = Math.round (value)
    const progressFill = progressBar.querySelector(".progress__fill")
    const progressText = progressBar.querySelector(".progress__text")
    progressFill.style.width = value+'%'
    progressText.textContent = value+'%' 
}

function scrollFunction() {
    const scroll = (document.body.scrollTop) ? document.body.scrollTop : document.documentElement.scrollTop
    const elemProgress = document.querySelectorAll(".progress")
    console.log(scroll)

    if ( scroll > 500 && scroll < 3000 ){
        elemProgress.forEach(function(element) {
            updateprogressBar(element, element.getAttribute("data-value")) 
        });
    }else{
        elemProgress.forEach(function(element) {
            updateprogressBar(element,0) 
        });
    }
}

window.onscroll = function() {scrollFunction()}






























/*
function saludar(nombre, apellido) {
    const mySectionIntro = document.querySelector(".intro")
    const titulo = mySectionIntro.querySelector("h1")
    titulo.textContent = nombre+" "+apellido
}

const firstname = "Beatriz"
const lastname = "Gimenez"
saludar(firstname,lastname)

*/









