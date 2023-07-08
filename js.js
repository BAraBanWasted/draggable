let block = document.getElementById('block');
let area = document.getElementById('area');
let area2 = document.getElementById('area2');
let fordrop = document.getElementsByClassName('fordrop');
let bloks = document.getElementsByClassName('block');
let tomat = document.getElementsByClassName('tomat');
let ogur = document.getElementsByClassName('ogur');


for (i of bloks){
    i.ondragstart = start;
}

for (i of fordrop){
    i.ondragenter = f1;
    i.ondragleave = f2;
    i.ondragover = f3;
    i.ondrop = f4;
    i.ondrop= f5
}

let kvadrat

function start(){
    let id = this.id
    console.log(id)
    kvadrat = document.getElementById(id)
}


function f1(){
    console.log('enter')
}

function f2(){
    console.log('leave')
}
function f3(event){
    console.log('over')
    event.preventDefault()
}
function f4(){
    console.log('drop')
    this.appendChild(kvadrat)
    if(area2.contains(ogur[0] , ogur[1])){
        alert('Огурчина!')
    }
}

function f5 (){
    this.appendChild(kvadrat)
    if (area.contains(tomat[0] , tomat[1] , tomat[2])){
        alert('Помедорец!')
    }
}
