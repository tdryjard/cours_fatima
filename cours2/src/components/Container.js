import React, {useState, useEffect} from 'react';
import './container.css';
import Boutton from './Boutton';


function Container () {

    const [color, setColor] = useState(''); 
    const [number, setNumber] = useState(0)

    const [state, setState] = useState("") 

    


    useEffect(() => {
        console.log(number)
        if (number %2 === 0){ 
            setColor('red')
        } else {
            setColor('blue')
        }
    }, [number])

    const [stock, setStock] = useState('bonjour') //Création d'un state qui vaut bonjour
    let stockage = "Bonjour" //Création d'une variable qui vaut bonjour
    
    stockage = 'salut' // changement de la variable à salut
    //setStock('salut') // changement du state à salut

    return(
        <div>
      <div className={color === 'red' ? 'containerRed' : 'containerBlue'}>
          <Boutton salu={'12345'} number={number} />
      </div>
     <input  onChange={event => setState(event.target.value)} />
     <p>{state} </p>
     <button onClick={() => setState('bonjour')} >button : {state} </button>
     
      </div>
    )
} 

export default Container;