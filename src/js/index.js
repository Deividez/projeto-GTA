const botao = document.querySelector (".btn-plataforma");

const elementoPlataformas = document.querySelector("btn-plaforma .plataformas");

botao.addEventListener("click",()=> {

    
    elementoPlataformas.classList.toggle("ativo");

})
