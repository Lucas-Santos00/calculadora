import React, { useState } from "react"
import './display.css'
let DisplayValue = ''

export default props =>{
    return(
        <>
            <input id="display" className="display" type='text' value={ props.countValue || 0} readOnly/>
        </>
    )

}