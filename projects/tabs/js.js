/**
 * Created by Galina on 24.07.2017.
 */
var tabH = document.getElementsByClassName('tab-h');
var tabB = document.getElementsByClassName('tab-b');
for (var i=1; i<tabH.length; i++) {
    tabH[i].classList.add('non-active');
    tabB[i].classList.add('non-active');
}
for (var i=0; i<tabH.length; i++) {
    tabH[i].onclick = tabsF;
}
function tabsF() {
    for (var i=0; i<tabH.length; i++) {
        tabH[i].classList.add('non-active');
        tabB[i].classList.add('non-active');
    }
    this.classList.remove('non-active');
    var x = Number(this.getAttribute('data-tab'));
    x=x-1;//т.к. индекс в массиве начинается с 0, то нам нужно уменьшить наш показатель на 1.
    tabB[x].classList.remove('non-active');
    // tabH[i].style.background='grey';
}