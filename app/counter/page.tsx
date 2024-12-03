'use client'

import React, { useEffect, useState } from 'react'

export default function page() {

    const [count, setCount] = useState(() => {
        const countStored = localStorage.getItem('count')
        return countStored? parseInt(countStored) : 0
    })

    useEffect( () => {
        localStorage.setItem('count', `${count}`);
    }, [count]);

    return <>
        <p>Contador: {count}</p>
        <button onClick={ () => setCount(count + 1) }>Incrementar</button>
    </>
}
