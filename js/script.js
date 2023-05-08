
// //Recuperar um item específico com a função querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

// //Recuperar uma lista de elementos com a função querrySelectorAll
// const seletores = document.querySelectorAll("li")

// seletores.forEach((item)=>{   //
    
//     if (item.textContent == "Item-15") {
//         let meuItem = item
//         console.log(`Item selecionado : ${meuItem.textContent} `) //interpolação
//         meuItem.textContent = "TÁ DOMINADO"
//     }


//     //Estudar
//     //setTimeOute
//     //setInterval
//     //Random
//     //Math.Ceil
//     //Math.Random
//     //Math.Floor
// })

// console.log(seletores)

// //======================================================================================

// let tmp = ""

// function mudarCor() {
    
//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round(Math.random() * 255); //random gera um número aleatório|ceil arredonda para cima|floor arredonda para baixo|round arredonda tanto pra baixo, quanto pra cima
//     console.log(r);
//     g = Math.round(Math.random() * 255);
//     console.log(g);
//     b = Math.round(Math.random() * 255);
//     console.log(b);

//     const cabecalho = document.querySelector(".cabecalho");
//     cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

//     tmp = setTimeout(mudarCor, 1000) //o segundo parâmetro é feito em milisegundos. Os parâmetros da função "mudarCor" tem que ser colocado após os milisegundos

// }

// function mudarBanner1() {

//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round(Math.random() * 255);
//     console.log(r);
//     g = Math.round(Math.random() * 255);
//     console.log(g);
//     b = Math.round(Math.random() * 255);
//     console.log(b);

//     const banner1 = document.querySelector(".banner-1");

//     banner1.style.backgroundColor = `rgb(${r},${g},${b})`;

//     tmp = setTimeout(mudarBanner1, 1000)

// }

// function mudarBanner2() {

//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round(Math.random() * 255);
//     console.log(r);
//     g = Math.round(Math.random() * 255);
//     console.log(g);
//     b = Math.round(Math.random() * 255);
//     console.log(b);

//     const banner2 = document.querySelector(".banner-2");

//     banner2.style.backgroundColor = `rgb(${r},${g},${b})`;

//     tmp = setTimeout(mudarBanner2, 1000)

// }

// mudarCor();
// mudarBanner1();
// mudarBanner2();





//======================================================================================
//Exercício
// let tmp1 = ""
// let tmp2 = ""

// function mudarImagemBanner1() {

//     let b = 0;

//     b = Math.round(Math.random() * 2);
//     console.log(b);
    
//     if (b == 0) {
//         const banner1Lateral1 = document.querySelector(".banner-img-1")
//         banner1Lateral1.style.zIndex = "5"
//         const banner2Lateral1 = document.querySelector(".banner-img-2")
//         banner2Lateral1.style.zIndex = "1"
//         const banner3Lateral1 = document.querySelector(".banner-img-3")
//         banner3Lateral1.style.zIndex = "1"
//     }
//     if (b == 1) {
//         const banner1Lateral1 = document.querySelector(".banner-img-1")
//         banner1Lateral1.style.zIndex = "1"
//         const banner2Lateral1 = document.querySelector(".banner-img-2")
//         banner2Lateral1.style.zIndex = "5"
//         const banner3Lateral1 = document.querySelector(".banner-img-3")
//         banner3Lateral1.style.zIndex = "1"
//     }
//     if (b == 2) {
//         const banner1Lateral1 = document.querySelector(".banner-img-1")
//         banner1Lateral1.style.zIndex = "1"
//         const banner2Lateral1 = document.querySelector(".banner-img-2")
//         banner2Lateral1.style.zIndex = "1"
//         const banner3Lateral1 = document.querySelector(".banner-img-3")
//         banner3Lateral1.style.zIndex = "5"
//     }

//     tmp1 = setTimeout(mudarImagemBanner1, 500)

//     }
    


//     function mudarImagemBanner2() {

//         let b = 0;
    
//         b = Math.round(Math.random() * 2);
//         console.log(b);
        
//         if (b == 0) {
//             const banner1Lateral1 = document.querySelector(".banner-img-4")
//             banner1Lateral1.style.zIndex = "5"
//             const banner2Lateral1 = document.querySelector(".banner-img-5")
//             banner2Lateral1.style.zIndex = "1"
//             const banner3Lateral1 = document.querySelector(".banner-img-6")
//             banner3Lateral1.style.zIndex = "1"
//         }
//         if (b == 1) {
//             const banner1Lateral1 = document.querySelector(".banner-img-4")
//             banner1Lateral1.style.zIndex = "1"
//             const banner2Lateral1 = document.querySelector(".banner-img-5")
//             banner2Lateral1.style.zIndex = "5"
//             const banner3Lateral1 = document.querySelector(".banner-img-6")
//             banner3Lateral1.style.zIndex = "1"
//         }
//         if (b == 2) {
//             const banner1Lateral1 = document.querySelector(".banner-img-4")
//             banner1Lateral1.style.zIndex = "1"
//             const banner2Lateral1 = document.querySelector(".banner-img-5")
//             banner2Lateral1.style.zIndex = "1"
//             const banner3Lateral1 = document.querySelector(".banner-img-6")
//             banner3Lateral1.style.zIndex = "5"
//         }

//         tmp2 = setTimeout(mudarImagemBanner2, 500)
//         }


// mudarImagemBanner1();
// mudarImagemBanner2();
//======================================================================================
//======================================================================================
//Exercicio corrigido pelo professor


// function mudaBanner() {
//     const imgElement1 = document.querySelector(".banner-1 img"); //pegou a classe "banner-1" e pegou uma img dentro dessa classe
//     //console.log(imgElement1)
//     let nr = Math.ceil(Math.random() * 3);
//     // imgElement1.src = "./img/banner-lateral-"+nr+".png";
//     imgElement1.src =`./img/banner-lateral-${nr}.png`;
//     setTimeout(mudaBanner2, 2000);
// }

// function mudaBanner2() {
//     const imgElement1 = document.querySelector(".banner-2 img"); //pegou a classe "banner-1" e pegou uma img dentro dessa classe
//     //console.log(imgElement1)
//     let nr = Math.ceil(Math.random() * 3);
//     // imgElement1.src = "./img/banner-lateral-"+nr+".png";
//     imgElement1.src =`./img/banner-lateral-${nr}.png`;
//     setTimeout(mudaBanner, 2000);
// }


// function mudaBanner() {
//     const imgElement = document.querySelector(".banner-1 img"); //pegou a classe "banner-1" e pegou uma img dentro dessa classe
//     //console.log(imgElement1)
//     let nr = Math.ceil(Math.random() * 3);
//     // imgElement1.src = "./img/banner-lateral-"+nr+".png";
//     imgElement.src =`./img/banner-lateral-${nr}.png`;

//     const imgElement2 = document.querySelector(".banner-2 img"); //pegou a classe "banner-1" e pegou uma img dentro dessa classe
//     //console.log(imgElement1)
//     nr = Math.ceil(Math.random() * 3);
//     // imgElement1.src = "./img/banner-lateral-"+nr+".png";
//     imgElement2.src =`./img/banner-lateral-${nr}.png`;
//     setTimeout(mudaBanner, 1000);
// }

// mudaBanner();

//=====================================================================================

//Exercicio 2
function mudaLampada() {
    // const botao = document.querySelector("button");
    const botoes = document.querySelectorALL("button");
botoes.forEach( (botao)=>{
    botao
} ) //ele conhece todos os botoes
    botao.addEventListener("click", function(){
        if(this.textContent == "LIGAR"){
            const bulbElement = document.querySelector("img[alt='Lampada apagada']");
            bulbElement.src = "./img/pic_bulbon.gif";
            bulbElement.alt = "Lampada acesa";
            this.textContent = "DESLIGAR"
        }else{
            const bulbElement = document.querySelector("img[alt='Lampada acesa']");
            bulbElement.src = "./img/pic_bulboff.gif";
            bulbElement.alt = "Lampada apagada";
            this.textContent = "LIGAR"
        }
    })

}

/*
var                         - variável
let                         - variável
const                       - variável
document.write              - 
alert                       -
if                          - estrutura condicional
document.getElementById     - resgata um elemento pelo id
.addEventListener           - adiciona eventos a algum elemento
.style                      - código para usar css no js
function                    - cria uma função
switch                      - cria uma switch case
.querrySelector             - resgata elementos dentro de uma variável ou tag
.textContent                - verifica o conteúdo dentro de algum elemento
*/

