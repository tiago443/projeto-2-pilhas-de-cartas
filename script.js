let cards = []
let choice

do {
    let cardsList = "Baralho:\n"
    if (cards.length === 0) {
        cardsList += "0"
    } else {
        for (let index = 0; index < cards.length; index++) {
            cardsList += `${index + 1}º - ${cards[index]}\n`
        }
    }

    let menu = cardsList + "\n\nEscolha uma opção:\n" +
               "1 - Adicionar uma carta\n" +
               "2 - Puxar uma carta\n" +
               "3 - Sair"

    choice = prompt(menu)

    if (choice === "1") {
        let cardName = prompt("Digite o nome da carta:")
        if (cardName) {
            cards.unshift(cardName)
            alert(cardName + " adicionada ao baralho.")
        } else {
            alert("Nome não pode ser vazio.")
        }
    } else if (choice === "2") {
        if (cards.length > 0) {
            alert("Carta puxada: " + cards.shift())
        } else {
            alert("Nenhuma carta no baralho.")
        }
    }
} while (choice !== "3")

alert("Sistema encerrado.")