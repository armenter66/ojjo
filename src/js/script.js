$(document).ready(function(){

$('ul.catalogue__list').on('click', 'li:not(.catalogue__tabs_active)', function() {
        $(this)
          .addClass('catalogue__tabs_active').siblings().removeClass('catalogue__tabs_active')

          .closest('div.container').find('div.catalogue__wrapper').removeClass('catalogue__wrapper_active').eq($(this).index()).addClass('catalogue__wrapper_active');
      });


$(window).scroll(function() {
    if ($(this).scrollTop() > 750) {
        $('.hamburger').addClass('scrolled');
      } else {
        $('.hamburger').removeClass('scrolled');
      };

      });      

});

const hamburger = document.querySelector('.hamburger'), 
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () =>
{
  menu.classList.remove('active');
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше";
    moreText.style.display = "inline";
  }
}

