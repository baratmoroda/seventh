$(document).ready(function() {
    $(".gallery").slick({
        arrows: true,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});