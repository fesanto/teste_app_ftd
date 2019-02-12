const cadastroBtn = document.querySelector(".cadastro_btn_verde");
const fecharBtn = document.querySelector(".cadastro_modal_btn");

cadastroBtn.addEventListener("click", function(evento){
    evento.preventDefault();
    document.querySelector(".cadastro_modal").style.display = "flex";
});

fecharBtn.addEventListener("click", function(evento){
    evento.preventDefault();
    document.querySelector(".cadastro_modal").style.display = "none";
});