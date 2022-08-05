
function animatePortafolio(){
  const cards = document.querySelectorAll('.cards--two')
  let scrollTop= document.documentElement.scrollTop
  cards.forEach( (card,index) => {
      const cardTop = card.getBoundingClientRect().top
     
      if(cardTop > 50 && cardTop < 460 ){
        if(index == 0){
          console.log(cardTop)
        }
        card.classList.add('card_animation')
       
      }else {
        card.classList.remove('card_animation')
      } 
  })
}

