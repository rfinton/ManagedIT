$(document).ready(function () {
    slider = false;
    val = 0;

    try {
        p = document.getElementById('sliderChoice1').alt;
    }
    catch (e) {
        p = document.getElementsByClassName('sliderChoices')[0].alt;
    }

    if (p == 'four') p = 4;
    else p = 5;

    if (window.innerWidth > 1024) {
        $('#mySlider').sGlide({
            unit: 'px',
            width: 780,
            height: 10,
            image: '../images/slider.png',
            startAt: 0,
            snap: {
                points: p,
                markers: false,
                type: 'soft'
            },
            drop: function (o) {
                val = Math.round(o.percent);
            }
        });

        slider = true;
    }
});