import React from 'react'
import './Button.scss'
export default function Button(props) {
    return (
        <div className="Button">
            <button onClick={props.BtnHAndler}>{props.value}</button>
        </div>
    )
}
