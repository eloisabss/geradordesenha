let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = documento. querySelector("#container-senha");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.volue;

slider.oninput = function() {
sizePassword.innerHTML = this.volue;
}


function generatePassword(){

let pass = '';
for(let i = 0, n = charset.  comprimento;  i < sliderElement. valor;  ++i){
    pass += charset. charAt(Math.floor (Math.random() * n));
}

console.log(pass)
containerPassword.classList.remover("hide");
senha.innerHTML = pass;
novaSenha = pass;
}

function copyPassword(){
alert("Senha copiada com sucesso!")
navigator.clipboard.writeText(novaSenha);
}