/**
 * Created by Galina on 21.07.2017.
 */
const mini = document.getElementsByClassName('mini');
const mini1 = document.getElementsByClassName('mini1');
const display = document.getElementById('display');
const display1 = document.getElementById('display1');
const gallery1 = document.getElementById('gallery1');
const a = ['mini1.png', 'mini2.png', 'mini3.png', 'mini4.png', 'mini5.png', 'mini6.png'];
var out='';
//отображение главного рисунка = рисунку, на котором кликает мышью пользователь + отображение активного изображения в списке миниатюр
for (i=0; i< mini.length; i++) {
    mini[i].onclick=fDisplay;
}
function fDisplay() {
    display.style.backgroundImage = 'url(' + this.src + ')';
    for (var i = 0; i < mini.length; i++) {
        mini[i].classList.remove('active');
        this.classList.add('active');
    }
};
mini[0].click();
//заполнение изображений миниатюр при помощи массива + автоматическое изменение главного рисунка и выделение активной миниатюры в списке
for (var i=0; i< a.length; i++) {
    out +='<img class="mini1" src="img/'+a[i]+'" alt="">';
    gallery1.innerHTML = out;
    display1.style.backgroundImage='url(img/'+a[0]+')';
};
var count=0;
function show() {
   (count < 5) ? count++ : count = 0;
   display1.style.backgroundImage='url(img/'+a[count]+')';
    for (var i = 0; i < mini1.length; i++) {
        mini1[i].classList.remove('active');
        mini1[count].classList.add('active');
    }
   setTimeout(show,2000);
  };
show();