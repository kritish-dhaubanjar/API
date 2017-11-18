$(document).ready(function(){

$('#representation-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 2500,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        320:{
            items:1,
            nav:true,
            dots:false
        },
        568:{
            items:3,
            nav:true,
            dots:false
        },
        600:{
            items:3,
            nav:false,
            dots:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true,
            dots:true
        }
    }
});

$('#job-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 2500,
    responsiveClass:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            dots:false
        },
        320:{
            items:1,
            dots:false
        },
        568:{
            items:1,
            dots:false
        },
        600:{
            items:1,
            dots:true
        },
        1000:{
            items:1,
            loop:true,
            dots:true
        }
    }
});

});

