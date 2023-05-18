$(function() {

    let header = $("#header"),
        introH = $("#intro").innerHeight() - 100,
        scrollOffset = $(window).scrollTop();
    

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll and fixed header navigation */

    $('.scroll-to-block').click(function(e){
        e.preventDefault()
        let target = $(this).data('scroll')
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 1000)
    })


    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top - 70;


        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $(".nav__header-logo").toggleClass("active");
        document.body.classList.toggle("no-scroll")
        // $(".header__logo").toggleClass("hidden")
    });



    /* Collapse */
    // $("[data-collapse]").on("click", function(event) {
    //     event.preventDefault();

    //     let $this = $(this),
    //         blockId = $this.data('collapse');

    //     $this.toggleClass("active");
    // });

});



// Form, email

const secondForm = document.querySelector('#subscribeForm')
secondForm.addEventListener('submit', function(e) {
  e.preventDefault()
})

const messageForm = document.querySelector('#messageForm')
messageForm.addEventListener('click', function(e){
  e.preventDefault()
})

// A href socials

const socialLinks = document.querySelectorAll('.footer__social-image')
socialLinks.forEach((socialLink) => socialLink.addEventListener('click', (e) => e.preventDefault())) 



const socialItems = document.querySelectorAll('.social__item')
socialItems.forEach((socialItem) => socialItem.addEventListener('click', (e) => e.preventDefault()))



// Swiper

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


//   TYPES OF OFFERS Tabs

const tabsOfOffers = document.querySelectorAll('.accordion__item')
const tabsContent =  document.querySelectorAll('.accordion__content')

tabsOfOffers.forEach(function(item){
    item.addEventListener('click', function(){
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-collapse')
        let currentTab = document.querySelector(tabId)
        console.log(currentTab);

        tabsOfOffers.forEach(function(item){
            item.classList.remove('active')
        })

        tabsContent.forEach(function(item){
            item.classList.remove('active')
        })


        currentBtn.classList.add('active')
        currentTab.classList.add('active')

        if(currentBtn.classList.contains('active')){
            currentTab.classList.toggle('hidden')
        }
    })
})
  
document.querySelector('.accordion__item').click()

//   / TYPES OF OFFERS Tabs



// Modals
const modalButtons = document.querySelectorAll('[data-modal-button]')
const modalCloseButtons = document.querySelectorAll('[data-modal-close]')
const allModals = document.querySelectorAll('[data-modal]')

modalButtons.forEach(function(item){
  item.addEventListener('click', function(){
    const modalId = this.dataset.modalButton
    const modal = document.querySelector('#'+modalId)
    modal.classList.remove('hidden')

    modal.querySelector('.modal-window').addEventListener('click', function(event){
      event.stopPropagation()

    })
  })
})

modalCloseButtons.forEach(function(item){
  item.addEventListener('click', function(){
    // e.preventDefault()
    const modal = this.closest('[data-modal]')
    modal.classList.add('hidden')
  })
})

allModals.forEach(function(item){
  item.addEventListener('click', function(){
    this.classList.add('hidden')
  })
})
