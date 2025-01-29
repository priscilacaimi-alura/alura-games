let rentTextButton = "Alugar"
let returnTextButton = "Devolver"

quantityOfRentGames()

/**
 * 
 * @param {*} id item a ser alugado ou devolvido
 * @description o mapeamento do elemento começou através do elemento com id e depois foi descendo para os filhos através de classe
 */
function startRent(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        confirmButton(imagem, botao, rentTextButton)
    } else {
        setNewStatus(imagem, botao, 'dashboard__item__img--rented', 'dashboard__item__button--return', returnTextButton)
    }
}


/**
 * 
 * @param {*} tag tag HTML que será modificada
 * @param {*} id qual o produto
 * @param {*} newStatus novo status ALUGADO/DEVOLVER
 */
function setNewStatus(imagem, botao, imageClass, buttonClass, newStatus) {

    if (newStatus === 'Alugar') {
        imagem.classList.remove(imageClass);
        botao.classList.remove(buttonClass);
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add(imageClass);
        botao.classList.add(buttonClass);
        botao.textContent = 'Devolver';
    }
}

/**
 * 
 * @param {*} imagem 
 * @param {*} botao 
 * @param {*} rentTextButton texto para alterar o botão
 */
function confirmButton(imagem, botao, rentTextButton) {
    if (confirm("Você deseja devolver o game?")) {
        setNewStatus(imagem, botao, 'dashboard__item__img--rented', 'dashboard__item__button--return', rentTextButton)
    }
}

function quantityOfRentGames() {
    let quantityRent = 0;
    let quantityBook = 0;
    let allItems = document.querySelectorAll("ul li[class=dashboard__items__item] a")
    allItems.forEach((item=>{
        if(item.innerHTML === 'Alugar') quantityRent=quantityRent+1
        else quantityBook=quantityBook+1
    }))
    console.log(`Games disponíveis:${quantityRent} - Games alugados: ${quantityBook}`)

}