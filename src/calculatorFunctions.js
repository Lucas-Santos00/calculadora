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
    
    if(mathExpression == ''){
        isValid = false
    }

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

    return isValid

}
export {isValidToAddOperator}
