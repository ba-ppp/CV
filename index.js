var slideIndex = 1;

function plusDivs(n) {
   showDivs(slideIndex += n);
}

function showDivs(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");

   if (n > slides.length) {
      slideIndex = 1
   }
   if (n < 1) {
      slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }

   slides[slideIndex - 1].style.display = "inline-block";
}

$(document).ready(function () {


   showDivs(slideIndex);
   const skillDiv = $('.skill').offset().top;
   const nav = $('.fixed-top').height();
   $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll > 0) {
         $(".fixed-top").addClass("nav-sticky");
         $('ul li a').click(function () {
            $('li a').removeClass("bord-bot-nav");
            $(this).addClass("bord-bot-nav");
         })

      } else {
         $(".fixed-top").removeClass("nav-sticky");
         $(".nav-link").removeClass("bord-bot-nav");


      }
      if (scroll >= skillDiv - nav - 200) {

         $('.percent-progress').removeClass('data-percent-zero');
         $('.for-count').each(function () {
            var $this = $(this),
               countTo = $this.attr('data-count');

            $({
               countNum: $this.text()
            }).animate({
                  countNum: countTo
               },

               {

                  duration: 3000,
                  easing: 'linear',
                  step: function () {
                     $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                     $this.text(this.countNum);

                  }

               });



         });

      }
   })


   $('ul li ').click(function () {

      $('li ').removeClass("active");
      $(this).addClass("active");



   })
   setTimeout(function () {
      $('.pre-loader').fadeOut();;
   }, 3000);

   $('#about').waypoint(function () {

      $(".nav-container ul ").children().removeClass("active");
      $(".s1").addClass("active ");
      $('.s1 a').addClass("bord-bot-nav");

   }, {
      offset: 200
   });


   $('#services').waypoint(function () {
      $(".nav-container ul").children().removeClass("active");
      $(".nav-container ul li").children().removeClass("bord-bot-nav");
      $(".s2").addClass("active");
      $('.s2 a').addClass("bord-bot-nav");
   }, {
      offset: 200
   });

   $('#resume').waypoint(function () {
      $(".nav-container ul").children().removeClass("active");
      $(".nav-container ul li").children().removeClass("bord-bot-nav");
      $(".s3").addClass("active");
      $('.s3 a').addClass("bord-bot-nav");
   }, {
      offset: 200
   });

   $('#portfolio').waypoint(function () {
     $(".nav-container ul").children().removeClass("active");
     $(".nav-container ul li").children().removeClass("bord-bot-nav");
     $(".s4").addClass("active");
     $('.s4 a').addClass("bord-bot-nav");
   }, {
      offset:0
   });

   $('#contact').waypoint(function () {
      $(".nav-container ul").children().removeClass("active");
      $(".nav-container ul li").children().removeClass("bord-bot-nav");
      $(".s5").addClass("active");
      $('.s5 a').addClass("bord-bot-nav");
   }, {
      offset: 0
   });

});