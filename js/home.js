// I want to make a page where you don't have to scroll
console.log("JavaScript on");

$('a').on('click', function(){
   // When something on the navbar is clicked
   var target = $(this).attr('rel');

   if (window.matchMedia("(min-width: 750px)").matches) {
     /* the viewport is at least 750 pixels wide */
     
      // the rel attribute holds the target for which div should open.
      $("#"+target).show().siblings("div").hide();
      // The selected div is then shown and the other divs then hide
      console.log(target + " selected");
      $("html, body").animate({ scrollTop: 0 }, "slow");
      if (target === 'home' || target === 'resume' || target === 'contact'){
         document.body.style.backgroundColor = "#6495ED";
      } else {
         document.body.style.backgroundColor = "#2CA58D";
      }
   } else {
      $('html, body').animate({
        scrollTop: $("#"+target).offset().top
      }, 2000);
      document.body.style.backgroundColor = "#6495ED";
   }
  // 
});

