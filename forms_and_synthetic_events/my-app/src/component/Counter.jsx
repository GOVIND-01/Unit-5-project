import React, { useState } from "react"

export const Counter = ()=>{
    const [counter, setCounter] = useState(0);
    const handleInc=(counter)=>{
        setCounter(counter);
    }
    const handleDec=(counter)=>{
        setCounter(counter);
    }
    return (
        <>
            <h1>Counter - {counter}</h1>
            <button onClick={()=>{
                handleInc(counter+1)
            }}>Increment</button>
            <button onClick={()=>{
                handleDec(counter-1);
            }}>Decrement</button>
        </>
    )
} 