const converterButao = document.querySelector(".botao-converter")
const converterSelect = document.querySelector(".valores-select")

function converterValores() {
    const inputValor = document.querySelector(".input-valor").value
    const valorConverter = document.querySelector(".valor-converter")
    const valorAserConvertido = document.querySelector(".valor-a-ser-convertido")

    const dolarDoDia = 5.2
    const euroDoDia = 6.2
    const libraDoDia = 7.2



    if (converterSelect.value == "dólar") {
        valorAserConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / dolarDoDia)

    }

    if (converterSelect.value == "euro") {
        valorAserConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euroDoDia)
    }
 
    if(converterSelect.value == "libra"){
        valorAserConvertido.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency:"GBP"
        }).format(inputValor / libraDoDia)
        
    }


    valorConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)

   console.log(converterValores)

}

function mudarValores(){
    const nomeConverter = document.getElementById("nome-converter")
    const trocarImagem = document.querySelector(".bandeira-eua")

    if(converterSelect.value == "dólar"){
        nomeConverter.innerHTML = "Dólar"
        trocarImagem.src ="./assets/bandeira-EUA.png"
    }

    if(converterSelect.value == "euro"){
        nomeConverter.innerHTML = "euro"
        trocarImagem.src ="./assets/bandeira-euro.png"
    }

    if (converterSelect.value == "libra"){
        nomeConverter.innerHTML = "libra"
        trocarImagem.src ="./assets/libra 1.png"
    }

    converterValores()
}


converterSelect.addEventListener("change",mudarValores)
converterButao.addEventListener("click", converterValores)