

//swiper1
    var swiper1 = new Swiper(".home-xidmetle-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1030: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    
    //swiper2
    var swiper2 = new Swiper(".home-mehsullar-swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            680: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1250: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
    
//swiper3
    var swiper3 = new Swiper(".home-avtomobiller-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
           
            892: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1258: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    //swiper4
    var swiper4 = new Swiper(".home-blog-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
           
          
        },
    });
    

    //swiper5


    var swiper5 = new Swiper(".mySwiper-avto", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper6 = new Swiper(".mySwiper2-avto", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper5,
        },
      });


      //swiper7
      var swiper7 = new Swiper(".blog-daxil-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            963: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1121: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
           
          },
        
      });