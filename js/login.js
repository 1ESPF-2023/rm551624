"use strict"; //diretiva fala que vc não pode deiixar variável sem declarar
let usuario = "";
let senha = "";

const botaoSubmit = document.querySelector("#btnSubmit");

//validação dos botões
botaoSubmit.addEventListener("click", ()=>{

    const inputUser = document.querySelector("input[name='nmUser']"); // colchete usado pra isolar e falar qual nome do atributo que está resgatando. Sempre usado para atributo
    const inputPass = document.querySelector("input[name='pass']");
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");

    //estudar length-array
    if(inputUser.value.length > 3 && inputPass.value.length > 3){
        // inputUser.setAttribute("style", "outline-color:#00ff00;")
        // inputPass.setAttribute("style", "outline-color:#00ff00;")
        labelUser.setAttribute("style","color:#00ff00;");
        labelPass.setAttribute("style","color:#00ff00;");
    }else{
        labelUser.setAttribute("style","color:#ff0000;");
        labelPass.setAttribute("style","color:#ff0000;");
    }

});
