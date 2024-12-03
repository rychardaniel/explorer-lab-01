import "./css/index.css"

const cor1Cartao = document.querySelector("#app > section > div.cc-bg > svg > g > g:nth-child(1) > path")

const cor2Cartao = document.querySelector("#app > section > div.cc-bg > svg > g > g:nth-child(2) > path")

const logoCartao = document.querySelector("#app > section > div.cc-logo > span:nth-child(2) > img")



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

setCardType("default")

globalThis.setCardType = setCardType