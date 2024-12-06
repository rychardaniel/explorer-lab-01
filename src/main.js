import "./css/index.css"
import IMask from "imask"

const cor1Cartao = document.querySelector("#app > section > div.cc-bg > svg > g > g:nth-child(1) > path")
const cor2Cartao = document.querySelector("#app > section > div.cc-bg > svg > g > g:nth-child(2) > path")
const logoCartao = document.querySelector("#app > section > div.cc-logo > span:nth-child(2) > img")

// Configurar as cores do cartão e a imagem da bandeira
function setCardType(type) {
    const colors = {
        visa: ["#436D99", "#2D57F2"],
        mastercard: ["#DF6F29", "#C69347"],
        cielo: ["#5a646e", "#00aeef"],
        default: ["black", "gray"]
    }

    const logos = {
        visa: "public/cc-visa.svg",
        mastercard: "public/cc-mastercard.svg",
        cielo: "public/cc-cielo.svg",
        default: "public/cc-default.svg"
    }

    cor1Cartao.setAttribute("fill", colors[type][0])
    cor2Cartao.setAttribute("fill", colors[type][1])
    logoCartao.setAttribute("src", logos[type])
}

// Criação de máscaras para os inputs de dados
const securityCode = document.querySelector("#security-code") // Pega o input de CVC

const securityCodePattern = { // Define uma máscara que aceita somente 4 ou menos números
    mask: "0000"
}

const securityCodeMasked = IMask(securityCode, securityCodePattern) // Aplica a máscara no input e define uma variável que contem o valor do input com a máscara aplicada

const expirationDate = document.querySelector("#expiration-date") // Pega o input da data de expiração do cartão

const expirationDatePattern = { // Define uma máscara para o formato MM/YY sendo o MM o mês e o YY o ano
    mask: 'MM{/}YY',
    blocks: {
        MM: {
            mask: IMask.MaskedRange, // Deve ser essa propriedade do IMask para definir um intervalor de valor
            from: 1, // Início do intervalo (incluso)
            to: 12 // Fim do intervalo (incluso)
        },
        YY: {
            mask: IMask.MaskedRange,
            from: String(new Date().getFullYear()).substring(2), // Pega o ano atual, transforma em string ("2024"), e seleciona a partir do 3º dígito ("24")
            to: String(new Date().getFullYear() + 10).substring(2) // // Pega o ano atual, soma 10, transforma em string ("2034"), e seleciona a partir do 3º dígito ("34")
        }
    }
}

const expirationDateMasked = IMask(expirationDate, expirationDatePattern) // Aplica a máscara no input (input, máscara), e adiciona a uma váriavel o valor do input com máscara

setCardType("default")

globalThis.setCardType = setCardType