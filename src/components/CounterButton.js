import React, { useState } from 'react';

const CounterButton = ({ color }) => {
    console.log('Counter')
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }
    return (
        <button color={color} onClick={updateCount}>{count}</button>
    )
}

export default CounterButton;