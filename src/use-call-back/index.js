import React, { useRef } from 'react';

const Index = React.memo(({ increament, multipy }) => {
    const renders = useRef(0);
    console.log("renders", renders.current++);
    return (
        <>
            <React.Fragment>
                <button style={{ cursor: 'pointer', border: 'none', width: 100, background: 'lightblue', padding: 10, marginRight: 5 }} onClick={() => increament(5)}>Increment</button>
                <button style={{ cursor: 'pointer', border: 'none', width: 100, background: 'lightblue', padding: 10, marginRight: 5 }} onClick={() => multipy(2)}>Multi</button>
            </React.Fragment>
        </>
    )
});

export default Index;