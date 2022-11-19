let equacaoInvalida = '0.0000+5'
let equacaoValida = '5+6+7+8+'

let isDiferente = (arr, value) =>{
    let isDiferente = true

    arr.map(e =>{
        if(e == value){
            isDiferente = false
        }})

    return isDiferente
}

let isValidToAddOperator = (mathExpression, newOperator)=>{
    mathExpression += '' //Tornar em string
    const expressionToArray = mathExpression.split('')
    const mathOperators = ['/', '*', '-', '+', '.']
    const lastCaracter = expressionToArray[expressionToArray.length - 1]
    let isValid = true
    //---

    //Verificar se o ultimo valor já é um operador
    isDiferente(mathOperators, lastCaracter) ? isValid = true : isValid = false

    //Invalidar 0.0.0 
    if(newOperator == '.'){
        let hasFloat = false
        let hasOperator = false

        expressionToArray.map(e =>{

            if(e == '.'){
                hasFloat = true
                hasOperator = false
            }

            if(e == '/' || e == '*' || e == '-' || e == '+'){
                hasOperator = true
                hasFloat = false
            }
        })

        if(hasFloat){
            isValid = false
        }

    }

    // console.log(isValid)
    return isValid

}

// isValidToAddOperator(equacaoInvalida, '.')

export {isValidToAddOperator}

/*
TODO: [X] Verificar se o ultimo valor ja é um operador.
TODO: [X] Invalidar '5.5.5'

*/