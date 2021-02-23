import React, { useState } from 'react';

const CounterButton = ({ color }) => {
    const buttonStyle = {
        width: '48px',
        height: '48px',
        margin: '5px'
    }
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }
    return (
        <button id='count' value={count} style={buttonStyle} color={color} onClick={updateCount}>{count}</button>
    )
}

export default CounterButton;