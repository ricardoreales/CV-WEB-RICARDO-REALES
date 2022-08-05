

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




    if ((screen.width <= 600 && scroll > 600 && scroll < 3000) || (screen.width > 600 && scroll > 150 && scroll < 1000) ){
        elemProgress.forEach(function(element) {
            updateprogressBar(element, element.getAttribute("data-value")) 
        });
    }else{
        elemProgress.forEach(function(element) {
            updateprogressBar(element,0) 
        });
    }



    if(screen.width <= 600 ){
        
        const portafolio1 = document.getElementById("portafolio1")
        portafolio1.addEventListener('mouseover', function() {
            console.log('Event triggered')
        });

        if(scroll > 5500 && scroll < 6800) {
            portafolio1.dispatchEvent(new MouseEvent('mouseover'));
        }   

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









