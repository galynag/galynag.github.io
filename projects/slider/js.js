/**
 * Created by Galina on 17.07.2017.
 */

var sdvig = 0;

function sliderLeft() {
    if (sdvig == -245) {
        sdvig = 0;
    }
    else {
        sdvig = sdvig - 245;
    }
    var line;
    line = document.getElementById('slider-group');
    line.style.marginLeft = sdvig + 'px';
}

function sliderRight() {
    if (sdvig >= 0) {
        sdvig = 0;
    }
    else {
        sdvig = sdvig + 245;
    }
    var line;
    line = document.getElementById('slider-group');
    line.style.marginLeft = sdvig + 'px';
}