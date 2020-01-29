$(document).ready(() => {
    $('.carousel').slick({
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        pauseOnHover: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  swipe: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                }
            }
        ]
    });
});