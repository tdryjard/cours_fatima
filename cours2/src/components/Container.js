import React, {useState, useEffect} from 'react';
import './container.css';
import Boutton from './Boutton';


function Container () {

    const [color, setColor] = useState(''); 
    const [number, setNumber] = useState(0)


    useEffect(() => {
        console.log(number)
        if (number %2 === 0){ 
            setColor('red')
        } else {
            setColor('blue')
        }
    }, [number])
    

    return(
      <div className={color === 'red' ? 'containerRed' : 'containerBlue'}>
          <Boutton salu={'12345'} number={number} setNumber={setNumber} />
      </div>
    )
} 

export default Container;