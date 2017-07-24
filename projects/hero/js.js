/**
 * Created by Galina on 24.07.2017.
 */
var hero = {
    'name':'zavtraMan',
    'xp' : 10,
    'img' : 'http://php.spb.ru/ms/zavtramen.jpg',
    'damage' : [2,3,7],
    'hit': function (a) {
        if (a==1) return 0;
        if (a==2 || a==3) return this.damage[0];
        if (a==4 || a==5) return this.damage[1];
        if (a==6) return this.damage[2];
    }
};
var hero2 = {
    'name':'mimimiMan',
    'xp' : 20,
    'img' : 'http://posmotre.li/images/thumb/f/f5/Hello_kitty_superhero.jpg/240px-Hello_kitty_superhero.jpg',
    'damage' : [1,5,9],
    'hit': function (a) {
        if (a==1) return 0;
        if (a==2 || a==3) return this.damage[0];
        if (a==4 || a==5) return this.damage[1];
        if (a==6) return this.damage[2];
    }
}
function kubik() {
    var rand = 0.5 + Math.random() * 6;
    rand = Math.round(rand);
    document.getElementById('shoot').innerHTML=rand;
    return rand;
};
init();  // начальный вывод
function init() {
    document.querySelector('#hero h2').innerHTML=hero.name;
    document.querySelector('#hero .xp').innerHTML=hero.xp;
    document.querySelector('#hero img').src=hero.img;
};
init2();
function init2() {
    document.querySelector('#hero2 h2').innerHTML=hero2.name;
    document.querySelector('#hero2 .xp').innerHTML=hero2.xp;
    document.querySelector('#hero2 img').src=hero2.img;
};
var h1=document.getElementById('h1udar');
var h2=document.getElementById('h2udar');
var start=document.getElementById('start');
h1.onclick = hit1;
start.onclick = restartF;
function restartF() {
    location.reload();
};
function hit1() {
    var kub=kubik();
    console.log(kub);
    hero2.xp=hero2.xp-hero.hit(kub);
    if (hero2.xp<0 || hero2.xp==0) {
        document.getElementById('res').innerHTML='Победил ZavtraMan';
        h1.style.pointerEvents='none';
        h2.style.pointerEvents='none';
        h1.style.opacity=0.3;
    } else {
        document.querySelector('#hero2 .xp').innerHTML=hero2.xp;
        h1.onclick=null;
        h1.style.opacity=0.3;
        h2.onclick=hit2;}
    h2.style.opacity=1;
};
h2.onclick = hit2;
function hit2() {
    var kub=kubik();
    console.log(kub);
    hero.xp=hero.xp-hero2.hit(kub);
    if (hero.xp<0 || hero.xp==0) {
        document.getElementById('res').innerHTML='Победил mimimiMan';
        h1.style.pointerEvents='none';
        h2.style.pointerEvents='none';
        h2.style.opacity=0.3;
    } else {
        document.querySelector('#hero .xp').innerHTML=hero.xp;
        h2.onclick=null;
        h2.style.opacity=0.3;
        h1.onclick=hit1;
        h1.style.opacity=1;
    }
};