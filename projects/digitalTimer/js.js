// массив с числами, которые мы используем для отрисовки секунд и минут
var numbers = {
    '1' : function(myCanvas) {
        var c = document.getElementById(myCanvas);
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0,200,100);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = '3';
        ctx.beginPath();
        ctx.moveTo(68,18);//верхняя боковая правая
        ctx.lineTo(68,48);
        ctx.moveTo(68,50);//нижняя боковая правая
        ctx.lineTo(68,80);
        ctx.stroke();
    },
    '2' : function(myCanvas) {
        var c = document.getElementById(myCanvas);
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0,200,100);
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(37,17);//верхняя
        ctx.lineTo(66,17);
        ctx.moveTo(68,18);//верхняя боковая правая
        ctx.lineTo(68,48);
        ctx.moveTo(36,49);//средняя
        ctx.lineTo(66,49);
        ctx.moveTo(35,80);//нижняя боковая левая
        ctx.lineTo(35,50);
        ctx.moveTo(66,82);//нижняя
        ctx.lineTo(37,82);
        ctx.stroke();
    },
    '3': function(myCanvas) {
        var c = document.getElementById(myCanvas);
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0,200,100);
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(37,17);//верхняя
        ctx.lineTo(66,17);
        ctx.moveTo(68,18);//верхняя боковая правая
        ctx.lineTo(68,48);
        ctx.moveTo(68,50);//нижняя боковая правая
        ctx.lineTo(68,80);
        ctx.moveTo(66,82);//нижняя
        ctx.lineTo(37,82);
        ctx.moveTo(36,49);//средняя
        ctx.lineTo(66,49);
        ctx.stroke();
    },
    '4' : function(myCanvas) {
        var c = document.getElementById(myCanvas);
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0,200,100);
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(35,48);//вержняя боковая левая
        ctx.lineTo(35,18);
        ctx.moveTo(68,18);//верхняя боковая правая
        ctx.lineTo(68,48);
        ctx.moveTo(68,50);//нижняя боковая правая
        ctx.lineTo(68,80);
        ctx.moveTo(36,49);//средняя
        ctx.lineTo(66,49);
        ctx.stroke();
    },
    '5' : function(myCanvas) {
        var c = document.getElementById(myCanvas);
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0,200,100);
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(37,17);//верхняя
        ctx.lineTo(66,17);
        ctx.moveTo(35,48);//вержняя боковая левая
        ctx.lineTo(35,18);
        ctx.moveTo(36,49);//средняя
        ctx.lineTo(66,49);
        ctx.moveTo(68,50);//нижняя боковая правая
        ctx.lineTo(68,80);
        ctx.moveTo(66,82);//нижняя
        ctx.lineTo(37,82);
        ctx.stroke();
    },
    '6' : function(myCanvas) {
        var c = document.getElementById(myCanvas);
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0,200,100);
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(37,17);//верхняя
        ctx.lineTo(66,17);
        ctx.moveTo(35,48);//вержняя боковая левая
        ctx.lineTo(35,18);
        ctx.moveTo(36,49);//средняя
        ctx.lineTo(66,49);
        ctx.moveTo(68,50);//нижняя боковая правая
        ctx.lineTo(68,80);
        ctx.moveTo(66,82);//нижняя
        ctx.lineTo(37,82);
        ctx.moveTo(35,80);//нижняя боковая левая
        ctx.lineTo(35,50);
        ctx.stroke();
    },
    '7' : function(myCanvas) {
        var c = document.getElementById(myCanvas);
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0,200,100);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = '3';
        ctx.beginPath();
        ctx.moveTo(37,17);//верхняя
        ctx.lineTo(66,17);
        ctx.moveTo(68,18);//верхняя боковая правая
        ctx.lineTo(68,48);
        ctx.moveTo(68,50);//нижняя боковая правая
        ctx.lineTo(68,80);
        ctx.stroke();
    },
    '8' : function(myCanvas) {
        var c = document.getElementById(myCanvas);
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0,200,100);
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(37,17);//верхняя
        ctx.lineTo(66,17);
        ctx.moveTo(68,18);//верхняя боковая правая
        ctx.lineTo(68,48);
        ctx.moveTo(35,48);//вержняя боковая левая
        ctx.lineTo(35,18);
        ctx.moveTo(36,49);//средняя
        ctx.lineTo(66,49);
        ctx.moveTo(68,50);//нижняя боковая правая
        ctx.lineTo(68,80);
        ctx.moveTo(66,82);//нижняя
        ctx.lineTo(37,82);
        ctx.moveTo(35,80);//нижняя боковая левая
        ctx.lineTo(35,50);
        ctx.stroke();
    },
    '9' : function(myCanvas) {
        var c = document.getElementById(myCanvas);
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0,200,100);
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(37,17);//верхняя
        ctx.lineTo(66,17);
        ctx.moveTo(68,18);//верхняя боковая правая
        ctx.lineTo(68,48);
        ctx.moveTo(35,48);//вержняя боковая левая
        ctx.lineTo(35,18);
        ctx.moveTo(36,49);//средняя
        ctx.lineTo(66,49);
        ctx.moveTo(68,50);//нижняя боковая правая
        ctx.lineTo(68,80);
        ctx.moveTo(66,82);//нижняя
        ctx.lineTo(37,82);
        ctx.stroke();
    },
    '0' : function(myCanvas) {
        var c = document.getElementById(myCanvas);
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0,200,100);
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(37,17);//верхняя
        ctx.lineTo(66,17);
        ctx.moveTo(68,18);//верхняя боковая правая
        ctx.lineTo(68,48);
        ctx.moveTo(68,50);//нижняя боковая правая
        ctx.lineTo(68,80);
        ctx.moveTo(66,82);//нижняя
        ctx.lineTo(37,82);
        ctx.moveTo(35,80);//нижняя боковая левая
        ctx.lineTo(35,50);
        ctx.moveTo(35,48);//вержняя боковая левая
        ctx.lineTo(35,18);
        ctx.stroke();
    },
    'counterSec' : 0,
    'counterMin' : 0,
};
// прорисовка серого контура часов
// первая цифра
var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = 'grey';
ctx.beginPath();
ctx.moveTo(37,17);//верхняя
ctx.lineTo(66,17);
ctx.moveTo(68,18);//верхняя боковая правая
ctx.lineTo(68,48);
ctx.moveTo(68,50);//нижняя боковая правая
ctx.lineTo(68,80);
ctx.moveTo(66,82);//нижняя
ctx.lineTo(37,82);
ctx.moveTo(35,80);//нижняя боковая левая
ctx.lineTo(35,50);
ctx.moveTo(35,48);//вержняя боковая левая
ctx.lineTo(35,18);
ctx.moveTo(36,49);//средняя
ctx.lineTo(66,49);
// вторая цифра
ctx.moveTo(87,17);
ctx.lineTo(116,17);
ctx.moveTo(118,18);
ctx.lineTo(118,48);
ctx.moveTo(118,50);
ctx.lineTo(118,80);
ctx.moveTo(116,82);
ctx.lineTo(87,82);
ctx.moveTo(85,80);
ctx.lineTo(85,50);
ctx.moveTo(85,48);
ctx.lineTo(85,18);
ctx.moveTo(86,49);
ctx.lineTo(116,49);
ctx.stroke();

function clock() {
    var secCounter, minCounter;
    if (numbers.counterSec < 9) {
        numbers.counterSec=numbers.counterSec+1;
        secCounter=numbers.counterSec;
        numbers[secCounter]('sec');
    } else {
        numbers.counterSec=0;
        secCounter=numbers.counterSec;
        numbers[secCounter]('sec');
        if (numbers.counterMin<9) {
            numbers.counterMin=numbers.counterMin+1;
            minCounter=numbers.counterMin;
            numbers[minCounter]('min');
        } else {
            numbers.counterMin=0;
            minCounter=numbers.counterMin;
            numbers[minCounter]('min');
        }
    }
};
setInterval(clock,1000);