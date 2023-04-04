import React from 'react';


const Button = (props) => {


    return (
        <button className={`${props.styling}`}
            data-id={props.id}
            type={props.type}
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            onClick={props.handleClick}
            style={{backgroundColor:`${props.styling}`}}
            > 
            <h4>{props.label}</h4>
        </button>
    )
}
export default Button;