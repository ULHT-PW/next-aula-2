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
        <p className="text-2xl">Contador: {count}</p>
        <button className="p-2 m-4 rounded bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400" onClick={ () => setCount(count + 1) }>Incrementar</button>
    </>
}
