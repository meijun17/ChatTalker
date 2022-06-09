$(function() {
    $('#gotop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   
        return false;
    });
    
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
    $( "#accordion" ).accordion({
        heightStyle: "content"
    });

    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            1088: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            356: {
                slidesPerView: 1,
            },
        }
    });

    $('.plus-minus').click(function(e){
        let id = '#' + e.target.id;
 
        if ( e.target.className.indexOf("collapsed") === -1 ){
            $( id ).attr("src","https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_plus.svg")
            $(id).parent().removeClass("active");
        }else{
            $( id ).attr("src","https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_minus.svg")
            $(id).parent().addClass("active");
        }
    })

    
});