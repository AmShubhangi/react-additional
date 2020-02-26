import React, { useState, useCallback } from 'react';
import Index from '.';

const Hello = () => {
    const [count, setCount] = useState(0);

    const increament = useCallback((n) => {
        setCount(c => c + n);
    }, [setCount])

    const multipy = useCallback(() => {
        setCount(c => c * 2);
    }, [setCount])

    return (
        <>
            <Index increament={increament} multipy={multipy} />
            <div>
                <h3>Count : {count}</h3>
            </div>
        </>
    )
}

export default Hello;