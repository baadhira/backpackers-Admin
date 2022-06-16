import React, { useCallback, useEffect, useState } from 'react'

import "./Input.css"

export const Text = (props) => {
    return (
        <input style={{ width: props.width, margin: props.margin }}
            defaultValue={props.defaultValue}
            innerRef={props.innerRef} invalid={props.invalid} id={props.id} name={props.name}
            onChange={props.onChange} className='input text' type={props.type} placeholder={props.placeholder} />
    )
}


export const TextArea = (props) => {
    return (
        <textarea defaultValue={props.defaultValue} style={{ width: props.width }} onChange={props.onChange} className='input textarea' placeholder={props.placeholder}></textarea>
    )
}



export const DropDown = (props) => {


    return (

        <select onChange={props.onChange} style={{ width: props.width }} className='input dropdown' name="" id="">

            {props.children}

        </select>


    )
}


