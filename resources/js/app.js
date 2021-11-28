/* || ===

= IMKAN.com.sa
= APP FIRE

=== || */


$(document).ready(function(){


    $('.menu').click(function(){
        $('.dropdown').toggleClass("active");
    });
    
    $('#help article .accordion-list article').click(function(){
        $('#help article .accordion-list article').removeClass("active");
        $(this).toggleClass("active");
    });
    
     $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  })
     
     //slider
 
    
      $('.slider').slick({
                  dots: true,
                  slidesToShow: 1,
                  rtl: true,
                  slidesToScroll: 1,
                  arrows: false,
                    asNavFor: '.slider-for'
         
                });
    $('.slider-for').slick({
                  slidesToShow: 1,
                  rtl: true,
                  slidesToScroll: 1,
                  arrows: false,
                    asNavFor: '.slider'
         
                });
    
    
        
   


});
        $(function() {
              $('a[href*=#]').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
              });
            });

   $(document).ready(function() {
          $(".gallery .images a").tosrus({
           effect     : "fade",
           buttons    : "inline",
           pagination : {
              add        : true
           },
           wrapper    : {
              classes    : "img-border"
           }
          });
       });
        