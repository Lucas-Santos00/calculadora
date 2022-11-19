import React from "react";
import './button.css'

export default props =>{

    const btnStyles = {
        background: props.color || '#F1EFF1',
        width: props.size ? (props.size * 25)+'%' : '25%',
        color: props.color ? '#fff' : '#000'
    }

    return(
        <>
            <button onClick={props.click} style={btnStyles} value={props.children}>
                {props.children}
            </button>
        </>
    )
}