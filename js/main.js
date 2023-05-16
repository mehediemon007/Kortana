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

 

})(jQuery);


(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".kt-header");
    window.onscroll = ()=>{
        this.scrollY > 30 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

    // Switch Button

    let checkbox = document.querySelector('.switch-button-checkbox');

    checkbox.addEventListener('change', e => {

        if(!e.target.checked){
            var switchBtn = document.querySelector('.switch-button');
            switchBtn.classList.toggle("on");
        }

    });

    // Range Slider

    const slideValue = document.querySelector(".range-value .right");
    const rangeBg = document.querySelector(".range-bg");

    if(slideValue != null || rangeBg !=null){
        let minValue = 3000;
        let currentValue = inputSlider.value - minValue;
        let maxValue = 10000;
        let rangeValue = (maxValue - minValue);
 
        rangeBg.style.width = (((currentValue * 100 ) / rangeValue) - 2.5 ) + '%';
 
    }


    const filter = document.getElementsByClassName('filter-label');

    for(i=0;i<filter.length;i++){
        filter[i].addEventListener('click',function(){
            this.classList.toggle('active');
        })
    }
   

})()
