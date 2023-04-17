//recuperando o botão com o getElementById
const botao = document.getElementById("btn-1")

//Recuperar um item específico com a função querySelector(parâmetro)
const seletor = document.querySelector("li")
console.log(seletor.textContent)

//Recuperar uma lista de elementos com a função querrySelectorAll
const seletores = document.querySelectorAll("li")

seletores.forEach((item)=>{   //
    
    if (item.textContent == "Item-15") {
        let meuItem = item
        console.log(`Item selecionado : ${meuItem.textContent} `) //interpolação
        meuItem.textContent = "TÁ DOMINADO"
    }


    //Estudar
    //setTimeOute
    //setInterval
    //Random
    //Math.Ceil
    //Math.Random
    //Math.Floor
})

console.log(seletores)