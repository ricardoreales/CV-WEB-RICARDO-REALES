
function animateInView(){
  const cards = document.querySelectorAll('.card_experiencia')
  let scrollTop= document.documentElement.scrollTop
  cards.forEach( (card,index) => {
      const cardTop = card.getBoundingClientRect().top
     
      if(cardTop > 50 && cardTop < 700 ){
        if(index == 0){
          console.log(cardTop)
          console.log('a')
          card.classList.add('animate')
        }
        card.classList.add('animate')
       
      }else {
        card.classList.remove('animate')
      } 
  })
}

