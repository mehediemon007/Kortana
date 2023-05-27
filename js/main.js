(function($){

    $(".nav-toggle").on("click",function(){
        $("i", this).toggleClass("fa-solid fa-bars fa-solid fa-xmark");
        $(".kt-main-nav").slideToggle("500")
    })

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

    $(".testi-slider").owlCarousel({
        loop:true,
        autoplay:true,
        slideBy:1,
        dots: false,
        nav:true,
        navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
        stagePadding: 30,
        mouseDrag:false,
        responsive:{
            768:{
                items:2,
                margin:24,
            },
            0:{
                items:1,
                margin:8,
            }
        }
    })

    new WOW().init();

 

})(jQuery);


(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".kt-header");
    window.onscroll = ()=>{
        this.scrollY > 30 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

})()
