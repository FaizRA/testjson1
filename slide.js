$(function () {
    /*
    $('#slider .slides').animate({
        // 'margin-left': -720 //tidak lanjut kegambar berikutnya
        'margin-left': '-=720'
    }, 1000)
    */

    //Configuration
    let width = 720;
    let animationSpeed = 1000;
    let pause = 3000;
    let currentSlide = 1; //indikator untuk kembali ke slide awal

    //Cache Dom
    let $slider = $('#slider');
    let $slideContainer = $slider.find('.slides');
    let $slide = $slideContainer.find('.slide');

    //Variable interval untuk menyimpan fungsi slide yang bisa berjalan terus menerus agar bisa dipause
    let interval;

    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({
                'margin-left': '-=' + width
            }, animationSpeed, function () {
                currentSlide++;
                if (currentSlide === $slide.length) {
                    currentSlide = 1;
                    $slideContainer.delay(pause).css('margin-left', 0);
                }
            });
        }, pause);
    }


    function stopSlider() {
        clearInterval(interval);
    }

    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    startSlider();



});