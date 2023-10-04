var menu = document.querySelector("#imagemMenu")
var links = document.querySelectorAll(".linkEspecial")
var audioOn = new Audio('click.mp3')
var conteiner02 = document.querySelector('#conteinerTwo')
var conteiner02 = document.querySelector('#conteinerOne')
var teste = document.querySelector('#teste')


links.forEach((link, index)=>{
    menu.addEventListener('click', bl =>{
        link.classList.toggle('show')
        audioOn.currentTime = 0;
        audioOn.play()
    })
})


function abrirModal(){
    const modal = document.querySelector('#janela-modal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e)=>{
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })

}

function abrirModal2(){
    const modal = document.querySelector('#janela-modal2');
    modal.classList.add('abrir2');

    modal.addEventListener('click', (e)=>{
        if(e.target.id == 'fechar2' || e.target.id == 'janela-modal2'){
            modal.classList.remove('abrir2')
        }
    })

}

function abrirModal3(){
    const modal = document.querySelector('#janela-modal3');
    modal.classList.add('abrir3');

    modal.addEventListener('click', (e)=>{
        if(e.target.id == 'fechar3' || e.target.id == 'janela-modal3'){
            modal.classList.remove('abrir3')
        }
    })

}

function abrirModal4(){
    const modal = document.querySelector('#janela-modal4');
    modal.classList.add('abrir4');

    modal.addEventListener('click', (e)=>{
        if(e.target.id == 'fechar4' || e.target.id == 'janela-modal4'){
            modal.classList.remove('abrir4')
        }
    })

}

function abrirModal5(){
    const modal = document.querySelector('#janela-modal5');
    modal.classList.add('abrir5');

    modal.addEventListener('click', (e)=>{
        if(e.target.id == 'fechar5' || e.target.id == 'janela-modal5'){
            modal.classList.remove('abrir5')
        }
    })

}

function abrirModal6(){
    const modal = document.querySelector('#janela-modal6');
    modal.classList.add('abrir6');

    modal.addEventListener('click', (e)=>{
        if(e.target.id == 'fechar6' || e.target.id == 'janela-modal6'){
            modal.classList.remove('abrir6')
        }
    })

}

