var menu = document.querySelector("#imagemMenu")
var links = document.querySelectorAll(".linkEspecial")
var audioOn = new Audio('click.mp3')

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
