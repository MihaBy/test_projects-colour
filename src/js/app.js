
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
            //console.log(nav.classList);
            if (nav.classList.contains('nav_active')) {
            nav.classList.remove('nav_active');
            nav.style.height = "auto";
            //console.log("nav.style.height _ " + nav.style.height);//
        }
            else {
            nav.classList.add('nav_active');
            //let getIntroHeight = document.getElementById("scene").offsetHeight;
            let firstBlockNameSelector = "[data-height='hero']";
            let secondBlockClassName = "quote";
            let getIntroHeight = document.querySelectorAll(firstBlockNameSelector); 
            
            // add if for find height
            console.log(getIntroHeight);
            console.log("getIntroHeight");
            if (typeof getIntroHeight !== "undefined" && typeof getIntroHeight[0] !== "undefined") { 
              getIntroHeight = getIntroHeight[0];
              getIntroHeight = getIntroHeight.offsetHeight;
              nav.style.height = getIntroHeight + "px"; 
            }
            else nav.style.height = "100vh";
            
            //getIntroHeight = getIntroHeight[0];
            //getIntroHeight = getIntroHeight.offsetHeight;
            
            //let getQuoteHeight = document.getElementsByClassName(secondBlockClassName)[0].offsetHeight;
            //console.log(getIntroHeight);
            //nav.style.height = getIntroHeight - getQuoteHeight + "px"; 
            //nav.style.height = getIntroHeight + "px"; 
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
        let slickSlider__moreItems = '.slick-slider--more-items';
        let breakpoints__hg = 1920,
            breakpoints__lg = 1366,
            breakpoints__md = 810,
            breakpoints__sm = 361;

        let mainSlider = $('#main-slider')[0];
        let navSlider = $('#nav-slider')[0];
        let sliderCssReposition = '--full_width--centered';
        let sliderWrapper = document.getElementById('item-slider');
        let sliderFixedWrapper;
        let slickCurrentSlideNumber;

        let slickDataMain = {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          centerMode: true,
          asNavFor: navSlider,
          swipeToSlide: true,
          initialSlide: 0,
          responsive: [
            {
                  breakpoint: breakpoints__lg,
                  settings: {
                  arrows: true,
                  swipeToSlide: true,
                  }
            },
          ]
        }

        let slickDataNav = {
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: mainSlider,
          dots: false,
          centerMode: true,
          focusOnSelect: true,
          arrows: true,
          infinite: true,
          swipeToSlide: true,
          //initialSlide: slickCurrentSlide,
          responsive: [
            {
                  breakpoint: breakpoints__lg,
                  settings: {
                      //slick :destroy,
                      arrows: false,
                  }
            },
          ]
        }

        let slickData__moreItems = {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          //fade: true,
          //centerMode: true,
          //asNavFor: navSlider,
          swipeToSlide: true,
          //initialSlide: 0,
          responsive: [
            {
              breakpoint: breakpoints__hg,
              settings: {
              slidesToShow: 4,

              }
            },
            {
                  breakpoint: breakpoints__lg,
                  settings: {
                  slidesToShow: 3,
                  
    
                  }
            },
            {
              breakpoint: breakpoints__md,
              settings: {
              slidesToShow: 2,
              
              
              }
        },
          ]
        }


        if (typeof mainSlider !== 'undefined') { $(mainSlider).slick(slickDataMain);}
        if (typeof navSlider !== 'undefined') { $(navSlider).slick(slickDataNav);}

        if (typeof slickSlider__moreItems !== 'undefined') { $(slickSlider__moreItems).slick(slickData__moreItems);}

          //Events on click 
            //create new dom element
     


          $('#main-slider .slick-slide ').on('click', function() {
            if (this.classList.contains('slick-active')) {

              if (sliderWrapper.classList.contains(sliderCssReposition)) {

                slickCurrentSlideNumber = $(mainSlider).slick('slickCurrentSlide');
                document.body.style.overflow = 'visible';
                $(mainSlider).slick('unslick');
                $(navSlider).slick('unslick');
                sliderWrapper.classList.remove(sliderCssReposition);
                $(mainSlider).slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  fade: true,
                  centerMode: true,
                  asNavFor: navSlider,
                  swipeToSlide: true,
                  initialSlide: slickCurrentSlideNumber,
                  responsive: [
                    {
                          breakpoint: breakpoints__lg,
                          settings: {
                          arrows: true,
                          swipeToSlide: true,
                          }
                    },
                  ]
                });
                
                $(navSlider).slick(slickDataNav);
                
                
              }
              else if (sliderWrapper.classList.contains(sliderCssReposition) == false ){
                
                slickCurrentSlideNumber = $(mainSlider).slick('slickCurrentSlide');
                document.body.style.overflow = 'hidden';
                $(mainSlider).slick('unslick');
                $(navSlider).slick('unslick');
                sliderWrapper.classList.add(sliderCssReposition);
                $(mainSlider).slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  fade: true,
                  centerMode: true,
                  asNavFor: navSlider,
                  swipeToSlide: true,
                  initialSlide: slickCurrentSlideNumber,
                });
                
                $(navSlider).slick(slickDataNav);
                
              }
              else console.log('if not work');
              
            }

            else return false;
          });


          
        /*
          $('#main-slider .slick-slide ').on('click', function(){
            //console.log('click');
            console.log(this);
            if (this.classList.contains('slick-active')) {
              
              let node;
              //console.log(mainSlider.classList.contains(sliderCssReposition));
            // console.log('mainSlider.classList.contains(sliderCssReposition)');
              if (mainSlider.classList.contains(sliderCssReposition)) {
                mainSlider.classList.remove(sliderCssReposition);
                sliderWrapper.appendChild(mainSlider);
              // $(slickSliderClassName).slick('reInit');
              // $(slickSliderClassName).slick('setPosition');
                //console.log(sliderFixedWrapper);
                //node.classList.remove("test");
                sliderFixedWrapper.remove();
                console.log('remove full size');
               // return $(slickSliderClassName).slick('reInit');
              }
              else if (mainSlider.classList.contains(sliderCssReposition) == false ){
                mainSlider.classList.add(sliderCssReposition);
                sliderFixedWrapper = document.createElement("div");
                sliderFixedWrapper.classList.add("test");
                //this.classList.add("test__inner-slide")
                sliderFixedWrapper.appendChild(mainSlider);
                document.body.appendChild(sliderFixedWrapper);
                console.log('add full size');

                //console.log($('.slick-slider'));
                // $('.slick-slider')[0].classList.add("test");
                //this.classList.add('.slick-active');
                // console.log($('#main-slider')[0]);
                // console.log('$(#main-slider)[0];');
                //$('#main-slider').slick('reInit');
                // $('#main-slider').slick('setPosition');
              }
              else console.log('if not work');
            }
            else return false;
        });
        */


//
//
//test
/*
.quote.quote--main-style
    p.quote__item.--animation--run-line 
        span 50% of sales for the needs of the Ukrainian relief fund some text


*/ 

// перевести на атрибуты
// разнести стили
const quoteBlockConfig = {
  item: 'quote__item',
  block: 'quote',
  itemContent: '--item--content',
  widthBeforeElement: '--item--sub-element--width',
  quantity: 3, 
  CssScaleK: '--scale--k',
  scaleCoeffitient: 1.3,
}

let quoteBlockName = document.getElementsByClassName(quoteBlockConfig.item)[0];
let quoteMainElement = document.getElementsByClassName(quoteBlockConfig.block)[0];

  if( typeof(quoteBlockName) != "undefined" && typeof(quoteMainElement) != "undefined") {
    
    function getScaleK() {
      /*
      let style = window.getComputedStyle(quoteMainElement);
      console.info(style);
      console.info('style');
*/
      let style = getComputedStyle(quoteMainElement)
      .getPropertyValue('--scale--k'); // #999999
     // console.info(style);
     // console.info('style');
    //
      /*let getCssVar = quoteMainElement.style.getPropertyValue(quoteBlockConfig.CssScaleK);
      console.warn(typeof getCssVar);
      console.warn( getCssVar);
      console.warn( 'getCssVar');*/
     
      return style;
      //console.info(getCssVar + "==? 1.2");
    }
    function setScaleK() {
      let value = Number(getScaleK());
      if (value !== "NaN" && value !== 0) {
        console.warn(typeof value);
        console.warn( value);
        console.warn(typeof  quoteBlockConfig.scaleCoeffitient);
        quoteBlockConfig.scaleCoeffitient = value;
        console.warn(typeof  quoteBlockConfig.scaleCoeffitient);
        console.info(quoteBlockConfig.scaleCoeffitient);
        
      }
    
    }
    function changeSpanWidth(child) {
      let spanWidth = child.offsetWidth;
      spanWidth = spanWidth * quoteBlockConfig.scaleCoeffitient;
      spanWidth = spanWidth / 2;
      spanWidth = spanWidth + "px";
      quoteMainElement.style.setProperty(quoteBlockConfig.widthBeforeElement, spanWidth); 
    }

    function setElementContent(child) {
      let innerContent  = child.innerHTML;
      innerContent = ' " ' + innerContent + ' " ';
      quoteMainElement.style.setProperty(quoteBlockConfig.itemContent, innerContent);
               
      console.log(typeof innerContent);
      console.log('innerContent type');
      console.log(innerContent);
      console.log('innerContent '); 
    }

    function createItemBlock () {
      /*
      p.quote__item.--animation--run-line 
        span 50% of sales for the needs of the Ukrainian relief fund some text
      */
    // console.info(clone);
   //  console.info(quoteBlockConfig.quantity);
     for (let i = 0; i < quoteBlockConfig.quantity; i++ ) {
      var clone = quoteBlockName.cloneNode(true);
      quoteMainElement.appendChild(clone);
      //console.info(' cycle clone');
     // console.info(i);
      }
    }

      let pElement = quoteBlockName;
      setScaleK();
      createItemBlock ();
      for (const child of pElement.children) {
        if (child.tagName == 'SPAN') {
          console.log(child.innerHTML);
          console.log('child.innerHTML');
          console.log(child.firstChild.textContent);
          console.log('child.firstChild.textContent');
          //
          //console.log(child.tagName);
          
          
          setElementContent(child);
          changeSpanWidth(child);
        }
      }
    
  }
//
//
//console.log(getComputedStyle(document.querySelector('p'), ':before').getPropertyValue('content'));
        


});



/*
$('.your-element').on('swipe', function(event, slick, direction){
    console.log(direction);
    // left
  });
  slick-slider
  slick-slide slick-current slick-active*/

/*
  $('.slick-slider .slick-active').on('click', function(){
      console.log('click');
  });*/
/*
const node = document.createElement("div");
node.classList.add("test");
node.appendChild(this);
document.body.appendChild(node);
*/