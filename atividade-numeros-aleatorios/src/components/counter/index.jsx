import { useState } from 'react';

export function Counter(){
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

    function randomNumber(){
        return setNumber(Math.floor(Math.random() * 100) + 1)
    }

    return(
        <div className='divCounter'>
            <p>{number}</p>
            <button onClick={randomNumber}>Criar novo número</button>
        </div>
    )
}