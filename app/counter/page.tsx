'use client'

import React, { useEffect, useState } from 'react'

export default function page() {

    function inicializa() {
        const countStored = '3'
        return countStored? parseInt(countStored) : 0
    }

    const [count, setCount] = useState(() => {
        const countStored = localStorage.getItem('count')
        return countStored? parseInt(countStored) : 0
    })

    useEffect( () => {
        console.log(count)
        localStorage.setItem('count', `${count}`);
    }, [count]);

    useEffect( () => {
        console.log('preludio')
    }, []); 

    return <>
        <p>Contador: {count}</p>
        <button onClick={ () => setCount(count + 1) }>Incrementar</button>
    </>
}
