$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > 100) {
          $("#navigation").removeClass('nav-normal').addClass('nav-scroll');
       } else {
          $("#navigation").removeClass('nav-scroll').addClass('nav-normal');
       }
   });
    }
});