import React, {useState} from 'react';
import './Button.css';

function Boutton ({setNumber, number, salu}) {

    return (
        <div>
            <button className="button" onClick={() => {
                setNumber(number+1)}
             }>
                click me
            </button>
            <p>{number}</p>
        </div>
    )
}

export default Boutton ;