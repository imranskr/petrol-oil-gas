let main_menu = document.querySelector('.main_menu')
console.log(main_menu)
window.addEventListener('scroll', function () {
  let scrolling = this.scrollY
  if (scrolling > 100) {
    main_menu.classList.add('menu_fixed')
  } else {
    main_menu.classList.remove('menu_fixed')
  }
})



let backtotop= document.querySelector('.back_to_top')


window.onscroll=function ( ) {
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        backtotop.style.display='block'
    }
    else{
        backtotop.style.display='none'
    }
}


$('.supplier_country_img').slick({
  autoplay:true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});