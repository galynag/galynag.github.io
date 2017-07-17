/**
 * Created by Galina on 17.07.2017.
 */
var pixels = document.getElementsByClassName("pixel");

var RAND = true;
var WIN = false;
var WIN_PIX = {};
var moves = 0;
var elValue, el;

var sym = function() {
    var symbol = RAND ? 'x' : 'o';
    RAND = !RAND;
    return symbol;
}

document.getElementById('playground').addEventListener('click', function(e) {
    var currentCell = e.target;
    if (currentCell.innerHTML == '' && !WIN) {
        currentCell.innerHTML = sym();
        moves ++;
        check_state(pixels);
    }
});

var check_state = function(pixs) {
    var results = {}
    for (var i = 0; i < pixs.length; i++) {
        var pix = pixs[i];
        results[i] = {
            id: pix.id,
            value: pix.innerHTML
        }
    }

    if (check_combine(results)) {
        win();
        if (elValue =='x') {
            // alert("WIN gamer X!");
        } else if (elValue =='o') {
            // alert("WIN gamer O!");
        }
    } else if (moves === 9) {
        // alert('Tie');
    }
}

var check_combine = function(r) {
    return check(r[0], r[1], r[2]) || check(r[0], r[3], r[6]) || check(r[6], r[7], r[8]) || check(r[1], r[4], r[7]) || check(r[2], r[5], r[8]) || check(r[0], r[4], r[8]) || check(r[2], r[4], r[6]) || check(r[3], r[4], r[5])
}

var win = function() {
    for (var i = 0; i < WIN_PIX.length; i++) {
        var el = document.getElementById(WIN_PIX[i].id);
        elValue = WIN_PIX[i].value;
        WIN = true;
        if (elValue =='x') {
            el.className += " red";
        } else if (elValue =='o') {
            el.className += " blue";
        }
    }
}

var check = function(first, second, third) {
    if (first.value == second.value && first.value == third.value && (first.value == 'o' || first.value == 'x')) {
        WIN_PIX = [first, second, third];
        return true;
    }
}