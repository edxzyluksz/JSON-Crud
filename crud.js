const fs = require("fs");
const prompt = require(prompt-sync)();

function menu() {
    console.log("=== BRAWLERS ===");
    console.log("1 - Adicionar Brawler");
    console.log("2 - Atualizar Brawler");
    console.log("3 - Listar Brawlers (P/ Classe)");
    console.log("4 - Excluir Brawler");
    console.log("X - Sair");
}

function chooseClass() {
    console.log("--- Escolha a classe ---")
    console.log("1. Algoz")
    console.log("2. Destruidor")
    console.log("3. Tanque")
    console.log("4. Suporte")
    console.log("5. Sniper")
    console.log("6. Controlador")

    const opcao = prompt("\nDigite: ")

    switch (opcao){
        case "1":
            return "algoz";
        case "2":
            return "destruidor";
        case "3":
            return "tanque";
        case "4":
            return "suporte";
        case "5":
            return "sniper";
        case "6":
            return "controlador";
    }

    return false
}

function main () {
    menu();
    const opcao = prompt("Selecione uma opção: ");

    do {
        switch (opcao){
            case "1":
                addBrawler();
                break;
            case "2":
                updtBrawler();
                break
            case "3":
                getBrawlers();
                break
            case "4":
                delBrawlers();
                break;
            case "5":
                console.log("Até a próxima!");
                return
            default:
                console.log("Digite corretamente!");
                console.clear();
        }
    } while (opcao !== "X")
}

function addBrawler() {
    const classe = chooseClass();
    if (classe) {
        
    }
}

function updtBrawler() {
    const classe = chooseClass();
    if (classe) {

    }
}

function getBrawlers() {
    const classe = chooseClass();
    if (classe) {

    }
}

function delBrawlers() {
    const classe = chooseClass();
    if (classe) {
        
    }
}