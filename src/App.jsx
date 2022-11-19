import React, { useState } from "react";
import Display from "./components/display/Display";
import Buttons from "./components/buttons/Buttons";
import './app.css'
import {isValidToAddOperator} from './calculatorFunctions'
let count = ''

export default App =>{

    let [btnValue, setBtnValue] = useState('')

    let delValue = _=>{
        count = ''
        setBtnValue('')
    }

    let sendValues = e =>{
        count += e.target.value
        setBtnValue(count)
    }

    let operatorsFunction = e =>{
        if(isValidToAddOperator(count, e.target.value)){
            count += e.target.value
            setBtnValue(count)
        }
    }

    let evalDisplay = e =>{
        if(isValidToAddOperator(count, e.target.value)){
            count = eval(count)
            console.log(eval(count))
            setBtnValue(count)
        }
    }

    return(
        <main className="mainStyle">
            <h1>calculadora</h1>
            <div className="calculatorBody">
                <Display countValue={btnValue}/>

                <div className="keyboardBody">
                    <Buttons click={delValue} size={3} >AC</Buttons>
                    <Buttons click={operatorsFunction} color={'#EB8545'} >/</Buttons>
                    <Buttons click={sendValues}>7</Buttons>
                    <Buttons click={sendValues}>8</Buttons>
                    <Buttons click={sendValues}>9</Buttons>
                    <Buttons click={operatorsFunction} color={'#EB8545'}>*</Buttons>
                    <Buttons click={sendValues}>4</Buttons>
                    <Buttons click={sendValues}>5</Buttons>
                    <Buttons click={sendValues}>6</Buttons>
                    <Buttons click={operatorsFunction} color={'#EB8545'}>-</Buttons>
                    <Buttons click={sendValues}>1</Buttons>
                    <Buttons click={sendValues}>2</Buttons>
                    <Buttons click={sendValues}>3</Buttons>
                    <Buttons click={operatorsFunction} color={'#EB8545'}>+</Buttons>
                    <Buttons click={sendValues} size={2}>0</Buttons>
                    <Buttons click={operatorsFunction}>.</Buttons>
                    <Buttons click={evalDisplay} color={'#EB8545'}>=</Buttons>
                </div>
            </div>
        </main>
    )
}