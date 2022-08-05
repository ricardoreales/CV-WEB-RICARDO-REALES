
function animateInView(){
  const cards = document.querySelectorAll('.card_experiencia')
  cards.forEach( (card) => {
      const cardTop = card.getBoundingClientRect().top
      if(cardTop > -100 && cardTop < 1300 ){
        card.classList.add('animate')
      }else {
        card.classList.remove('animate')
      } 
  })
}

window.onscroll = function() { animateInView() }