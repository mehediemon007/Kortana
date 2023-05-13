(function($){

    $(".nav-toggle").on("click",function(){
        $("i", this).toggleClass("fa-solid fa-bars fa-solid fa-xmark");
        $(".nf-main-nav").slideToggle("500")
    })

    $("select").on("click",function(){
        $(this).toggleClass("active")
    })

    $(".search-filter .filter-btn").on("click",function(){
        $(".sidebar-widget").addClass("active")
    })

    $(".filter-cls").on("click",function(){
        $(".sidebar-widget").removeClass("active")
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

 

})(jQuery);


(function(){

    // Sticky Nav

    // const headerContainer = document.querySelector(".mof-header");
    // window.onscroll = ()=>{
    //     this.scrollY > 30 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    // }

    // // Switch Button

    // let checkbox = document.querySelector('.switch-button-checkbox');

    // checkbox.addEventListener('change', e => {

    //     if(!e.target.checked){
    //         var switchBtn = document.querySelector('.switch-button');
    //         switchBtn.classList.toggle("on");
    //     }

    // });

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
