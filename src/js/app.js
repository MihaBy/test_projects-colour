console.log("run");



$(document).ready(
    function() {
        /*
        nav menu == #nav
        burget button == #navToggle
        nav_active - state when menu open
        get height of hero(first block) attr =  "[data-height='hero']"
        get height of second block .quote
        copy nav structure from pug and css
        */
        let nav = document.getElementById("nav");
        let navToggle; //button.burger__menu delete
        
        $("#navToggle").on("click", function(event) {
            event.preventDefalt;
            console.log(nav.classList);//
            if (nav.classList.contains('nav_active')) {
            nav.classList.remove('nav_active');
            nav.style.height = "auto";
            console.log("nav.style.height _ " + nav.style.height);//
        }
            else {
            nav.classList.add('nav_active');
            //let getIntroHeight = document.getElementById("scene").offsetHeight;
            let firstBlockNameSelector = "[data-height='hero']";
            let secondBlockClassName = "quote";
            let getIntroHeight = document.querySelectorAll(firstBlockNameSelector); 
            
            getIntroHeight = getIntroHeight[0];
            getIntroHeight = getIntroHeight.offsetHeight;
            
            let getQuoteHeight = document.getElementsByClassName(secondBlockClassName)[0].offsetHeight;
            //console.log(getIntroHeight);
            nav.style.height = getIntroHeight - getQuoteHeight + "px"; 
            }
            //nav.toggleClass('nav_active');
        });
    
        $("#nav").children().on("click", function (event) {
            // cancell standart events on click
            event.preventDefalt;
            nav.classList.remove('nav_active');
            nav.style.height = "auto";
        });






        //          SLICK SLIDER 
        let slickSliderClassName = '.slick-slider';//.slider-for
        let slickSliderClassNameNavigation = '.slider-nav';
        let breakpoints__hg = 1920,
            breakpoints__lg = 1366,
            breakpoints__md = 810,
            breakpoints__sm = 361;
        $(slickSliderClassName).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            centerMode: true,
            asNavFor: slickSliderClassNameNavigation,
            responsive: [
                {
                    breakpoint: breakpoints__lg,
                    settings: {
                    arrows: true,
                    
                    }
                  },
            ]
          });

          $(slickSliderClassNameNavigation).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: slickSliderClassName,
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows: true,
            infinite: true,
            swipeToSlide: true,
          });

});


