$(function() {

    let header = $("#header"),
        introH = $("#intro").innerHeight() - 90,
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

    // $(document).ready(function() {
    //     $("a.scrollto").click(function () {
    //       elementClick = $(this).attr("href")
    //       destination = $(elementClick).offset().top;
    //       $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 70}, 1100);
    // return false;
    //     });
    //   });

    // $("[data-scroll]").on("click", function(event) {
    //     event.preventDefault();

    //     let $this = $(this),
    //         blockId = $this.data('scroll'),
    //         blockOffset = $(blockId).offset().top;

    //     $("#nav a").removeClass("active");
    //     $this.addClass("active");

    //     $("html, body").animate({
    //         scrollTop:  blockOffset
    //     }, 700);
    // });



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
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $("[data-black]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 5,
        slidesToScroll: 1
    });

});



// Form

const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
  e.preventDefault()
})



// A href socials

const socialLinks = document.querySelectorAll('.footer__social-image')
socialLinks.forEach((socialLink) => socialLink.addEventListener('click', (e) => e.preventDefault())) 



const socialItems = document.querySelectorAll('.social__item')
socialItems.forEach((socialItem) => socialItem.addEventListener('click', (e) => e.preventDefault()))


