import "./css/index.css"
import IMask from "imask"

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

const securityCode = document.querySelector("#security-code")

const securityCodePattern = {
    mask: "0000"
}

const securityCodeMasked = IMask(securityCode, securityCodePattern)

const expirationDate = document.querySelector("#expiration-date")

const expirationDatePattern = {
    mask: 'MM{/}YY',
    blocks: {
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12
        },
        YY: {
            mask: IMask.MaskedRange,
            from: String(new Date().getFullYear()).substring(2),
            to: String(new Date().getFullYear() + 10).substring(2)
        }
    }
}

const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

setCardType("default")

globalThis.setCardType = setCardType