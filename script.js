const resultado = document.querySelector('#res')
const altura =  document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

    if(altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        var classification = ''

        if (imc < 18.5) {
            classification = 'Baixo peso'
        } else if (imc < 25) {
            classification = 'Peso normal'
        } else if (imc < 30) {
            classification = 'Sobrepeso'
        } else if (imc < 35) {
            classification = 'Obesidade grau I'
        } else if (imc < 41) {
            classification = 'Obesidade grau II'
        } else {
            classification = 'Obesidade pra III'
        }

        res.value = `IMC: ${imc} (${classification})` 

    }
}

