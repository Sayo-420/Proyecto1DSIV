let carruselCurrent = 1;
let img1 = document.getElementById('car1img')
let img2 = document.getElementById('car2img')
let img3 = document.getElementById('car3img')
let img4 = document.getElementById('car4img')
let img5 = document.getElementById('car5img')

let rad1 = document.getElementById('car1rad')
let rad2 = document.getElementById('car2rad')
let rad3 = document.getElementById('car3rad')
let rad4 = document.getElementById('car4rad')
let rad5 = document.getElementById('car5rad')

function hide(number){
    if(number==1){
        img1.classList.add('hidden')
    }
    else if(number==2){
        img2.classList.add('hidden')
    }
    else if(number==3){
        img3.classList.add('hidden')
    }
    else if(number==4){
        img4.classList.add('hidden')
    }
    else if(number==5){
        img5.classList.add('hidden')
    }
}

function show(number){
    if(number==1){
        img1.classList.remove('hidden')
        rad1.checked=true
    }
    else if(number==2){
        img2.classList.remove('hidden')
        rad2.checked=true
    }
    else if(number==3){
        img3.classList.remove('hidden')
        rad3.checked=true
    }
    else if(number==4){
        img4.classList.remove('hidden')
        rad4.checked=true
    }
    else if(number==5){
        img5.classList.remove('hidden')
        rad5.checked=true
    }
}

function uncheck(){
    rad1.checked = false;
    rad2.checked = false;
    rad3.checked = false;
    rad4.checked = false;
    rad5.checked = false;
}

function siguiente(){
    hide(carruselCurrent)
    if(carruselCurrent==5){
        carruselCurrent=1
    }
    else{
        carruselCurrent+=1;
    }
    uncheck()
    show(carruselCurrent)
}

function atras(){
    hide(carruselCurrent)
    if(carruselCurrent==1){
        carruselCurrent=5
    }
    else{
        carruselCurrent-=1;
    }
    uncheck()
    show(carruselCurrent)
}

function img1cambio(){
    hide(carruselCurrent)
    carruselCurrent=1;
    img1.classList.remove('hidden')
}
function img2cambio(){
    hide(carruselCurrent)
    carruselCurrent=2;
    img2.classList.remove('hidden')
}
function img3cambio(){
    hide(carruselCurrent)
    carruselCurrent=3;
    img3.classList.remove('hidden')
}
function img4cambio(){
    hide(carruselCurrent)
    carruselCurrent=4;
    img4.classList.remove('hidden')
}
function img5cambio(){
    hide(carruselCurrent)
    carruselCurrent=5;
    img5.classList.remove('hidden')
}