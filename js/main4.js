(function($){

    // $(".nav-toggle").on("click",function(){
    //     $("i", this).toggleClass("fa-solid fa-bars fa-solid fa-xmark");
    //     $(".kt-main-nav").slideToggle("500")
    // })

    var mobileMenuIcon = $('.mobile-menu-icon');

    
    if (mobileMenuIcon.length) {
        mobileMenuIcon.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('open');
            $('.kt-main-nav').slideToggle();
        });

    }

    // totop scroller

    var totop = $('#toTop'),
        win = $(window);

    // scrollTop init

    win.on('scroll', function () {

        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
        
    });

    totop.on('click', function () {

        $("html,body").animate({
            scrollTop: 0
        }, 500)

    });

    // Language Switcher  active

    $(".lang-switcher").on("click", function(e){
        e.preventDefault();
        $(".lang-list").toggleClass("lang-list-open");
    });

    $(".lang-list li").each(function(){
        $(this).on("click", function(){
            var logoSrc = $(this).children(".flag").children("img").attr("src");
            var langText =  $(this).children(".lang-text").text();
            $(".lang-switcher > .flag img").attr("src", logoSrc);
            $(".lang-switcher > .lang span").text(langText);
        });
    });

    win.on("click",function(e){

        if($(".lang-switcher").has(e.target).length === 0){
            $(".lang-list").removeClass("lang-list-open");
        }

    })

    // Table Info

    $(".info").on("click", function(){

        if($("td .info-text").hasClass("active")){

            if($('.info-text', this).hasClass("active")){
                
            }else{
                $("td .info-text").removeClass("active")
            }
           
        }

        $(".info-text", this).toggleClass("active");

    })

    // Slider

    $(".testi-slider.slider-2").owlCarousel({
        loop:true,
        autoplay:true,
        slideBy:1,
        dots: false,
        nav:true,
        navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
        mouseDrag:false,
        responsive:{
            992:{
                items:2,
                margin:20,
            },
            576:{
                items:2,
                margin:12,
            },
            0:{
                items:2,
                margin:8,
                nav: false
            }
        }
    })

    // Slider

    $(".prime-slider").owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        slideBy:1,
        smartSpeed: 400,
        dots: true,
        dotsSpeed: 400,
        dotsContainer: '#prime-owl-dots',
        nav:true,
        navText:[$("<i class='fa-solid fa-chevron-left'></i>"),$("<i class='fa-solid fa-chevron-right'></i>")],
        mouseDrag:false,
    })

    $('#prime-owl-dots .owl-dot').click(function () {
        $('.prime-slider').trigger('to.owl.carousel', [$(this).index(), 400]);
    });

    // Slider

    // $(".partners").owlCarousel({
    //     center: true,
    //     items:5,
    //     loop:true,
    //     margin:30,
    //     nav:false,
    //     dots:true,
    //     autoplay: true,
    //     slideTransition: 'linear',
    //     autoplayTimeout: 6000,
    //     autoplaySpeed: 6000,
    //     autoplayHoverPause: true,
    // });
    
    new WOW().init();

 

})(jQuery);


(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".kt-header");
    window.onscroll = ()=>{
        this.scrollY > 30 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

    // IntelPhoneInput

    var phoneInput = document.querySelector(".phone");

    if(phoneInput != null){

        window.intlTelInput(phoneInput, {
            separateDialCode: true,
            preferredCountries: ["bd", "sa"]
        });
    }

})()
