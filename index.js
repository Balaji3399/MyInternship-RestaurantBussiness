document.addEventListener("DOMContentLoaded", function () {
    
    const nav = document.querySelector("#nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("transition");
        } 
        else{
            nav.classList.remove("transition") ;
        }
    });
    
});

function open_sidebar(){
    document.querySelector(".side-bar").style.display = "block" ;
    document.querySelector(".bar").style.display ="none"
  }
  function close_sidebar(){
    document.querySelector(".side-bar").style.display = "none" ;
    document.querySelector(".bar").style.display = "block" ;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const cardSlider = document.querySelector('.card-slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    prevButton.addEventListener('click', () => {
      cardSlider.scrollBy({
        left: -340,
        behavior: 'smooth' 
      });
    });

    nextButton.addEventListener('click', () => {
      cardSlider.scrollBy({
        left: 340,
        behavior: 'smooth' 
      });
    });

    const reviewcardSlider = document.querySelector('.card-slider.review');
    const reviewprevButton = document.getElementById('prev1');
    const reviewnextButton = document.getElementById('next1');

    reviewprevButton.addEventListener('click', () => {
      reviewcardSlider.scrollBy({
        left: -400,
        behavior: 'smooth' 
      });
    });

    reviewnextButton.addEventListener('click', () => {
      reviewcardSlider.scrollBy({
        left: 400,
        behavior: 'smooth' 
      });
    });


  

  });